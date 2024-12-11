// 연산자(Operator) 1
// 프로그래밍에서의 다양한 연산을 위한 기호, 키워드를 말함

// 덧셈 연산자 +
// 뺄셈 연산자 - 
// 곱셈 연산자 *
// 나눗셈 연산자 /
// 기타 등등...

// 1. 대입 연산자 
let var1 = 1;
// = 이게 대입 연산자

// 2. 산술 연산자
let num1 = 3 + 2;
let num2 = 3 - 2;
let num3 = 3 * 2;
let num4 = 3 / 2;
let num5 = 3 % 2;

let num6 = (1 + 2) * 10;


// 3. 복합 연산자
let num7 = 10;
num7 = num7 + 20;
num7 += 20; // 위와 동일한 코드
num7 -= 20;
num7 *= 20;
num7 /= 20;
num7 %= 20;

// 4. 증감 연산자
let num8 = 10;
num8++; // 후위 연산 ++이 변수 뒤에 있으면 해당 줄이 끝나고 다음줄부터 변수에 증감이 적용됨. 여기서는 아직 10인 것
++num8; // 전위 연산 이러한 경우는 총 12


// 5. 논리 연산자
let or = true || false;
// 둘 중 하나라도 ture면 ture
let and = true && false;
// 둘 다 ture여야 ture
let not = !true;
// ture라면 false로, false라면 ture로 변경


// 6. 비교 연산자
let comp1 = 1 === 2; // 같은 값인가?
// ==을 두번만 작성하면 자료형이 같은지까지 판단하지 않고 값 자체만 비교함.
let comp2 = 1 !== 2; // 같은 값이 아닌가?

let comp3 = 2 > 1;
let comp4 = 2 < 1;

let comp5 = 2 >= 1;
let comp6 = 2 <= 1;


