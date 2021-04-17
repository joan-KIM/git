import Repository from "./Repository.js"
import Blob from "./Blob.js";
import {test} from './../utils/test.js';

const repository = new Repository("web");    // constructor() 실행
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

(() => {
  const blob = new Blob("1111", "상관없는거 아닌가?");
  
  test(repository).it('inputStagingArea 함수 테스트', () => {
    repository.inputStagingArea(blob);
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "파일내용",
      id: null,
      status: "untracked"
    }],
    stagingArea: [ { fileId:"1111", content:"상관없는거 아닌가?" } ],
    branches : [ { name: "master", commitId : null } ]
  });
})();

(() => {
  const blob = new Blob("1111", "장기하 산문집 - 상관없는거 아닌가?");
  
  test(repository).it('inputStagingArea 함수 테스트2', () => {
    repository.inputStagingArea(blob);
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "파일내용",
      id: null,
      status: "untracked"
    }],
    stagingArea: [ { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" } ],
    branches : [ { name: "master", commitId : null } ]
  });
})();

(() => {
  const blob = new Blob("2222", "소르본 철학 수업");
  
  test(repository).it('inputStagingArea 함수 테스트3', () => {
    repository.inputStagingArea(blob);
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "파일내용",
      id: null,
      status: "untracked"
    }],
    stagingArea: [ 
      { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" }, 
      { fileId:"2222", content:"소르본 철학 수업" } 
    ],
    branches : [ { name: "master", commitId : null } ]
  });
})();

(() => {
  test(repository).it('staging 함수 테스트1', () => {
    repository.staging();
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "파일내용",
      id: null,
      status: "staged"
    }],
    stagingArea: [ 
      { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" }, 
      { fileId:"2222", content:"소르본 철학 수업" }, 
      { fileId:null, content:"파일내용" }
    ],
    branches : [ { name: "master", commitId : null } ]
  });
})();

(() => {
  test(repository).it('staging 함수 테스트2 - git add <파일이름>', () => {
    repository.updateFile("파일명", "마이크로폰 핸드북");
    repository.staging("파일명");
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "마이크로폰 핸드북",
      id: null,
      status: "staged"
    }],
    stagingArea: [ 
      { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" }, 
      { fileId:"2222", content:"소르본 철학 수업" }, 
      { fileId:null, content:"마이크로폰 핸드북" }
    ],
    branches : [ { name: "master", commitId : null } ]
  });
})();

(() => {
  const repo2 = new Repository("test2");
  test(repo2).it('repository branches 초기화 테스트', () => {
    
  }).toEqual({
    head: "master",
    name: "test2",
    workingDirectory: [],
    stagingArea: [],
    branches : [ { name: "master", commitId : null } ]
  });
})();

(() => {
  test(repository).it("commit 함수 테스트", () => {
    repository.commit("책 내용 입력");
  }).toEqual({
    head: "master",
    name: "web",
    workingDirectory: [{
      name: "파일명",
      content: "마이크로폰 핸드북",
      id: null,
      status: "staged"
    }],
    stagingArea: [ 
      { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" }, 
      { fileId:"2222", content:"소르본 철학 수업" }, 
      { fileId:null, content:"마이크로폰 핸드북" }
    ],
    branches : [ { name: "master", commitId : null } ],
    commits : []
  });
})();

console.log(repository.commits[0].tree);


const file = repository.findFile('')
const result = {name:'', content: '', id: null, status: 'untracked'};

test(repository).it("")
// console.log(file == result)
