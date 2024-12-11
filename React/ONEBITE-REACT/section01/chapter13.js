// 콜백 함수
// 자신이 아닌 다른 함수에 인수로써 전달된 함수를 의미함

// 예
// function main(value) {
//     value();
// }

// function sub() {
//     console.log("sub");
// }

// main(sub) //sub


// 1. 콜백함수
function main (value) {
    console.log(1);
    console.log(2);
    value();
    console.log("end")
}

// function sub() {
//     console.log("i am sub");
// }

// main(sub)
// 콜백함수는 메인 함수가 원하는 타이밍에 호출할 수 있다.

// 따로 선언하지 않고 메인 함수 안에 작성해도 됨. (익명함수)
main(function sub() {
    console.log('i am sub');
})

// main(() => {
//     console.log('i am sub');
// }) // 화살표 함수도 가능


// 2. 콜백함수 활용
// function repeat(count) {
//     for (let idx=1; idx <= count; idx++) {
//         console.log(idx);
//     }
// }
// function repeatDubble(count) {
//     for (let idx=1; idx <= count; idx++) {
//         console.log(idx*2);
//     }
// }

// repeat(5)
// repeatDubble(5)
// 이런 경우 중복코드를 발생한 부분을 제거하고 콜백함수로 이용할 수 있음.

function repeat(count, callback) {
    for (let idx=1; idx <= count; idx++) {
        callback(idx)
    }
}

repeat(5, function (idx) {
    console.log(idx);
});