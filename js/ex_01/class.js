'use strict'

// class
// es6부터 시작

// 1. class declaration
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const ellie = new Person('ellie', 20);
console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

// 2. getter and setter
// 잘못된 입력변수 수정
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // 0 미만일 경우 0으로 설정
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

// 3. Fields (public,private)ㄴ
class Experiment {
    // 퍼블릭
    publicfield = 2;
    // 프라이빗 (#으로 시작)
    #privateField = 0;
}

// 4. static
// 들어오는 데이터에 상관없이 공통 내용인 경우
class Article {
    static publisher = 'Dream';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher);
Article.printPublisher();

// 5. Inheritance 상속성
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        console.log(`drawing ${this.color} color!`);
    }
    getArea() {
        return this.width * this.height;
    }
}

// 오버라이딩 : 기존 클래스 상속 후 재정의가 가능하다.
class Rectangle extends Shape { }
class Triangle extends Shape {
    draw(){
        super.draw();
        console.log("(Triangle drawing)");
    }
    getArea() {
        return (this.width * this.height) / 2;
    }
}


const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());