# 03 페이지 라우팅 2.라우팅 설정하기
## React Router
- npmjs.com에 등록되어 있는 라이브러리
- 대다수의 리액트 앱이 사용하고 있는 대표격 라이브러리
### 설치하기
- 터미널에 `npm i react-router-dom` 
    - package.json 파일에 가보면 6.대 버전이 설치되어 있음을 확인
    - 그보다 낮은 버전이면 높은 버전으로 재설치 필요
- `npm run dev`로 서버 켜기
### 사용하기
```jsx
import { BrowserRouter } from "react-router-dom";
```
- main.jsx 상단에 import하기
```jsx
createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
)
```
- BrowserRouter가 App 컴포넌트를 감싸는 부모 컴포넌트가 되도록 설정
- BrowserRouter는 현재 주소를 저장하고 감지하는 역할을 함.
    - 때문에 App 컴포넌트를 감싸주면 리액트의 모든 컴포넌트들이 현재 브라우저의 주소를 불러와서 쓸수도 있고, 주소의 변화를 감지할 수도 있음.
### 페이지 나누기
- App.jsx 파일에서 페이지 나누기
    1. "/" : 모든 일기를 조회하는 Home 페이지
    2. "/new" : 새로운 일기를 작성하는 New 페이지
    3. "/diary" : 일기를 상세히 조회하는 Diary 페이지
- 리액트에서 페이지를 나누기 위해서는 컴포넌트를 만들어줘야 함
- 페이지 역할을 할 컴포넌트를 모아주기 위해 src 안에 pages라는 폴더를 만들어주기
    - 그 안에 Home.jsx, Diary.jsx, New.jsx 파일을 각각 만들기
    - 각각의 컴포넌트를 임시로 만들어줌
        ```jsx
        const Home = () => {
            return <div>Home</div>
        }

        export default Home;
        ```
- App 컴포넌트로 돌아와 각각의 컴포넌트들을 모두 불러오기 (상단 import)
    ```jsx
    import Home from './pages/Home'
    import Diary from './pages/Diary'
    import New from './pages/New'
    ```
- 상단에 Routes, Route import
    ```jsx
    import { Route, Routes } from 'react-router-dom'
    ```
- 최상위 태그 Routes 태그로 감싸주고, 그 안에 Route 태그를 작성.
    - Route 태그 속성 중 path는 주소, element는 이동할 컴포넌트를 작성
    ```jsx
    function App() {
        return (
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        )
    }
    ```
- 