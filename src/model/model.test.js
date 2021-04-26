import Repository from "./Repository.js";
import File from "./File.js";


/*
const repository = new Repository("web");  
test().it('add file', () => {
  const file1 = new File('hhh', 'ggg');
  repository.staging([file1])
});

// IIFE > 검색해보세요
(() => {
  test(repository).it('createFile test 1', () => {
    repository.createFile("파일명", "파일내용");
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "파일내용",
      id: null,
      status: "untracked"
    }],
    stagingArea: [],
    branches : [ { name: "master", commitId : null } ]
  });
})();
*/

const repo = new Repository("git");
repo.createFile("file1", "content1");
repo.createFile("file2", "content2");
repo.createFile("file3", "content3");
repo.createFile("file3", "파일명 같을 때?");
repo.updateFile("file3", "파일 업데이트");    // 먼저 발견된 파일만 수정됨...

const f1 = new File("파일1", "술탄디스코");
const f2 = new File("파일2", "빈츠카페모카");
const f3 = new File("파일3", "윈터워머");

repo.staging([f1,f2,f3]);

console.log(repo);
