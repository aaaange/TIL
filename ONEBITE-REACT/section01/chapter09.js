// 조건문(Conditional Statement)이란?
// - 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// - 대표적으로 if, switch 조건문이 존재함

// 1. if 조건문 (if문)
let num = 9;

if(num >= 10) {
    // console.log("num은 10이상입니다.");
    // console.log("조건이 참 입니다.");
} else if (num >=3) {
    // console.log('3이상입니다.')
} else {
    // console.log("조건이 거짓입니다!");
}
// if로 시작해서 if, else로 끝내야 함


// 2. Switch 문
// -> if문과 기능 자체는 동일
// -> 다수의 조건을 처리할 때 if보다 직관적
let animal = 'cat';

switch (animal) {
    case 'cat': {
        console.log("고양이");
        break;
    }
    case "baer": {
        console.log("곰");
        break;
    }
    case "dog" : {
        console.log("뱀")
        break;
    }
    case "tiger": {
        console.log("호랑이")
        break;
    }
    default: {
        console.log("그런 동물은 모릅니다.")
    }
}
// switch는 모든 케이스에 breack가 들어가는 것이 일반적