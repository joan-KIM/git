import readline from "readline";
import Parser from './Parser.js';

class Prompt{
    constructor(){
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    question(branch = '', callback){
        this.rl.question(`${branch} > `, (answer) => {
            if(answer === "q") {
                this.exit();
            }
            const result = Parser.parsing(answer);
            callback(result);
        });
    }

    exit(){
        this.rl.close();
        process.exit();
    }
}

export default Prompt;
