// 상식적인 범위 안에서 자바스크립트 실행
'use strict';

console.log('Hello, world!');

// 블록 안의 변수들은 외부에서 접근못함
{
    // 1. let 일반적인 변수 선언
    let name = 'ellie';
    console.log(name);
}

// 2. var는 선언 전에도 사용가능 : var hoisting, 어디에서 선언한지 상관없이 선언을 "끌어올려준다"
// var는 블록을 무시한다. 사용하지 말자

// 3. constants 값을 변경하지 못함
// 보안, 쓰레드 -> 동시 변경 금지, 실수 방지

// 4. valuable types
// primitive : num, str, bool, undefine, symbol
// object : box container
//function : first-class function -> 함수를 변수처럼 쓸 수 있다.

const num1 = 17;
const num2 = 1.7;
console.log(`value: ${num1}, type: ${typeof num1}`);
console.log(`value: ${num2}, type: ${typeof num2}`);

// bigint type : (-+ 2**53) 사용법 : 숫자 뒤 n

// string 사용하기

const char = 'c';
const greet = 'hello' + char;
console.log(`value : ${char}, type : ${typeof char}`);
console.log(`value : ${greet}, type : ${typeof char}`);

// Immutable data type : permitive types, 다른 내용으로 변경 불가능 
// Mutable data type : 오브젝트는 변경이 가능