import Repository from "./Repository.js"
import { test } from './../utils/test.js';

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
repo.createFile("git", "naver");
console.log(repo);
