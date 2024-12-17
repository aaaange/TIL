# 02 UI 구현하기
## 파일 구성하기
### Viewer.jsx
1. src 폴더 안에 components 폴더 만들기
    - 해당 폴더 안에 `Controller.jsx` 파일과 `Viewer.jsx` 파일을 생성
2. `Viewer.jsx` 파일에 코드 작성하기
    ```jsx
    const Viewer = () => {
        return <div>viewer</div>
    }

    export default Viewer;
    ```
3. App.jsx 파일에 Viewer 컴포넌트 추가하기
    ```jsx
    // App.jsx
    import './App.css'
    import Viewer from './components/Viewer'

    function App() {
    return (
        <>
        <Viewer />
        </>
    )
    }

    export default App
    ```

4. Viewer.jsx 파일 내용 수정
    ```jsx
    const Viewer = () => {
        return (
            <div>
                <div>현재 카운트</div>
                <h1>0</h1>
            </div>
        )
    }
    ```
### Controller.jsx
1. `Controller.jsx` 코드 입력
    ```jsx
    const Controller = () => {
        return (
            <div>controller</div>
        );
    }

    export default Controller;
    ```
2. App.jsx 코드 추가하기
    ```jsx
    import Controller from './components/Controller'
    import Viewer from './components/Viewer'

    function App() {
        return (
            <>
                <Viewer />
                <Controller />
            </>
        )
    }
    ```
3. Controller 코드 수정
    ```jsx
    const Controller = () => {
        return (
            <div>
                <button>-1</button>
                <button>-10</button>
                <button>-100</button>
                <button>+100</button>
                <button>+10</button>
                <button>+1</button>
            </div>
        );
    }
    ```
## Detail & CSS
### App.jsx
1. 상단 제목 설정하기
    - 자식 컴포넌트들 위에 h1 태그를 만들어 제목을 작성한다.
        ```html
        <h1>Simple Counter</h1>
        ```
2. 각 (자식) 컴포넌트들을 section 태그로 묶어준다.
    ```jsx
    <>
      <h1>Simple Counter</h1>
      <section>
        <Viewer />
      </section>
      <section>
        <Controller />
      </section>
    </>
    ```
    - css를 적용할 때 컴포넌트마다 여백과 background color를 설정하기 위함.
3. 컴포넌트들의 스타일 적용하기
    - 최상위 태그를 div 태그로 변경하고 className을 갖게 한다.
        ```jsx
        <div className='App'>
        <h1>Simple Counter</h1>
        <section>
            <Viewer />
        </section>
        <section>
            <Controller />
        </section>
        </div>
        ```
    - `App.css`에 코드 작성
        ```css
        .App > section {
            background-color: rgb(245 245 245); /* 배경 색 */
            border: 1px solid rgb(240 240 240); /* 테두리 선 */
            border-radius: 5px; /* 테두리 라운딩 */
            padding: 20px;
            margin-bottom: 10px; /* 컴포넌트 사이 간격 -> 범위 바깥 공간 */
        }
        ```
        ```css
        body {
            padding: 20px;
        }

        .App {
            margin : 0 auto; /* 화면 상에 남는 부분을 자동으로 여백을 줌 - 가운데 배치하도록 도움 */
            width: 400px;
        }
        ```
