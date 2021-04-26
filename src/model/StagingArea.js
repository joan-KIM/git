import { STAGED } from "../constants/status.js";

class StagingArea extends Array{
    constructor(){
        super();
    }
    
    addBlob(blob){
        this.push(blob);
    }

    deleteBlob(blob){
        const index = this.findIndex(blob.isSameBlob.bind(blob));

        if(index > -1){
            this.splice(index, 1);
        }
    }

    update(blob){
        this.deleteBlob(blob);
        this.addBlob(blob);
    }    

    staging(file){
        const blob = file.createBlob();
        this.update(blob);
        file.updateStatus(STAGED);
    }

}

export default StagingArea;
