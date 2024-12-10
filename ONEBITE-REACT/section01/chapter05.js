// 자료형
// 원시타입 
// - 기본형 타입

// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// console.log(num1 + num2)
// console.log(num1 - num2)
// console.log(num1 * num2)
// console.log(num1 / num2)
// console.log(num1 % num2)

let inf = Infinity;
let mInf = -Infinity;
let nan = NaN;

// console.log(1 * "hello")


// 2. String Type
let myName = "홍길동";
let myLocation = "서울";
let introduce = myName + myLocation;
// console.log(introduce)
let introduceText = `${myName}은 ${myLocation}에 거주합니다.`
// console.log(introduceText)
// 백팁을 사용하는 문법을 템플릿 리터럴 문법이라고 부름


// 3. Boolean Type
let isSwitchOn = ture;
let isEmpty = false;


// 4. Null Type : 아무것도 없다
let empty = null;


// 5. undefined Type
let none;
console.log(none);
// 선언된 것이 아무런 값이 없을 경우 자동으로 할당되는 값
// 개발자 의도적