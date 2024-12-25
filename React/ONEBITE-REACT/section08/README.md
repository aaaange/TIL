# 프로젝트 2. TodoList
목차
1. [프로젝트 소개 및 준비](#01-프로젝트-소개-및-준비)
2. [UI 구현하기](#02-ui-구현하기)
3. [기능 구현 준비하기](#03-기능-구현-준비하기)
4. [Create - 투두 추가하기](#04-create---투두-추가하기)
5. [Read - 투두리스트 렌더링하기](#05-read---투두리스트-렌더링하기)
6. [Update - 투두 수정하기](#06-update---투두-수정하기)
7. [Delete - 투두 삭제하기](#07-delete---투두-삭제하기)

# 01 프로젝트 소개 및 준비
## 새로운 리액트 프로젝트 생성
- section08로 리액트 프로젝트 생성
- `npm i`로 설치
- `eslint.config.js`에 코드 추가
    ```
    "no-unused-vars":"off",
    "react/prop-types":"off",
    ```
- 불필요한 파일 제거


# 02 UI 구현하기
- scr 안에 components 폴더 만들기
- components 폴더 안에 Header.jsx, Editor.jsx, List.jsx 파일 생성
- 각 폴더에 아래 형식의 컴포넌트 작성하기
    ```jsx
    const Header = () => {
        return <div>Header</div>
    };

    export default Header;
    ```
- App 컴포넌트에 방금 만든 3개 컴포넌트 불러오기
    ```jsx
    import './App.css'
    import Editor from './components/Editor'
    import Header from './components/Header'
    import List from './components/List'

    function App() {

    return (
        <>
            <Header />
            <Editor />
            <List />
        </>
    )
    }

    export default App
    ```
## 레이아웃 구성하기
### App.jsx
- 각 컴포넌트의 간격과 스타일을 적용해야 하기 때문에 App 컴포넌트의 최상위 태그를 div로 변경하고 className을 설정하기
    ```jsx
    function App() {

        return (
            <div className='App'>
                <Header />
                <Editor />
                <List />
            </div>
        )
    }
    ```
### App.css
```css
.App {
    display: flex;
    flex-direction: column;
    gap: 10px;

    width: 500px;
    margin: 0 auto;
}
```
- `display: flex;` 
    - 자식 요소들의 구성을 조금 더 유연하게 사용할 수 있게 함.
    - 한 줄로 배치함.
- `flex-direction: column;`
    - 요소들의 정렬 방향을 열 방향으로 변경
- `gap: 10px;`
    - 요소들의 간격을 10픽셀로 설정
    - display가 flex로 설정된 요소에만 적용할 수 있음
- 중앙정렬
    ```css
    width: 500px;
    margin: 0 auto;
    ```
### Header UI 구성하기
```jsx
const Header = () => {
    return (
        <div>
            <h3>오늘은 📆</h3>
            <h1>{new Date().toDateString()}</h1>
        </div>
    )
};
```
- 오늘 날짜를 문자형으로 변경하여 읽기 편한 형태로 렌더링
#### css 수정하기
- 최상위 태그의 className 설정하기
    ```jsx
    <div className="Header">
    ```
- components 폴더 안에 Header 컴포넌트를 위한 css 파일인 Header.css 생성
    - Header.jsx에서 최상단에 css 파일 import 하기
        ```jsx
        imimport "./Header.css";
        ```
- Header.css에서 h1 태그 스타일 수정하기
    ```css
    .Header > h1 {
        color: rgb(37, 147, 255)
    }
    ```
### Editor UI 구성하기
```jsx
const Editor = () => {
    return (
        <div className="Editor">
            <input placeholder="새로운 Todo..." />
            <button>추가</button>
        </div>
    )
};
```
- input 요소와 button 요소를 넣어주기
- 스타일을 적용하기 위해 최상위 태그에 className을 설정해주기
- components 폴더에 Editor 컴포넌트를 위한 Editor.css 파일을 생성
- Editor.jsx 상단에 해당 css 파일을 import
- 스타일 설정
    ```css
    .Editor {
        display : flex;
        gap: 10px;
    }
    ```
    - 여백 만들어주기 
    ```css
    .Editor input {
        flex: 1;
        padding: 15px;
        border: 1px solid rgb(220, 220, 220);
        border-radius: 5px;
    }
    ```
    - `flex: 1;`
        - 부모의 길이를 벗어나지 않는 선에서 늘어날 수 있는 최대 길이로 설정됨.
    - `border: 1px solid rgb(220, 220, 220);`
        - 테두리에 선
    - `border-radius: 5px;`
        - 모서리의 둥근 정도
    ```css
    .Editor button {
        cursor: pointer;
        width: 80px;
        border: none;
        background-color: rgb(37, 147, 255);
        color: white;
        border-radius: 5px;
    }
    ```
### List UI 구성하기
```jsx
const List = () => {
    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <input placeholder="할 일 검색하기" />
        </div>
    )
};
```
- 구성 요소들을 Return에 작성하기
- List 컴포넌트의 스타일을 위한 css 파일 생성
    ```css
    .List > input {
        width: 100%;
        border: none;
        border-bottom: 1px solid rgb(220, 220, 220);
        padding: 15px 0px;
    }

    .List > input:focus {
        outline: none;
        border-bottom: 1px solid rgb(37 147 255);
    }
    ```
- List.jsx 파일 상단에 css 파일 import 하기
    ```jsx
    import "./List.css"
    ```
#### Todoitem 컴포넌트 생성
- 할 일 list를 살펴보면 같은 모양이 여러번 반복되는 것을 알 수 있는데 이 경우 하나의 할 일을 컴포넌트로 만들어서 반복적으로 사용하는 것이 좋음.
- components 폴더 안에 Todoitem.jsx 파일 생성
    ```jsx
    const Todoitem = () => {
        return (
            <div>
                todoitem
            </div>
        )
    }

    export default Todoitem;
    ```
- 다시 List.jsx로 돌아와 검색어 입력창 아래 div 태그를 만들고 Todoitem 컴포넌트를 3개정도 작성
    ```jsx
    import Todoitem from "./Todoitem";

    const List = () => {
        return (
            <div className="List">
                <h4>Todo List ✅</h4>
                <input placeholder="할 일 검색하기" />
                <div>
                    <Todoitem />
                    <Todoitem />
                    <Todoitem />
                </div>
            </div>
        )
    };
    ```
#### Todoitem UI 구성
- Todoitem 컴포넌트 구성 수정하기
    ```jsx
    const Todoitem = () => {
        return (
            <div className="Todoitem">
                <input type="checkbox" />
                <div className="content">Todo...</div>
                <div className="date">Date</div>
                <button>X</button>
            </div>
        )
    }
    ```
    - 현재 내부에 div가 2개이기 때문에 이 둘을 구별하기 위해 각각 className을 작성해주기
- 스타일 수정을 위해 Todoitem.css 파일 생성 하고 Todoitem 컴포넌트 파일 상단에 해당 css 불러오기
    ```css
    .Todoitem {
        display: flex;
        align-items: center;
        gap: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgb(240 240 240);
    }

    .Todoitem input {
        width: 20px;
    }

    .Todoitem .content {
        flex: 1;
    }

    .Todoitem .date {
        font-size: 14px;
        color: gray;
    }

    .Todoitem button {
        cursor: pointer;
        color: gray;
        font-size: 14px;
        border: none;
        border-radius: 5px;
        padding: 5px;
    }
    ```
- List 컴포넌트 안에 작성해 둔 여러개의 Todoitem 컴포넌트를 감싸고 있는 div 태그에 className 설정하기
    ```jsx
    <div className="todos_wrapper">
        <Todoitem />
        <Todoitem />
        <Todoitem />
    </div>
    ```
- 그리고 List.css 파일로 가서 해당 부분 스타일 설정
    ```css
    .List .todos_wrapper {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    ```
#### List 전반적 간격 설정
- List.css 최상단에 다음과 같이 스타일을 설정
    ```css
        .List {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    ```

# 03 기능 구현 준비하기
- 구현할 기능
    - 새로운 할 일 추가
    - 할 일 완료 체크
    - 할 일 삭제 
    - 할 일 검색
- 이러한 기능들을 구현하기 위해서는 할 일을 state에 저장해야 함.
    - 변경 사항들을 바로 바로 화면에 보여주기 위해.
- 할 일 state를 사용하는 컴포넌트들의 공통 부모인 App 컴포넌트에 state를 만들어주어야 함.
## App 컴포넌트에 Todo state 생성
```jsx
import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Editor />
      <List />
    </div>
  )
}
```
- todos에는 여러가지 할 일 목록을 저장해야 하니 초기 값으로 빈 배열([])을 입력해줌.
- 테스트를 위한 임시데이터 mockData를 생성 (데이터 모델링)
    ```jsx
    const mockData = [
        {
        id: 0,
        isDone: false,
        content: "React 공부하기",
        date: new Date().getTime(),
        },
        {
        id: 1,
        isDone: false,
        content: "스터디 README 정리하기",
        date: new Date().getTime(),
        },
        {
        id: 3,
        isDone: false,
        content: "방 정리하기",
        date: new Date().getTime(),
        },
    ]
    ```
    - 해당 데이터는 컴포넌트가 리렌더링 될 때마다 생성될 필요도 없고 상수이기 때문에 값이 변경되지도 않기에 컴포넌트 밖에 작성해도 문제 없음. 
- 생성한 mockData의 값으로 useState가 초기화되도록 입력
    ```jsx
    const [todos, setTodos] = useState(mockData);
    ```

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

# 05 Read - 투두리스트 렌더링하기
## 사전 준비
- List 컴포넌트에 임시로 작성해주었던 `<Todoitem />`를 모두 삭제해주기
## todos에 담긴 내용을 list의 형태로 렌더링해주기
```jsx
const List = ({todos}) => {
    console.log("todos:", todos);
    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <input placeholder="할 일 검색하기" />
            <div className="todos_wrapper">
                {todos.map((todo) => {
                    return <div>{todo.content}</div>;
                })}
            </div>
        </div>
    )
};
```
- 리액트에서 배열에 담긴 값을 반복적으로 출력하기 위해서는 배열 메서드인 map을 사용
- map 안에 콜백 함수로 todo를 담아주고 todo의 content를 출력한다. 그럼 map 함수를 통해 배열이 각각 출력된다.
- 오류가 발생하여 화면이 출력되지 않아 디버깅을 위해 `console.log("todos:", todos);`를 추가하였다. 
    - log를 확인해보니, todos가 defined로 출력. 이는 부모 컴포넌트에서 todos를 제대로 전달하고 있지 않는 것
        ```jsx
        return (
            <div className='App'>
                <Header />
                <Editor onCreate={onCreate}/>
                <List todos={todos}/>
            </div>
        )
        ```
        - app 컴포넌트의 return에 List 컴포넌트에 Todos를 props로 넣어주지 않았었음.
- return으로 html 코드를 넣을 수도 있고 `<TodoItem />`처럼 컴포넌트를 넣을 수도 있음
    - `return <Todoitem />;`
    - 각각에 아이템을 스프레드 연산자로 프롭스를 전달할 수도 있음
        - `return <Todoitem {...todo} />;`
## props로 전달된 내용을 각각 내용을 ui로 출력하도록 함
- Todoitem 컴포넌트 파일로 이동하여 매개변수에 프롭스로 전달한 `{id, isDone, content, date}` 입력.
- input의 속성으로 `checked={isDone}`을 넣어줌.
- content div 안에는 Todo...이라는 임시 텍스트를 대신하여 `{content}`를 넣어주기
- date div 안에도 `{date}`를 넣어주기
    - 그냥 {date}를 넣으면 타임스탬프가 찍히는데 `{new Date(date).toLocaleDateString()}`로 작성하면 더 적절한 형식의 날짜가 출력됨.
## 오류 해결
### 1. checked 옵션
- onChange 이벤트 핸들러 없이 checked 옵션을 사용하여 발생한 오류
- checked 옵션을 변경할 방법이 없는데 괜찮냐고 물어보는 오류임. 
- 아직 해당 기능을 구현하지 않았으니 오류가 발생하는 것이 맞음 추후 개발 예정
- 정 거슬린다면 input 태그에 속성으로 readOnly를 넣어주면 오류를 사라지게 할 수 있음
    - `<input readOnly checked={isDone} type="checkbox" />`
### 2. "key" props
- List 컴포넌트에서 Todoitem 컴포넌트를 리스트 형태로 출력하는 과정에서 props로 key를 제공하지 않아서 발생하는 오류
- 리액트에서는 리스트로 렌더링된 컴포넌트들이나 또는 어떤 요소들을 구분할 때 "key"라는 props를 통해 구분함
- 때문에 TodoItem 컴포넌트를 넣을 때 key를 프롭스로 전달해줘야 오류가 발생하지 않음
    ```jsx
    // List.jsx
    eturn <Todoitem key={todo.id} {...todo} />;
    ```
## 검색 기능 구현하기
### 검색어 입력시 리렌더링
- 검색어가 변경될 때마다 list가 리렌더링 되어야 할 필요가 있음. 때문에 List 컴포넌트에 검색어를 state로 보관해야 함. 
```jsx
const List = ({todos}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

...
}
```
- 컴포넌트 파일 상단에 useState를 렌더링
- search를 state로 작성하기
- 이벤트 핸들러로 setSearch에 설정해주기.
```jsx
return (
    <div className="List">
        <h4>Todo List ✅</h4>
        <input
            value={search}
            onChange={onChangeSearch} 
            placeholder="할 일 검색하기" 
        />
    ...
)    
```
- return 안에 input 태그에 value, onChange 함수를 설정해주기
### 검색어에 따라 list 필터링
- 검색어에 알맞는 List를 출력하기 위해 필터링이 필요함.
```jsx
const getFilteredData = () => {
    if (search === "") {
        return todos;
    } 
    return todos.filter((todo) =>
        todo.content.includes(search)
    );
}
```
- Filtering을 위한 함수 getFilteredDate를 작성
- search가 비어있다면 전체 todos를 렌더링
- 만약 비어있지 않다면 todos를 필터링하고 매개변수로 todo를 가진 콜백함수를 호출.
    - todo.content.includes(search)
    - 여기서 includes는 todo의 컨텐츠에 search가 포함되어 있으면 true 아니면 false를 출력하는 것.
    - 위에서 ture인 것만 출력되는 것
- 오류
    - 콜백함수 작성할 때 화살표 함수를 사용한다고 생각하고 () => {} 와 같은 형식으로 작성했는데 한줄짜리 함수여서 {}를 작성하면 안됐었나봄
    - 처음엔 아래와 같이 작성했는데 {} 지우니 출력됨
        ```jsx
        return todos.filter((todo) => {
            todo.content.includes(search)
        });
    ```
```jsx
const filteredTodos = getFilteredData();

return (
    <div className="List">
        <h4>Todo List ✅</h4>
        <input
            value={search}
            onChange={onChangeSearch} 
            placeholder="할 일 검색하기" 
        />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <Todoitem key={todo.id} {...todo} />;
            })}
        </div>
    </div>
)
```
- 만든 필터 함수를 통해 걸러진 todos를 filteredTodos 변수에 담고, 렌더링할 것을 todos에서 filteredTodos로 수정해줌.
### 대소문자 구별 안하게 개선
- 현재 상태에서는 대소문자를 구별하여 `React 공부하기`를 react로 검색할 경우 나오지 않음
- 이 경우 search에 담는 내용과 todo.content에 담긴 내용을 모두 소문자로 변환하여 검색하면 됨.
```jsx
const getFilteredData = () => {
    if (search === "") {
        return todos;
    } 
    return todos.filter((todo) => 
        todo.content.toLowerCase().includes(search.toLowerCase())
    );
}
```
- return 내용에 todo.content 뒤에 소문자로 변환하는 `toLowerCase()` 함수를 넣어주고 includes 안에 search에도 `toLowerCase()` 를 추가하여 소문자로 변환해준다.

# 06 Update - 투두 수정하기
- 현재 체크 박스 기능을 제공하고 있는데 체크 박스를 클릭 했을 때 체크가 되는 기능이 없음
- 체크 박스를 클릭하면 todos의 isDone이 true로 변경되어 체크 박스가 체크되어야 함
- onCreate 함수와 같이 setTodos를 호출해 todos를 수정해야 함.
## 수정 함수 만들기
- app 컴포넌트의 onCreate 함수 아래 onUpdate 함수를 만든다.
```jsx
const onUpdate = (targetId) => {

}
```
- 매개변수로 targetId를 받고, todos State의 값들 중에 targetId와 일치하는 id를 갖는 투두 아이템의 isDone 변경하고자 함.
- 해당 함수 안에 setTodos를 호출한다음 인수로 todos 배열에서 targetId와 일치하는 id를 갖는 요소의 데이터만 딱 바꾼 새로운 배열을 넣어줌.
```jsx
const onUpdate = (targetId) => {
    setTodos(todos.map((todo) => {
        if(todo.id === targetId) {
        return {
            ...todo,
            isDone: !todo.isDone
        }
        }
        return todo
    }))
}
```
- `...todos` 스프레드 연산자로 기존의 todos 값을 모두 펼침
- `isDone`의 값만 !로 todo.isDone으로 반전시킴
- 조건문에 일치하지 않는다면 todo를 그냥 렌더링
```jsx
  const onUpdate = (targetId) => {
    setTodos(todos.map((todo)=> 
      todo.id === targetId 
    ? {...todo, isDone: !todo.isDone}
    : todo))
  }
```
- 삼항연산자를 활용하여 간결하게 표현할 수도 있음

## 수정 함수 연결하기
- onUpdate 함수는 app 컴포넌트의 자식요소인 list 컴포넌트의 자식요소인 TodoItem 컴포넌트의 input이 클릭되었을 때 호출이 되어야 함.
```jsx
// App.jsx
return (
    <div className='App'>
        <Header />
        <Editor onCreate={onCreate}/>
        <List todos={todos} onUpdate={onUpdate} />
    </div>
)
```
- 순서대로 app 컴포넌트 안에 list 컴포넌트에 props로 onUpdate 함수를 넘겨 줌.
```jsx
const List = ({todos, onUpdate}) => {

    ...

    return (
    <div className="List">
        <h4>Todo List ✅</h4>
        <input
            value={search}
            onChange={onChangeSearch} 
            placeholder="할 일 검색하기" 
        />
        <div className="todos_wrapper">
            {filteredTodos.map((todo) => {
                return <Todoitem key={todo.id} onUpdate={onUpdate} {...todo} />;
            })}
        </div>
    </div>
    )

```
- List 컴포넌트에서는 프롭스를 구조 분해 할당으로 받기
- 리턴 문에서 또 프롭스로 onUpdate 함수를 전달
```jsx
const Todoitem = ({id, isDone, content, date, onUpdate}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    return (
        <div className="Todoitem">
            <input 
                onChange={onChangeCheckbox}
                readOnly 
                checked={isDone} 
                type="checkbox" 
            />

        ...
    )
}
```
- TodoItem 컴포넌트에서 onUpdate 함수를 props로 받기
- onChangeCheckbox라는 이벤트 핸들러 함수를 만들어 체크 박스를 눌렀을 때 onUpdate 함수가 호출될 수 있게 설정.
    - onUpdate의 매개변수는 변경될 Id 값을 넣어줘야 함.
- 여기서 onClick 이 아니라 onChange 라는 이벤트 핸덜러를 사용한 이유는 해당 태그가 button이 아니라 input이기 때문임.
    - 동작은 클릭으로 볼 수 있지만 그것으로 발생하는 이벤트는 체크 박스가 변경되는 것에 가까우니 onChange로 작성한 것.

# 07 Delete - 투두 삭제하기
## Delete 함수 만들기
- 삭제 버튼을 누르면 삭제가 되도록 해야하기 때문에 onUpdate 함수를 만든 것 처럼 App 컴포넌트에 onDelete 함수를 만들기
```jsx
const onDelete = (targetId) => {
    setTodos(todos.filter((todo)=>todo.id !== targetId))
}
```
- targetId를 매개변수로 받아 삭제할 요소의 id 값을 받아오기
- setTodos 함수에 인수로 todos 배열에서 targetId와 일치하는 id를 갖는 요소만 삭제한 새로운 배열을 넣어주기
    - 삭제되어야 하는 아이템을 제외한 배열 생성
## 함수 props로 전달
- onDelete 함수는 todoItem 컴포넌트에서 삭제 버튼을 눌렀을 때 작동해야 하기 때문에 list로 프롭스를 전달하고, 또 todoItem으로 프롭스 전달해야함.
```jsx
// App 컴포넌트의 return
  return (
      <div className='App'>
      <Header />
      <Editor onCreate={onCreate}/>
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete}/>
    </div>
  )
```
- onUpdate와 마찬가지로 onDelete도 프롭스로 전달하기
```jsx
const List = ({todos, onUpdate, onDelete}) => {
```
- list 컴포넌트의 매개변수로 받은 프롭스를 추가
```jsx
    return (
        <div className="List">
            <h4>Todo List ✅</h4>
            <input
                value={search}
                onChange={onChangeSearch} 
                placeholder="할 일 검색하기" 
            />
            <div className="todos_wrapper">
                {filteredTodos.map((todo) => {
                    return <Todoitem key={todo.id} onUpdate={onUpdate} onDelete={onDelete} {...todo} />;
                })}
            </div>
        </div>
    )
```
- list 컴포넌트 return문에 Todoitem 컴포넌트에 프롭스로 onDelete를 전달
```jsx
// Todoitem 컴포넌트
const Todoitem = ({id, isDone, content, date, onUpdate, onDelete}) => {
```
- 마찬가지로 Todoitem 컴포넌트에 매개변수로 onDelete를 추가.
## 삭제 버튼 클릭시 해당 요소가 삭제되도록 설정
```jsx
// Todoitem 컴포넌트
const onClickDeleteButton = () => {
    onDelete(id)
}


...


<button onClick={onClickDeleteButton}>X</button>
```
- 이벤트 핸들러를 만들어 삭제 버튼을 클릭하였을 때 요소가 삭제되도록 함.
