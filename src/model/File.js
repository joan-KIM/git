import {UNTRACKED, MODIFIED} from "../constants/status.js";

class File{
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.id = null;
        this.status = UNTRACKED;
    }

    updateContent(content){
        this.content = content;
        if(this.status !== UNTRACKED){
            this.updateStatus(MODIFIED);
        }
    }

    updateStatus(status){
        this.status = status;
    }

    
}

export default File;
