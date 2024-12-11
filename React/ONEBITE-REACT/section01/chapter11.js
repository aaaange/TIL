// 함수 

// 함수 선언
// function greeting() {
//     console.log("안녕하세요!")
// }

// console.log("호출전")
// greeting(); // 함수 호출 시 소괄호를 꼭 작성해줘야 함.
// console.log("호출후")



let area1 = getArea(10, 20);
// 함수에 전달 된 것을 인수라고 부름
console.log(area1)
let area2 = getArea(300,200)
console.log(area2)

// 호이스팅
//  -> 끌어올리다
// 다른 언어와 달리 함수를 아래에 작성해도 잘 작동함. (유연하게 프로그래밍할 수 있음)
function getArea (width, height) {
    function another() {
        console.log("another");
    } // 함수 내부에 또 다른 함수를 만들 수 있음 -- 중첩 함수
    another()
    let area = width * height;

    // console.log(area);
    return area; // 반환 값, 리턴 뒤에 작성하는 코드는 실행되지 않음.
}
// width, height를 매개변수 라고 부름