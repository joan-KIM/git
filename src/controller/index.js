import {ACTION} from './../constants/command.js';
import Parser from './../prompt/Parser.js';

class Controller{
    constructor(model, prompt, view){
        this.model = model;
        this.prompt = prompt;
        this.view = view;
    }

    processor ({action, args}) {
        if(action === ACTION.WRONG_PARAMETER){
          this.view.printError('파라미터를 입력하세요.');
        }
        else if(action === ACTION.WRONG_COMMAND) {
          this.view.printError('잘못된 명령입니다.');
        }
        else if (action !== ACTION.GIT_INIT && !this.model.repository) {
            this.view.printError('레파지토리를 만들어야합니다.');
        } else {
            
            switch(action) {
                case ACTION.GIT_INIT:
                    this.model.createRepository(...args);
                    break;
                case ACTION.GIT_ADD:
                    this.model.repository.staging(Parser.fileParser(args, this.model.repository.workingDirectory));
                    break;
                case ACTION.GIT_COMMIT:
                    this.model.repository.commit(args.join(" "));
                    break;
                case ACTION.GIT_BRANCH:
                    this.model.repository.createBranch(args);
                    break;
                case ACTION.GIT_CHECKOUT:
                    this.model.repository.checkoutBranch(args);
                    break;
                case ACTION.NEW_FILE:
                    this.model.createFile(args[0], args.slice(1).join(" "));
                    break;
                case ACTION.TOUCH_FILE:
                    this.model.updateFile(args[0], args.slice(1).join(" "));
                    break;
                case ACTION.PRINT_LOG:
                    const commitId = this.model.commitIdOfBranch(this.model.repository.head);
                    this.view.printLog(commitId, this.model.repository.commits);
                    break;
                case ACTION.PRINT_STATUS:
                    this.view.printStatus(this.model.repository.workingDirectory);
                    break;
                case ACTION.PRINT_BRANCH:      
                    this.view.printBranch(this.model.repository.branchList);
                    break;
                
            }
        }
            
        this.prompt.question(this.model.repository?.head, this.processor.bind(this));
    }

    init() {
        // if(this.model.repository) {
        //     this.prompt.question(this.model.repository.head);
        // } else {
        //     this.prompt.question('');
        // }
        // this.prompt.question(this.model.repository && this.model.repository.head);
        this.prompt.question(this.model.repository?.head, this.processor.bind(this));
    }

}

export default Controller;
