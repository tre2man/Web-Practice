'use strict'

//object
const obj1 = {};
const obj2 = new Object();

function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const ellie = { name: 'ellie', age: 4 };
print(ellie);

ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. computed properties
console.log(ellie.name);
console.log(ellie['name']);
ellie['hasJob'] = true;
console.log(ellie['hasJob']);

function printValue(obj, key) {
    //console.log(obj.key) 는 실행이 안된다.
    console.log(obj[key]);
}
printValue(ellie, 'name');
printValue(ellie, 'age');

// 3. property value shorthand
const person1 = { name: 'bob', age: 2 };
const person2 = { name: 'steve', age: 3 };
const person3 = { name: 'dave', age: 4 };
const person4 = new Person('ellie', 30);
console.log(person4);

// 4. constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// 5. in operator
// in 명령어를 이용해 해당하는 키가 있는지 확인이 가능하다.
console.log('name' in ellie);
console.log('age' in ellie);
console.log('random' in ellie);
console.log(ellie.random);

// 6. for..in , for..of
// for (key in obj)
console.clear();
for (let key in ellie) {
    console.log(key);
}

//for (value of iterable)
const array = [1, 2, 4, 5];
for (let value of array) {
    console.log(value);
}

// 7. Fun cloning
const user = { name: 'ellie', age: '20' };
const user2 = user;
user2.name = 'coder';
// user의 값이 바뀐다.
console.log(user);

// 옛날 방법
const user3 = {};
for (let key in user) {
    user3[key] = user[key];
}
console.clear();
console.log(user3);

// Object 내 함수를 이용하는 방법
const user4 = {};
Object.assign(user4, user);
// const user4 = Object.assign({}, user);
console.log(user4); 