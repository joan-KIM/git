class View{
    printError(message) {
        console.error(`\x1b[31m${message}\x1b[0m`);
    }


    printStatus() {

    }

    printBranch(branchList) {

    }

    printLog(head, commits) {

    }

    print(message) {
      console.log(message);
    }
}

export default View;
