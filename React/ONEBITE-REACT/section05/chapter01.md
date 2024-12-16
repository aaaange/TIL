# 01 실습 준비하기
## 사전 준비 
### App.jsx 불필요한 파일, 코드 삭제

1. src/App.jsx에 2,3번째 줄에 있는 다음 코드를 삭제한다.
    ```jsx
    import reactLogo from './assets/react.svg'
    import viteLogo from '/vite.svg'
    ```
    - src/assets/react.svg 파일 삭제
    - public/vite.svg 파일 삭제
2. src/App.jsx에 App 함수 내에 `const [count, setCount] = useState(0)`를 삭제한다.
    - 그럼 상단에 `import { useState } from 'react'`가 회색으로 변함.
        - 아무데서도 이용되지 않는다는 뜻
        - 해당 문장도 삭제
3. App 함수가 리턴하고 있는 div태그와 안에 모든 내용 삭제
    ```jsx
    <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    ```
### 완성된 초기 App.jsx
```jsx
import './App.css'

function App() {

  return (
    <>
      
    </>
  )
}

export default App
```
### css 불필요한 파일 삭제
1. App.css 파일 전체 내용 삭제
2. index.css 파일 전체 내용 삭제
3. src/main.jsx에 `<StrictMode> </StrictMode>`만 삭제 
    - 개발 모드로 리액트를 실행하고 있을 때 우리가 작성한 코드에 혹시나 잠재적인 문제가 있는지 내부적으로 검사하여 경고해주는 도구
    - 실습에서는 필요하지 않고, 입문자들에게는 혼란을 야기할 수 있기에 삭제.
## 실습 도구 추가하기
### 방법
1. vscode 좌측 Extensions 클릭
2. `eslint` 검색
3. 검색 결과 최상단에 Microsoft 뱃지가 달려있는 ESLint 확장프로그램이 나옴
4. 해당 확장 프로그램 설치
    - 우리가 작성하는 코드를 정적으로 검사하여 오류가 발생할만한 코드가 있으면 경고를 띄워주는 프로그램
    - 직접 실행해보기 전에 오류를 vscode에서 확인해볼 수 있음
5. 프로젝트 파일로 돌아오면 `eslint.config.js`라는 파일이 생김 
    - 이는 eslint의 옵션을 설정할 수 있는 파일
    - 'rules'에 불필요한 기능들을 끄는 코드를 작성해줌.
        ```
        "no-unused-vars":"off",
        "react/prop-types":"off",
        ```
        - `"no-unused-vars":"off",` : 코드 상에 실제로 사용하지 않는 변수가 있을 때 오류로 알려주는 옵션. 
        - `"react/prop-types":"off",` : 리액트를 안전하게 사용할 수 있도록 하는 옵션 (실습 중엔 오히려 불편함을 야기함.)