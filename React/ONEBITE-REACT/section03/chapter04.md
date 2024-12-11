# 모듈 시스템(Module System)
모듈을 다루는 시스템
## 모듈이란?
- 웹 페이지에는 회원관리 기능, 장바구니 기능, 결제 기능 등 다양한 기능들이 존재하는데 이를 하나의 js 파일에 담게 되면 파일이 상당히 무겁고 복잡해 짐.
    - 코드 유지보수가 어려워 짐
- 때문에 기능별로 파일을 나눠 관리하는 것이 효율적.
- 이 나눠진 파일들을 모듈이라고 함.
## 모듈 시스템
- 모듈을 생성하고 불러오고 사용하는 등의 모듈을 다루는 다양한 기능을 제공하는 시스템
### JavaScript의 모듈 시스템 (우리가 공부할 것 ✅)
- Common JS (CJS) ✅
- ES Module (ESM) ✅
- AMD
- UMD
- ...

### Commeon JS
- 내보낼 파일에 내보내는 명령어 작성
    ```
    // 모듈 내보내기
    module.exports = { 
        add,
        sub,
    }
    ```
- 불러올 파일애 불러오는 명령어 작성
    ```
    const moduleData = require('./math'); // 모듈 가져오기
    const {add, sub} = require('./math'); // 객체 구조분해할당으로 다음과 같이도 가능
    ```

### ES Module
- pacage.json에 맨 아래 ``` "type": "module"``` 작성하면 es 모듈 시스템을 사용하겠다고 선언하는 것.
- 이 경우 common js 모델을 함께 사용할 수 없음
