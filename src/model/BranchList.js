class BranchList {
    constructor(){
      this.master = null;
    }

    commitIdOfBranch(branchName){
        return this[branchName]
    }

    addBranch(branchName, head){
        const commitId = this.commitIdOfBranch(head);
        this[branchName] = commitId;
    }

    updateBranch(branchName, commitId){
        this[branchName] = commitId;
    }
}

export default BranchList;
