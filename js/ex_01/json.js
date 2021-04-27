'use strict'

//1. stringfy
let json = JSON.stringify(true)
console.log(json)

json = JSON.stringify(['apple', 'banana'])
console.log(json)

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!`)
    }
}

//함수는 데이터가 아니기 때문에 변환하지 않음
//자체 심볼(js에만 있는 특별한 데이터) 변환되지 않음
json = JSON.stringify(rabbit)
console.log(json)

json = JSON.stringify(rabbit, ['name', 'color', 'size'])
console.log(json)

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`)
    return key === 'name' ? 'ellie' : value
})
console.log(json)

//2. toObject
console.clear()
json = JSON.stringify(rabbit)
const obj = JSON.parse(json, (key, value) => {
    console.log(`${key} ${value}`)
    return key === 'birthDate' ? new Date(value) : value
})
console.log(obj)
rabbit.jump()
//obj.jump() -> 오류남. 파싱시 함수는 제외되고 합칠때 함수가 없다

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());