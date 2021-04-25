import { guid } from "./uuid";

class Commit{
    constructor(message, preCommitId, tree){
        this.id = guid();
        this.date = new Date();
        this.message = message;
        this.preCommitId = preCommitId;
        this.tree = tree;
    }

    getCommitId(){
        return this.id;
    }
}

export default Commit;
