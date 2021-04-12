import File from "./File.js";
import Blob from "./Blob.js";

// 객체 모양틀
class Repository {
    // 객체 안의 함수는 function 안써줘도 됨 = 메소드
    constructor(name){  // return this; -> this? Repository가 만드는 객체
        this.head = null;
        this.name = name;
        this.workingDirectory = [];    // 배열 : 순서대로 가져올 수 있다, 객체 : key값으로 가져올 수 있다
        this.stagingArea = [];
    }

    createFile(name, content){
        const file = new File(name, content);
        this.workingDirectory.push(file);
    }

    updateFile(name, content){  // touch
        const file = this.findFile(name);
        file.updateContent(content);
    }

    findFile(fileName){
        const length = this.workingDirectory.length;

        for(let i = 0; i < length; i++){
            if(this.workingDirectory[i].name == fileName){
                return this.workingDirectory[i];
            }
        }
    }

    createBlob(file){
        const fileId = file.id;
        const content = file.content;

        const blob = new Blob(fileId, content);
    }
   

}

export default Repository;
