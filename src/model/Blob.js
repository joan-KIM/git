class Blob{
    constructor(fileId, content){
        this.fileId = fileId;
        this.content = content;
    }

    isSameBlob(blob) {
        return this.fileId === blob.fileId;
    }

}

export default Blob;
