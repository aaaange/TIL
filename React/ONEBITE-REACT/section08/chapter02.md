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
