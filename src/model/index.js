import Repository from "./Repository.js"

const repository = new Repository("web");    // constructor() 실행
repository.createFile("파일명", "파일내용");
repository.createFile("파일명2", "파일내용2");

console.log(repository);
