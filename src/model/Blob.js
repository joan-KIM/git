class Blob{
    constructor(fileId, content){
        this.fileId = fileId;
        this.content = content;
    }

    createBlob(file){
        this.fileId = file.id;
        this.content = file.content;
    }
}

export default Blob;