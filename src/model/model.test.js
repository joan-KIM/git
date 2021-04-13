import Repository from "./Repository.js"
import {test} from './../utils/test.js';

// IIFE > 검색해보세요
(() => {
  const repository = new Repository("web");    // constructor() 실행
  
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

const repository = new Repository('web');

repository.createFile("파일명2", "파일내용2");
repository.createFile("2020 연말정산", "환급 : 10만원");

repository.updateFile("2020 연말정산", "환급액 : 없음");
repository.updateFile("파일명2", "소르본 철학수업");

repository.createFile('', '');
const file = repository.findFile('')
const result = {name:'', content: '', id: null, status: 'untracked'};

test(repository).it("")
// console.log(file == result)


// console.log(repository);

// console.log(repository.createBlob(repository.workingDirectory[0]));
// console.log(repository.findStatus());
