# 프로젝트 1. 카운터 앱
목차
1. [프로젝트 소개 및 준비](#01-프로젝트-소개-및-준비)

# 01 프로젝트 소개 및 준비
## Counter App
### 사전 준비
1. React 프로젝트 생성하기
2. `eslint.config.js`
    - rules에 다음 코드 추가하기
        ```js
        "no-unused-vars":"off",
        "react/prop-types":"off",
        ```
3. 불필요한 파일 삭제
    - 로고들
    - App.css, index.css 전체 코드
    - mian.jsx 스크립트모드
    - App.jsx
        ```jsx
        // App.jsx
        import './App.css'

        function App() {
            return (
                <>
                카운터 앱
                </>
            )
        }

        export default App
        ```