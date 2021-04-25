import Commit from "./Commit.js";
import StagingArea from "./StagingArea.js";
import BranchList from "./BranchList.js";
import WorkingDirectory from "./WorkingDirectory.js";

class Repository {
    constructor(name){  
        this.head = "master";
        this.name = name;
        this.workingDirectory = new WorkingDirectory();    
        this.stagingArea = new StagingArea();
        this.branchList = new BranchList();
        this.commits = [];
    }

    createFile(name, content) {
        this.workingDirectory.createFile(name, content);
    }

    updateFile(name, content){  
        this.workingDirectory.updateFile(name, content);
    }
    
    staging(files){
        files.forEach(this.stagingArea.staging);
    }

    commit(message){
        const commit = new Commit(
            message,
            this.branchList.commitIdOfBranch(this.head),
            [...this.stagingArea]
        );
        this.commits.push(commit);
        this.branchList.updateBranch(this.head, commit.id);
        this.workingDirectory.commit();
    }
    
    checkoutBranch(branchName){
        this.head = branchName;
    }
    
    createBranch(branchName){
        this.branchList.addBranch(branchName, this.head);
    }
    
} 

export default Repository;
