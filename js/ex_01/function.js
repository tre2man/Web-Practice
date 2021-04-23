// function
// 자바스크립드에서 function은 오브젝트(변수)로 취급됨.

'use strict'

// 포인터로 넘길 필요 없음 원본값 수정
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie' };
changeName(ellie);
console.log(ellie);

// default parameters : 파라미터 값이 없을 경우

function printName(obj, input = 'unknown') {
    obj.name = 'coder';
    console.log(obj.name);
    console.log(input);
}
const ellie2 = { name: 'ellie' };
printName(ellie2);

// rest parameters 배열 입력
function printAll(...args) {
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
    // 위의 내용이랑 같은 기능
    for (const arg of args) {
        console.log(arg);
    }
}
printAll('one', 'two', 'three');

// Local scope 블록 안에서는 밖을 볼수 있지만, 밖엣는 안을   볼 수 없다.

// Early return, Early exit
// 원하는 결과가 나오지 않을 겨웅 return을 바로 해서 연산량을 줄인다.

// Function expression
// Function declaration can be hoisting
const printHello = function () {
    console.log('Hello');
}
printHello();

// callback function
// 함수의 매개변수로 함수를 넣을 수 있음

