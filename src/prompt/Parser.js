import {COMMAND, ACTION} from './../constants/command.js';

class Parser{
    static toAction(command, isPrint) {
        if (isPrint) {
            switch(command) {
                case COMMAND.STATUS: return ACTION.PRINT_STATUS;
                case COMMAND.LOG: return ACTION.PRINT_LOG;
                case COMMAND.BRANCH: return ACTION.PRINT_BRANCH;
                default: 
                    return Object.values(COMMAND).includes(command)
                        ? ACTION.WRONG_PARAMETER
                        : ACTION.WRONG_COMMAND;
            }
        }
        
        switch(command) {
            case COMMAND.NEW: return ACTION.NEW_FILE;
            case COMMAND.TOUCH: return ACTION.TOUCH_FILE;
            case COMMAND.INIT: return ACTION.GIT_INIT;
            case COMMAND.ADD: return ACTION.GIT_ADD;
            case COMMAND.BRANCH: return ACTION.GIT_BRANCH;
            case COMMAND.COMMIT: return ACTION.GIT_COMMIT;
            case COMMAND.CHECKOUT: return ACTION.GIT_CHECKOUT;h
            default: return ACTION.WRONG_COMMAND;
        }
    }

    // 파일이름 -> 파일객체
    // 파일이름 파일이름 파일이름 -> [파일객체 파일객체 파일객체]
    // .
    static fileParser(filenames, workingDirectory = []) {
        if (filenames[0] === '.') {
            return workingDirectory.filter(file => file.isModified());
        }
        return filenames.map(name => workingDirectory.findFile(name))
    }

    static parsing(answer){
        const [command, ...args] = answer.split(" ");
        
        if(command === 'git'){
            return Parser.gitParsing(args);
        }
                
        return {
            action: Parser.toAction(command),
            args
        };
    }

    static gitParsing([command, ...args]){
        return {
            action: Parser.toAction(command, !args.length),
            args
        };
    }
}

export default Parser;
