// math 모듈

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

// // 모듈 내보내기 (Common JS)
// module.exports = { 
//     add,
//     sub,
// }

export { add, sub };


// 아예 함수 앞에 export를 작성해도 동일함
// export function sub(a, b) {
//     return a - b;
// }


export default function multiply (a, b) {
    return a * b
}
// 기본 값으로 내보낼 수 있음.