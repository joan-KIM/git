import Repository from "./Repository.js"

const repository = new Repository("web");    // constructor() 실행
repository.createFile("파일명", "파일내용");
repository.createFile("파일명2", "파일내용2");
repository.createFile("2020 연말정산", "환급 : 10만원");

repository.updateFile("2020 연말정산", "환급액 : 없음");
repository.updateFile("파일명2", "소르본 철학수업");

console.log(repository.workingDirectory);