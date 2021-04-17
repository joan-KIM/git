import {UNTRACKED, MODIFIED, STAGED} from "../constants/status.js";

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

    isModified() {
        if (this.status === UNTRACKED || this.status === MODIFIED) {
            return true;
        }
        return false;
    }    

    isStaged(){
        if (this.status === STAGED){
            return true;
        }
        return false;
    }
}

export default File;
