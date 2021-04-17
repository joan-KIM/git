class Commit{
    constructor(message){
        this.message = message;
        this.date = null;
        this.id = null;
        this.preCommitId = null;
        this.tree = [];
    }
}

export default Commit;
