export function isEqual(obj1, obj2){
    // 배열
    if (Array.isArray(obj1) && Array.isArray(obj2)) {
        if(obj1.length !== obj2.length){
            return false;
        }
        // some = 하나라도 다르면 다른것이다
        // every = 모두 같으면 같은것이다
        return obj1.every((element, index) => isEqual(element, obj2[index]));
    }

    // 객체
    if(typeof obj1 == 'object' && typeof obj2 == 'object'){
        if(obj1 == null && obj2 == null){
            return true;
        }

        const keys = Object.keys(obj1);

        if(keys.length !== Object.keys(obj2).length){
            return false;
        }
        // obj1[key]랑 obj1[key]가 결국 다시 객체/배열/숫자/불린/문자 중 하나이니까 그 둘 비교를 == 으로 하는게 문제인 상황
        return keys.every(key => isEqual(obj1[key], obj2[key]));   
    }

    // 숫자, 문자, 불린, undefined
    return obj1 === obj2;
}


// console.log(isEqual(1, 1) == true);
// console.log(isEqual(2, 1) == false);
// console.log(isEqual('1', 1) == false);
// console.log(isEqual(0, false) == false);
// console.log(isEqual(true, 'true') == false);
// console.log(isEqual([1,2,3], [1,2]) == false);
// console.log(isEqual(null, null) == true);
// console.log(isEqual([1,2,3], [1,2,3]) == true);
// console.log(isEqual([1,2,3], [1,2,5]) == false);

// const a = {name: 'hi', age: 24};
// const b = {name: 'hi', age: 24, gender: 'male'};
// console.log(isEqual(a, b) == false);

// console.log(isEqual([1, 2, 3, [2, 3, 4]], [1, 2, 3, [2, 3, 4]]) == true)
// console.log(isEqual([1, 2, 3, [2, 3, 4]], [1, 2, 3, [2, 3]]) == false)

//-----------
// class Array {
//   constructor() {

//   }

//   static isArray() {

//   }



//   map () {

//   }

//   forEach() {

//   }


// }
// // 소문자 a = 객체, 인스턴스
// // Array = 클래스
// const a = new Array();
// // 메소드 클래스가 가지고 있고, 객체가 사용할 수 있고
// // 그렇다면 클래스가 사용할 수 있는 메소드는? 정적 메소드 = '객체 없이도' 사용할 수 있는 메소드
// // 조건 : 메소드 내에 this 사용 금지
// a.map()

// a.isArray()

// Array.isArray()