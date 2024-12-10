// 반복문(loop, lteration)
// 어떠한 동작을 반복해서 수행할 수 있도록 만들어 주는 문법

// 1. for 
// for (초기식; 조건식; 증감식) {
//     console.log("반복!")
// }
// 초기식 : count하는 변수
// 조건식 : 언제까지 반복할지, 조건식이 참일 때만 반복 진행, 거짓이면 종료
// 증감식 : 매 반복마다 초기식을 증가시키는 용도로 활용

for (let idx = 0; idx < 5; idx++) {
    if (idx % 2 === 0) {
        continue;
    } 
    console.log(idx)
    if (idx >= 5) {
        break;
    }
}