import {isEqual} from './equal.js';

export function test (obj) {
  return {
    it: (describe, callback) => ({
      toEqual: answer => {
        callback();
        if(isEqual(obj, answer)) {
        } else {
          console.log(describe, '실패')
          console.log('결과', obj);
        }
      }
    })
  }
}
