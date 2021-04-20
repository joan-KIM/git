class Blob{
    constructor(fileId, content){
        this.fileId = fileId;
        this.content = content;
    }

    isSameBlob(blob) {
        return this.fileId === blob.fileId;
    }
    // constructor(file) {
    //     this.fileId = file.id;
    //     this.content = file.content;
    // }

    // static fileToBlob(file) {
    //     return new Blob(file.id, file.content);
    // }
}

export default Blob;
