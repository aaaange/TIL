# 11 React Hooks
## React Hooks
- 클래스 컴포넌트의 기능을 함수 컴포넌트에서도 이용할 수 있도록 도와주는 매서드
### 2017년 이전의 React.js

|Class 컴포넌트|Function 컴포넌트|
|:---:|:---:|
|모든 기능을 이용할 수 있음 (ex. State, Ref, etc...)|UI 렌더링만 할 수 있음|
|문법이 복잡함.||
- 사람들은 기능적인 이유로 class 컴포넌트를 대부분 사용하였으나, 문법이 복잡하여 Function 컴포넌트에서도 리액트의 모든 기능을 이용할 수 있기를 바랐음.
- 리액트 개발진과 오픈소스 개발자들이 Class 컴포넌트의 기능을 낚아채 Function 컴포넌트에서 사용할 수 있도록 하는 기능을 개발해냄.
### 지난 공부로 학습한 내용

|개념|내용|
|:----:|:-----:|
|useState|State 기능을 낚아채오는 Hook|
|useRef|Reference 기능을 낚아채오는 Hook|
### React Hooks 특징
- 이름 앞에 동일한 접두사 **use**가 붙음
- React Hooks의 각각의 매서드들을 단수형으로 Hook이라고 부름
- 함수 컴포넌트 내부에서만 호출할 수 있음
- 조건문, 반복문 내부에서는 호출 불가
- use 접두사를 활용하여 사용자 지정 Hook 제작 가능 (Custom Hook)

## 실습
### 사전 준비
- components 폴더에 "HookExam.jsx" 파일 생성
    - 해당 파일 내부에 HookExam 컴포넌트 생성
        ```jsx
        const HookExam = () => {
            return <div>hookexam</div>
        }

        export default HookExam;
        ```
- App.jsx 내부에 선언
    ```jsx
    import './App.css';
    import HookExam from './components/HookExam';

    function App() {
    
    return (
        <>
        <HookExam />
        </>
    );
    }

    export default App;
    ```
### hook 관련 3가지 tip
1. hook은 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
    ```jsx
    // HookExam.jsx

    import { useState } from "react";

    const state = useState();

    const HookExam = () => {
        return <div>hookexam</div>
    }
    ```
    - 이처럼 함수 컴포넌트 외부에서 호출할 경우 console에 오류가 뜸.
2. react hook은 조건부로 호출될 수 없다.
    - 조건부로 호출된다는 것은 조건문, 반복문 내부에서 호출된다는 것
    - 컴포넌트 안에 조건문, 반복문 내부에 hook이 존재하는 경우 해당 컴포넌트를 렌더링 할 때 조건문, 반복문 내부의 hook의 호출 순서가 엉망이 되어버리는 문제가 발생.
3. 나만의 훅(Custom Hook)을 직접 만들 수 있다.
    ```jsx
    const HookExam = () => {
        const [input, setInput] = useSate("");

        const onChange = (e) => {
            setInput(e.target.value);
        }
        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        )
    }
    ```
    - 이러한 방식으로 작성되던 코드를 커스텀 훅을 사용하게 되면 다음과 같다.
    ```jsx
    function useInput() {
        const [input, setInput] = useState("");

        const onChange = (e) => {
            setInput(e.target.value);
        }
        return [input, onChange];
    }

    const HookExam = () => {

        const [input, onChange] = useInput();

        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        )
    }
    ```
    - 원하는 함수를 만들고 앞에 use 접두사만 붙여주면 됨
    - 당연히 여러번 호출하여 사용하는 것도 가능함.
    #### Custom Hook
    - 일반적으로 커스텀 훅은 위와 같이 컴포넌트와 동일한 파일에 작성하지 않고, src 폴더 안에 hooks라는 폴더 안에 훅의 이름으로 보관한다.
    ```jsx
    // hooks/useInput.jsx

    import { useState } from "react";

    function useInput() {
        const [input, setInput] = useState("");

        const onChange = (e) => {
            setInput(e.target.value);
        }
        return [input, onChange];
    }

    export default useInput;
    ```
    ```jsx
    // HookExam.jsx
    import useInput from "../hooks/useInput";

    const HookExam = () => {

        const [input, onChange] = useInput();

        return (
            <div>
                <input value={input} onChange={onChange} />
            </div>
        )
    }

    export default HookExam;
    ```
    - `from "../hooks/useInput";` Import 경로를 보면 ..을 통해 상위 폴더로 올라갔다가 작성되는 것을 볼 수 있음.
    