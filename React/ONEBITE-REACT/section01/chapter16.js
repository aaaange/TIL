// 객체 2
// 1. 상수 객체 (const)
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

animal.age = 2; // 추가
animal.name = "까망이" // 수정
delete animal.color; // 삭제

console.log(animal)
// 상수인데 왜 프로퍼티 추가, 수정, 삭제가 모두 가능할까?
// 상수는 엄밀히 말하면 새로운 값을 할당하지 못하는 변수
// animal = 123 처럼 아예 새로운 값을 할당하는 것은 불가능하지만, 
// 원래 있던 값의 객체들을 수정하는 것은 가능

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "홍길동",
    sayhi() {
        console.log("안녕!");
    },
}

person.sayhi();
person['sayhi']();