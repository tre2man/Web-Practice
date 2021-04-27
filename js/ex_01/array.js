'use strict'

// 1. Declaration
const arr1 = new Array();
const arr2 = [1, 2];

// 2. Index position
const fruits = ['apple', 'banana'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[2]);
console.log(fruits[fruits.length - 1]);

// 3. Looping over an array
// for
for (let fruit of fruits) {
    console.log(fruit);
}

console.clear();
//forEach
fruits.forEach(function (fruit, index) {
    console.log(fruit, index);
});

// anonymous function은 arrow 연산자 사용가능
fruits.forEach((fruit, index) => console.log(fruit, index));

// 4. addition. deletion. copy
// pop push 맨 뒤에있는것
// unshift shift 맨 앞에있는것 빼고 넣기
// 중요! 속도는 pop과 push가 unshift와 shift보다 빠르다.
// splice(start,deleteCount) 중간에 있는것 지우기
// splice(start,deleteCount,...items) 지우고 items 삽입
// concat 붙이기

// 5.search
// indexOf : 데이터가 어디있는지
// includes : 데이터가 존재하는지
// lastindexOf : 데이터가 뒤에서부터 어디있는지
console.clear();
console.log(fruits);
console.log(fruits.indexOf('apple'));
console.log(fruits.includes('apple'));


console.clear()
//과제
// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    // 내 답
    let str = '';
    for (let i in fruits) {
        str += fruits[i];
    }
    console.log(str);
    // 영상 답
    str = fruits.join(',');
    console.log(str)
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    let arr = fruits.split(',');
    console.log(arr)
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    array.reverse();
    console.log(array)
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    // 내 답
    let arr = [];
    for (let i in array) {
        if (i > 1)
            arr.push(array[i]);
    }
    console.log(arr)
    // 영상 답
    arr = array.slice(2, 5);
    console.log(arr)
}

class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const res = students.find(student => student.score === 90);
    console.log(res);
}

// Q6. make an array of enrolled students
{
    const res = students.filter(student => student.enrolled)
    console.log(res)
}

// Q7. make an array containing only the students' scores
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map(scores => scores.score)
    console.log(result)
}

// Q8. check if there is a student with the score lower than 50
{
    const result2 = students.every(student => student.score < 50)
    console.log(result2)
}

// Q9. compute students' average score
{
    const result3 = students.reduce((prev, curr) => prev + curr.score, 0)
    console.log(result3 / students.length)
}

// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students.map(scores => scores.score).join()
    console.log(result)
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students
        .map(student => student.score)
        .sort((a, b) => a - b)
        .join()
}