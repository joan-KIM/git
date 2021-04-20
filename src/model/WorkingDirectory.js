import { COMMITTED } from "../constants/status.js";

class WorkingDirectory extends Array {
  constructor() {
    super();
  }

  addFile(file){
      this.push(file);
  }

  findFile(fileName){   
    return this.find(file => file.isSameFileName(fileName));
  }

  commit(){
    this
    .filter(file => file.isStaged())
    .forEach(file => file.updateStatus(COMMITTED));
  }

  createFile(name, content){
    const file = new File(name, content);
    this.addFile(file);
  }

  updateFile(name, content){  
    const file = this.findFile(name);
    file.updateContent(content);
  }
}

export default WorkingDirectory;
