# 10 useRef로 컴포넌트의 변수 생성하기
## useRef
- 새로운 Reference 객체를 생성하는 기능
    ```jsx
    const refObject = useRef()
    ```
- 생성된 Reference 객체는 컴포넌트 내부의 변수

| useRef | useState |
|:------:|:--------:|
|Reference 객체를 생성 | State를 생성 |
|컴포넌트 내부의 변수로 활용 가능| 컴포넌트 내부의 변수로 활용 가능|
|어떤 경우에도 리렌더링을 유발하지 않음| 값이 변경되면 리렌더링|
- 렌러링에 영향을 미치고 싶지 않은 경우 Ref를 활용함
- 추가적으로 ref를 이용하면 특정 DOM 요소에 접근, 조작하는 것 가능

## 실습
### Register.jsx
1. useRef 또한 React 내장함수이기 때문에 상단에 import해줌
    ```jsx
    import {useRef} from "react";
    ```
    - 동일한 경로에서 불러오는 Import 문은 함께 작성하는 것 가능
    ```jsx
    import { useState, useRef } from "react";
    ```
2. Reference 객체 만들기
    ```jsx
    const refObj = useRef();
    ```
    - useState 객체 아래 작성해주기
    - 생성한 Reference 객체가 어떻게 생겼는지 확인하기 위해 console.log 작성.
        - 점표기법을 사용하여 값을 바로 출력할수도 있음.
        ```jsx
        console.log(refObj.current)
        ```
    - Reference 객체는 current라는 프로퍼티에 현재 보관할 값을 담아두기만 하는 단순한 자바스크립트
    - useRef()에 값을 담아주면 초기 값을 설정할 수도 있음
### Reference는 리렌더링 되지 않음.
- return 문 안에 다음과 같은 버튼 만들기 
    ```html
    <div>
        <button onClick={() => {
            refObj.current++;
            console.log(refObj.current);
        }}>
            ref + 1
        </button>
    </div>
    ```
- 작성한 reference 객체에 콘솔로그를 다음과 같이 수정
    ```jsx  
    const refObj = useRef(0);
    console.log("Reference 렌더링");
    ```
- 그럼 페이지를 새로고침할 때(최초 렌더링)는 "Reference 렌더링"이라는 문구가 나오지만, Reference 버튼을 아무리 눌러도 현재 값만 변화할 뿐 렌더링이 추가로 진행되지는 않음.
- 리렌더링이 진행되지 않아야 하는 요소에 사용해야함.
- 버튼 태그는 다시 삭제
## 사용자가 얼마나 많은 수정사항을 일으켰는지 Count하기
1. 변수명을 countRef로 직관적으로 변경.
2. 이벤트 핸들러 함수에 코드 추가
    ```jsx
    const countRef = useRef(0);

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    ```
    - onChange 함수가 실행될 때마다가 countRef.current를 증가시킴
    - 콘솔로그에 countRef.current 띄우기
## DOM 요소 직접 조작하기
### 회원가입 제출
1. return문 제일 아래에 button을 하나 만들기.
    ```html
    <button onClick={onSubmit}>제출</button>
    ```
2. 상단에 onSubmit 함수 만들기
    ```jsx
    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소에 포커스
        }
    }
    ```
    - 포커스 : 선택된 상태로 만들기
3. 카운트 레퍼런스 아래 새로운 레퍼런스 만들기
    ```jsx
    const countRef = useRef(0);
    const inputRef = useRef();
    ```
4. return문의 input 속성에 ref={inputRef} 작성
    ```html
    <div>
        <input 
            ref={inputRef}
            name="name"
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"} />
    </div>
    ```
    - 이렇게 되면 input 요소가 렌더링하는 DOM 요소가 inputRef에 저장됨.
5. onSubmit 함수 수정
    ```jsx
    const onSubmit = () => {
        if(input.name === "") {
            console.log(inputRef.current);
        }
    }
    ```
    - 콘솔로그를 작성하여 현재 정보 확인하기
    - 그럼 제출 버튼을 눌렀을 때 name을 작성하는 input의 DOM 요소가 콘솔로그에 출력됨.
    ```jsx
    const onSubmit = () => {
        if(input.name === "") {
            // 이름을 입력하는 DOM 요소에 포커스
            inputRef.current.focus();
        }
    }
    ```
    - 내용을 원하는 방식대로 작성하면 이름이 빈 상태로 제출을 누르면 이름을 입력하는 DOM 요소에 포커스되게 코드를 작성할 수 있음.

## 왜 useRef를 사용해야 하는가?
- let을 사용하여 변수를 만들고 사용하는 것과 차이가 있을까?
    ```jsx
    let count = 0;
    ```
- 우리가 ref로 사용했던 값을 위의 변수로 대체해서 사용하면 아무리 많은 수정을 해도 1이라는 값만 출력이 됨.
- count 변수의 값이 1로 고정됨. 
- 이유
    - onChange 함수가 호출되어 작동하며 Register 컴포넌트가 리렌더링 된다
    - 리렌더링 된다는 것은 Register 함수 내에 있는 코드가 처음부터 다시 실행된다는 것.
    - 그렇게 되면 `let count = 0;` 코드도 재 실행되어 count 변수는 다시 0이 되고, 수정이 될 때는 다시 1로 출력되는 것.
- 그러나 특수한 변수인 useRef를 사용하게 되면 컴포넌트 내부에 변수를 사용하더라도 리렌더링 되지 않음.
### 그렇다면 count 변수를 함수 밖에 선언한다면?
- 의도한 대로 초기화되지 않고 카운팅 할 수 있음
- 그러나 치명적 단점이 존재
- 해당 register 컴포넌트를 하나만 사용할 때는 문제가 없지만 두개 이상 사용할 때는 문제가 생김.
    - 예를 들어 App 컴포넌트에 register 컴포넌트가 두 번 작성된 상태라면?
        ```jsx
        // App.jsx
        import './App.css';

        import Register from './components/Register';

        function App() {
            return (
                <>
                <Register />
                <Register />
                </>
            );
        }

        export default App;
        ```
    - 위에 register 컴포넌트에서 수정을 하면 1 
    - 아래 register 컴포넌트에서 추가적으로 수정하면 2
    - 이 처럼 두 컴포넌트가 하나의 변수를 공유하게 되는 문제가 발생함.
- 이렇게 되는 이유
    - App 컴포넌트에서 Register 컴포넌트를 두 번 호출하는 것은 Register.jsx 파일 안에 Register 함수를 두 번 호출한 것뿐이기 때문.
    - Register.jsx 파일을 두 번 호출하는 것이 아님.
- 때문에 굉장히 특별한 경우가 아니라면 React에서는 컴포넌트 외부에 변수를 선언하는 것은 권장하지 않음.

