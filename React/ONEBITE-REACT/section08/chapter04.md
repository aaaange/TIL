# 04 Create - 투두 추가하기
- todos를 State에 보관하기로 했었고, todos를 입력하고 추가 버튼을 누르면 setTodos가 실행되어 todos를 업데이트해야함.
## setTodos 실행하여 todos 업데이트하기
```jsx
const onCreate = (content) => {
    const newTodo = {
        id : 0,
        isDone: false,
        content: content,
        date: new Date().getTime(),
    }
}
```
- 입력 받을 값을 객체 형태로 설정하였고, 이제 이 값을 todos에 넣어줘야 하는데 `todos.push(newTodo)`로 작성하면 안됨.
- state의 값을 업데이트 할 때에는 상태 변화 함수를 사용해야만 업데이트할 수 있음
    - 그렇게 해야만 변경된 state의 값을 react가 감지할 수 있고, 그러므로써 컴포넌트를 정상적으로 리렌더링 시켜주기 때문.
```jsx
const onCreate = (content) => {
    const newTodo = {
        id : 0,
        isDone: false,
        content: content,
        date: new Date().getTime(),
    }

    setTodos([newTodo, ...todos]);
}
```
- 만든 onCreate 함수에서 매개변수인 content는 Editor 컴포넌트의 input 값으로 받을 수 있음
- App 컴포넌트에서 Editor 컴포넌트에게 onCreate 함수를 프롭스로 전달
    ```jsx
    function App() {
    const [todos, setTodos] = useState(mockData);

    const onCreate = (content) => {
        const newTodo = {
            id : 0,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        }

        setTodos([newTodo, ...todos]);
    }

    return (
        <div className='App'>
            <Header />
            <Editor onCreate={onCreate}/>
            <List />
        </div>
    )
    }
    ```
- Editor 컴포넌트에서는 구조분해할당으로 onCreate를 받기
    ```jsx
    const Editor = ({onCreate}) => {
        return (
            <div className="Editor">
                <input placeholder="새로운 Todo..." />
                <button>추가</button>
            </div>
        )
    };
    ```
- 이제 Editor 컴포넌트에 button이 클릭될 때 onCreate 함수가 호출되어야 하기에 이벤트 핸들러를 만들어주기
    ```jsx
    const Editor = ({onCreate}) => {
        const onSubmit = () => {
            onCreate()
        }

        return (
            <div className="Editor">
                <input placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        )
    };
    ```
- 이제 이벤트 핸들러 함수 안에 onCreate가 input의 값을 받아 실행되면 되는데 input의 값은 state에 저장되지 않고 있기에 state에 넣어줄 수 있게 코드 작성
    ```jsx
    const Editor = ({onCreate}) => {
        const [content, setContent] = useState("");

        const onChangeContent = (e) => {
            setContent(e.target.value);
        }

        const onSubmit = () => {
            onCreate(content)
        }

        return (
            <div className="Editor">
                <input 
                    value={content}
                    onChange={onChangeContent}
                    placeholder="새로운 Todo..." />
                <button onClick={onSubmit}>추가</button>
            </div>
        )
    };
    ```
- 그럼 이제 추가를 누르면 state에 content가 들어감.
- 그러나 현재 문제가 있다면 Id의 값이 0으로 나온다는 것.
```jsx
import { useRef } from 'react'
```
- 상단에 useRef를 import 하고 App 컴포넌트 안에 idRef 추가하기
```jsx
  const idRef = useRef(3) // mockData 고려하여 3부터 시작

  const onCreate = (content) => {
    const newTodo = {
      id : idRef.current ++,
      isDone: false,
      content: content,
      date: new Date().getTime(),
    }
  }
```
    - 데이터를 추가할 때마다 id 값을 증가시키기.
## 디테일 수정
### 빈 문자열을 입력했을 때 todo 추가하지 않기
```jsx
const onSubmit = () => {
    if (content === "") {
        return;
    }
    onCreate(content)
}
```
- Editor.jsx 파일에서 onSubmit 함수에서 조건문을 추가하여 빈 상태라면 바로 return을 하여 onCreate 함수가 실행되지 않게 한다.
- 추가적으로 input에 포커싱하기
    ```jsx
    import { useRef } from "react";

    const contentRef = useRef();
    ```
    - useRef를 import하고 App 컴포넌트 안에 contentRef를 작성
    ```jsx
    return (
        <div className="Editor">
            <input 
                ref={contentRef}
                value={content}
                onChange={onChangeContent}
                placeholder="새로운 Todo..." />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
    ```
    - input의 속성 값으로 ref를 작성해주기
    ```jsx
        const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content)
    }
    ```
    - onSubmit 함수에 contentRef에 포커스하도록 함.
### 새로운 todo를 만들고 나서 input을 비워주기
```jsx
const onSubmit = () => {
    if (content === "") {
        contentRef.current.focus();
        return;
    }
    onCreate(content)
    setContent("")
}
```
- onCreate 함수가 실행된 후 setContent를 실행해 content state를 빈 값으로 업데이트
### Enter키를 눌러도 입력이 가능하게 하기
```jsx
const onKeydown = (e) => {

}

    return (
    <div className="Editor">
        <input 
            ref={contentRef}
            value={content}
            onKeyDown={onKeydown}
            onChange={onChangeContent}
            placeholder="새로운 Todo..." />
        <button onClick={onSubmit}>추가</button>
    </div>
)
```
- onKeydown이라는 새로운 이벤트 핸들러를 만들어주고, input 태그에 onKeydown이라는 이벤트 핸들러로 연결해주기.
- onKeydown은 사용자가 어떤 키보드 키를 눌렀을 때 호출되는 이벤트 핸들러
- onKeydown 이벤트 핸들러 함수에 조건문을 추가하여 엔터 키를 눌렀을 때 onSubmit 함수가 실행되도록 하기
    ```jsx
    const onKeydown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    }
    ```