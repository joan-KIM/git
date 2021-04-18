import File from "./File.js";
import Blob from "./Blob.js";
import Branch from "./Branch.js";
import Commit from "./Commit.js";
import { COMMITTED, STAGED } from "../constants/status.js";

// 객체 모양틀
class Repository {
    // 객체 안의 함수는 function 안써줘도 됨 = 메소드
    constructor(name){  // return this; -> this? Repository가 만드는 객체
        this.head = "master";
        this.name = name;
        this.workingDirectory = [];    // 배열 : 순서대로 가져올 수 있다, 객체 : key값으로 가져올 수 있다
        this.stagingArea = [];

        const branch = new Branch("master", null);
        this.branches = [ branch ];

        this.commits = [];
    }

    createFile(name, content){
        const file = new File(name, content);
        this.workingDirectory.push(file);
    }

    updateFile(name, content){  // touch
        const file = this.findFile(name);
        file.updateContent(content);
    }

    findFile(fileName){     // 동일한 이름을 가진 파일 찾기
        const length = this.workingDirectory.length;

        for(let i = 0; i < length; i++){
            if(this.workingDirectory[i].name == fileName){
                return this.workingDirectory[i];
            }
        }
    }
    
    // 여러개 파일 add? git add <파일이름> <파일이름>
    staging(fileName){
        const length = this.workingDirectory.length;
        
        // add <파일이름>
        if(fileName){
            const file = this.findFile(fileName);
            const blob = createBlob(file);
            this.inputStagingArea(blob);
            file.updateStatus(STAGED);
        }

        // add .
        for(let i = 0; i < length; i++){
            if(this.workingDirectory[i].isModified()){
                const blob = createBlob(this.workingDirectory[i]);
                this.inputStagingArea(blob);
                this.workingDirectory[i].updateStatus(STAGED);
            }
        }
        
    }
    
    inputStagingArea(blob){
        const length = this.stagingArea.length;
        
        if(this.stagingArea.length == 0){
            this.stagingArea.push(blob);
            return;
        }
        
        for(let i = 0; i < length; i++){
            if(this.stagingArea[i].fileId == blob.fileId){
                this.stagingArea.splice(i, 1);
                this.stagingArea.push(blob);
                return;
            }
        }
        
        this.stagingArea.push(blob);
    }    
    
    commit(message){
        const commit = new Commit(message);
        const branch = this.findBranch(this.head);
        
        commit.preCommitId = branch.commitId;
        commit.tree = this.stagingArea.slice();
        branch.commitId = commit.id;
        
        this.commits.push(commit);
        
        const file = this.workingDirectory.find(file => file.isStaged());
        file.updateStatus(COMMITTED);
    }
    
    findBranch(branchName){
        return this.branches.find( branch => branch.name = branchName);
    }
    
    createBranch(branchName){
        const branch = new Branch(branchName);
        
        const commitId = this.findBranch(this.head).commitId;
        branch.commitId = commitId;
        this.branches.push(branch);
    }
    
    checkoutBranch(branchName){
        this.head = branchName;
    }
} 

function createBlob(file){
        const fileId = file.id;
        const content = file.content;

        const blob = new Blob(fileId, content);
        return blob;
}

export default Repository;
