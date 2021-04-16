import Repository from "./Repository.js"
import Blob from "./Blob.js";
import {test} from './../utils/test.js';

const repository = new Repository("web");    // constructor() 실행
// IIFE > 검색해보세요
(() => {
  
  test(repository).it('createFile test 1', () => {
    repository.createFile("파일명", "파일내용");
  }).toEqual({
    head: null,
    name: 'web',
    workingDirectory: [{
      name: '파일명',
      content: '파일내용',
      id: null,
      status: 'untracked'
    }],
    stagingArea: []
  });
})();


(() => {
  const blob = new Blob("1111", "상관없는거 아닌가?");
  
  test(repository).it('inputStagingArea 함수 테스트', () => {
    repository.inputStagingArea(blob);
  }).toEqual({
    head: null,
    name: 'web',
    workingDirectory: [{
      name: '파일명',
      content: '파일내용',
      id: null,
      status: 'untracked'
    }],
    stagingArea: [ { fileId:"1111", content:"상관없는거 아닌가?" } ]
  });
})();

(() => {
  const blob = new Blob("1111", "장기하 산문집 - 상관없는거 아닌가?");
  
  test(repository).it('inputStagingArea 함수 테스트2', () => {
    repository.inputStagingArea(blob);
  }).toEqual({
    head: null,
    name: 'web',
    workingDirectory: [{
      name: '파일명',
      content: '파일내용',
      id: null,
      status: 'untracked'
    }],
    stagingArea: [ { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" } ]
  });
})();

(() => {
  const blob = new Blob("2222", "소르본 철학 수업");
  
  test(repository).it('inputStagingArea 함수 테스트2', () => {
    repository.inputStagingArea(blob);
  }).toEqual({
    head: null,
    name: 'web',
    workingDirectory: [{
      name: '파일명',
      content: '파일내용',
      id: null,
      status: 'untracked'
    }],
    stagingArea: [ 
      { fileId:"1111", content:"장기하 산문집 - 상관없는거 아닌가?" }, 
      { fileId:"2222", content:"소르본 철학 수업" } 
    ]
  });
})();





repository.createFile("파일명2", "파일내용2");
repository.createFile("2020 연말정산", "환급 : 10만원");

repository.updateFile("2020 연말정산", "환급액 : 없음");
repository.updateFile("파일명2", "소르본 철학수업");

repository.createFile('', '');
const file = repository.findFile('')
const result = {name:'', content: '', id: null, status: 'untracked'};

test(repository).it("")
// console.log(file == result)
