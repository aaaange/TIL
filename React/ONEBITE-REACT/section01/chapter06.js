// 형 변환(Type Casting)
// 어떤 값의 타입을 다른 타입으로 변경하는 것

// 1. 묵시적 형 변환 (암묵적 형변환)
//   - 개발자가 직접 설정하지 않아도 알아서 자바스크립트 엔진이 형 변환을 하는 것
// 2. 명시적 형 변환 
//   - 개발자가 직접 함수 등을 이용해 형 변환을 일으킴



// 1. 묵시적 형 변환
// -> 자바스크립트 엔진이 알아서 형 변환하는 것

let num = 10;
let str = "20";

const result = num + str;
// console.log(result)
// num을 문자형으로 묵시적 형 변환한 것.

// 2. 명시적 형 변환
let str1 = "10";
let strToNum1 = Number(str1);
// console.log(10 + strToNum1); // 20

let str2 = "10개";
let strToNum2 = parseInt(str2);
console.log(10 + strToNum2); // 이와 같은 경우 parseInt를 사용하면 해결할 수 있음
// parseInt를 쓰더라도 문자가 앞에 있는 경우는 변환이 잘 안될 수 있기에 유의하기


// 숫자 -> 문자형
let num1 = 20;
let numToStr1 = String(num1);

console.log(numToStr1 + "입니다.")
