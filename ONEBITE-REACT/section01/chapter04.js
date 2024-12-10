// 1. 변수 -- 선언 후 수정 가능

let age = 25;
console.log(age);

age = 30;

// 2. 상수 -- 선언 후 수정 불가능
const birth = "1997.01.07";

// 3. 변수 명명규칙(네이밍 규칙)
// 3-1. $, _ 제외한 기호는 사용할 . 수없다.
let $_name;

// 3-2. 숫자로 시작할 수 없다.
let name1;
let $2name;

// 3-3. 예약어를 사용할 수 없다.

// 4. 변수 명명 가이드
let salesCount = 1;
let refundCount = 1;
let totalCount = salesCount - refundCount;
// 이처럼 누가봐도 알아볼 수 있도록 변수명을 지정하기