import Repository from './Repository.js';

class Model{
    constructor(){
        this.repository = null;
    }

    createRepository(name) {
        this.repository = new Repository(name);
    }

    createFile([name, ...content]){
        this.repository.createFile(name, content.join(" "));
    }

    updateFile([name, ...content]){
        this.repository.updateFile(name, content.join(" "));
    }

    commit(message){
        this.repository.commit(message.join(" "));
    }
}

export default Model;
