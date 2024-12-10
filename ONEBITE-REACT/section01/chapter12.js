// 함수 표현식과 화살표 함수

// 1. 함수 표현식

function funcA () {
    console.log("funcA");
}

let varA = funcA;
varA();
// 이 처럼 변수 안에 함수를 넣어서 사용할 수 있음.

// let varB = funcB() {
//     console.log("funcB");
// }
// 그럼 이렇게 작성할 수 있을까? x. 변수 안에 한번에 함수를 작성하고자 한다면 함수는 이름을 가질 수 없음 (익명함수)

let varB = function () {
    console.log("funcB");
}
varB();
// 이런 방식을 함수 표현식이라고 말하고, 함수 선언식과 달리 호이스팅의 대상이 되지 않음.


// 2. 화살표 함수
let varC = () => {
    return 1;
}
// function을 지워버리고 소괄호와 중괄호 사이에 화살표를 넣는 것
console.log(varC())

// 만약 varC가 1이라는 숫자를 반환하는 함수라면 중괄호와 return도 빼고 
// let varC = () => 1; 
// 이렇게 쓸 수도 있음
// 바로 값을 반환하는 경우 중괄호를 빼고 작성해도 되고, 여러가지를 반환하거나 추가적으로 적용해야할 사항이 생기면 중괄호에 넣고 리턴문을 추가해서 반환하면 됨.

