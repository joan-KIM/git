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
        Array.prototype.getCommitById = function(id) {
            return this.find(commit => commit.id === id);
        }
    }

    createFile(name, content) {
        this.workingDirectory.createFile(name, content);
    }

    updateFile(name, content){  
        this.workingDirectory.updateFile(name, content);
    }
    
    staging(files){
        files.forEach(this.stagingArea.staging.bind(this.stagingArea));
        // files.forEach(file => this.stagingArea.staging(file));
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
