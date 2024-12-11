// 배열(array)
// 여러 개의 값을 순차적으로 담을 수 있는 자료형

// 1. 배열 생성
let arrA = new Array(); // 배열 생성자
let arrB = []; // 배열 리터럴 (대부분 사용)

let arrC = [
    1, 
    2, 
    3,
    true,
    "hello",
    null,
    undefined,
    () => {},
    {},
    [],
];
console.log(arrC);
// 배열 안에 들어갈 것들은 모든 형태 가능하고, 길이의 제한도 없음

// 2. 배열 요소 접근
let item1 = arrC[0]; // 인덱스는 0부터 시작 
let item2 = arrC[1];

arrC[0] = 'hello';
console.log(arrC[0])

