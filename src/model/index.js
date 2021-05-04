import Repository from './Repository.js';

class Model{
    constructor(){
        this.repository = null;
    }

    createRepository(name) {
        this.repository = new Repository(name);
    }

    createFile(name, content){
        this.repository.createFile(name, content);
    }

    updateFile(name, content){
        this.repository.updateFile(name, content);
    }

    commitIdOfBranch(branchName){
        return this.repository.branchList.commitIdOfBranch(branchName);
    }

}

export default Model;
