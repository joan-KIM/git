class View{
    printStatus(workingDirectory) {
        workingDirectory.forEach(file => {
            if(file.isModified()){
                // const message = "".concat("   ", file.status, "   ", file.name);
                // const message = ["   ", file.status, "   ", file.name].join('');
                // const message = "   " + file.status + "   " + file.name;
                // const message = `    ${file.status}   ${file.name}`;    // 리터럴 템플릿 ES6
                const message = `\t${file.status}:\t${file.name}`;   
                this.printError(message);
            }
            
            if(file.isStaged()){
                const message = `\t${file.status}:\t\t${file.name}`;
                this.print(message);
            }
        })
    }

    printBranch(branchList) {
        // 1. branchList를 한바퀴 돌아야돼
        // 2. 돌려면 배열로 만드는게 좋지 -> 객체를 배열로 만들려면 어떻게 해야하지?
        // 3. 돌리는데 돌려서 또다른 배열을 만들어야하는가? x
        // 4. 돌리면서 출력만 하면 돼 -> forEach
        // 5. 뭘 출ㄹ력하지?
        // 6. const message = ""
        // 7. 출력하는 메소드 만들어서하면 좋지 -> 이미 만들었어
        // 7. console.log
        const arrayBranchList = Object.keys(branchList);

        arrayBranchList.forEach(this.print);
    }

    // commits = [ {commit}, {commit}, {commit}]
    // head로 브랜치 찾는다
    // 찾은 브랜치가 갖고 있는 commit id로 commits에서 동일한 id를 갖고있는 객체를 찾는다
    // commit id, date, commit message 출력한다
    // precommit id로 이전 commit 객체를 찾는다
    // 반복한다
    printLog(head, commits) {
        let commit = commits.getCommitById(head);
    
        while(commit !== undefined){
            this.printCommit(commit);
            commit = commits.getCommitById(commit.preCommitId);
        }
    }

    // printLog(head, commits) {
    //     if (head == undefined) {
    //         return;
    //     }

    //     const commit = commits.getCommitById(head);
    //     this.printCommit(commit);

    //     const nextHead = commits.getCommitById(commit.preCommitId);
    //     this.printLog(nextHead, commits);
    // }

    printCommit(commit) {
        console.log("commit : ", commit.id);
        console.log("Date : ", commit.date);
        console.log("     ", commit.message);
        console.log('\n');
    }

    print(message) {
        console.log(`\x1b[32m${message}\x1b[0m`);
    }

    printError(message) {
        console.error(`\x1b[31m${message}\x1b[0m`);
    }
}

export default View;
