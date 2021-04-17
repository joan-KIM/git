import File from "./File.js";
import Blob from "./Blob.js";
import { STAGED } from "../constants/status.js";
import Branch from "./Branch.js";

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

    createBlob(file){
        const fileId = file.id;
        const content = file.content;

        const blob = new Blob(fileId, content);
        return blob;
    }

    // 여러개 파일 add? git add <파일이름> <파일이름>
    staging(fileName){
        // 1. working directory에서 변화된 파일 찾기
        // 2. blob으로 생성하기
        // 3. blob을 staging area에 넣기
        // 4. 변화된 파일을 staged로 변경
        const length = this.workingDirectory.length;

        // add <파일이름>
        if(fileName){
            const file = this.findFile(fileName);
            const blob = this.createBlob(file);
            this.inputStagingArea(blob);
            file.updateStatus(STAGED);
        }

        // add .
        for(let i = 0; i < length; i++){
            if(this.workingDirectory[i].isModified()){
                const blob = this.createBlob(this.workingDirectory[i]);
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

}

export default Repository;
