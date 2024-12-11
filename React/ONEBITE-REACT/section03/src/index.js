// common js
// const moduleData = require('./math'); // 모듈 가져오기
// // const {add, sub} = require('./math'); // 객체 구조분해할당으로 다음과 같이도 가능

// console.log(moduleData.add(1, 2));
// console.log(moduleData.sub(1, 2));


// import { add, sub } from "./math.js"; // es 모듈 시스템을 사용할 때는 확장자까지 작성해줘야 함.
// import multiply from "./math.js"; // 기본값은 중괄호 없이 불러와야 함.
// import mul from "./math.js"; // 기본값은 이름을 바꿔서 원하는대로 불러올 수도 있음
// 동일한 경로에서 불러오는 import문은 하나로 합치는 것도 가능
import mul, {add, sub} from "./math.js";

import randomColor from "randomcolor"; 
// 라이브러리를 불러올 때는 주소를 작성하는 것이 아니라 라이브러리 이름을 작성하는 것.

const color = randomColor();
console.log(color)

// console.log(add(1, 2));
// console.log(sub(1, 2));
// console.log(mul(1, 2));