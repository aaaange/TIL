// 객체(Object) 1
// 객체를 이용하면 현실 세계에 존재하는 어떤 사물이나 개념을 표현하기 용이함

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (대부분 사용)

// 2. 객체 프로퍼티 (객체 속성) 
// key: value 형식
// key의 이름으로 불림.
// key값은 문자와 숫자만 가능하고 value는 모든 형태 가능
// key는 따옴표 없이 작성되는데, 예외로 key이름에 띄어쓰기가 들어가는 경우만 따옴표를 붙여줌.
let person = {
    name: "홍길동",
    age: 20,
    hobby: '축구',
    "like cat": true,
};

// 3. 객체 프로퍼티를 다루는 방법
// 3.1 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
let name = person.name;
// console.log(name) //만약 없는 것을 호출하면 undefined

let age = person["age"]; // key를 쌍따옴표와 함께 문자열로 작성해야함. 그렇지 않으면 변수로 인식하여 오류 발생.
// console.log(age)

let property = "hobby";
let hobby = person[property];
// console.log(hobby);
// 변수에 꺼내오고자 하는 프로퍼티를 담아서 꺼내올 수 있기에 동적으로 프로퍼티를 변화시키며 사용하고자 한다면 괄호표기법이 유용
// 그렇지 않은 경우에는 점 표기법이 간결

// 3.2 새로운 프로퍼티를 추가하는 방법
person.job = "FE developer";
person["favoriteFood"] = "떡볶이";


// 3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person["favoriteFood"] = "초콜렛";


// 3.4 프로퍼티를 삭제하는 방법
delete person.job;
delete person["favoriteFood"];
// console.log(person);

// 3.5 프로퍼티의 존재 유무를 확인하는 방법 (in 연산자)
let result1 = "name" in person;
let result2 = "cat" in person;

console.log(result2)
