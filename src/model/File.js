import {UNTRACKED, MODIFIED, STAGED} from "../constants/status.js";
import {guid} from "../utils/uuid.js";
import Blob from "./Blob.js";

class File{
    constructor(name, content) {
        this.name = name;
        this.content = content;
        this.id = guid();
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

    createBlob() {
        return new Blob(this.id, this.content)
    }

    isSameFileName(name){
        return this.name === name;
    }

    isSameFile(blob){
        return this.id === blob.id;
    }
}

export default File;
