# 03 JSX로 UI 표현하기
## JSX란?
- 자바스크립트에서 html을 리턴하는 함수를 컴포넌트라고 이야기했는데, 자바스크립트에서는 함수가 html을 리턴하는 경우 문법적 오류로 판단함.
- 그러나 리액트에서는 순수한 자바스크립트가 아닌 확장된 자바스크립트인 JSX 문법을 사용하여 위와 같은 문법을 적합하다고 판단함.
### JSX
- JavaScript Extensions
- 확장된 자바스크립트의 문법
- 자바스크립트와 html을 혼용하여 사용할 수 있음
```js
function Main () {

    const number = 10;

    return (
        <main>
            <h1>this is main Component!</h1>
            <h2>{number}</h2>
        </main>
    );
}
```
- 이 처럼 자바스크립트의 변수를 중괄호{}를 이용하여 html에서 바로 출력할 수 있음 
- 중괄호 안에는 문자나 숫자 값으로 평가할 수 있는 경우 뭐든 사용 가능 함.
- 삼항연산자도 가능 `{number % 2 === 0 ? "짝수" : "홀수"}`
## JSX 주의 사항
1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다.
    - 한 줄의 코드가 특정한 값으로 표현할 수 있는 경우
    - 문자, 숫자, 삼항연산자 등
    - if, for문의 경우 한 줄로 특정한 값이 표현되지 않아 자바스크립트 표현식으로 볼 수 없음
2. 숫자, 문자열, 배열 값만 렌더링 된다.
    - boolean 방식 (true/false) ❌
    - undefined ❌
    - null ❌
    - object를 그대로 렌더링❌
        ```js
        const obj = { a: 1};

        return (
            {obj}
        )
        ```
        - 이와 같이 작성하면 페이지가 백지가 됨. 오류 발생.
        - object를 렌더링하기 위해서는 점표기법을 사용해야 함.
            - `{obj.a}`
3. 모든 태그는 닫혀있어야 한다.
    ```js
    <img></img>
    // 혹은 
    <img /> // 셀프클로징
    ```
4. 최상위 태그는 반드시 하나여야만 한다.
    - 가장 높은 태그가 하나만 존재해야 하고, 두 개가 존재할 경우 오류가 발생
    - 최상위 태그로 묶어줄 마땅한 태그가 없다면 빈 태그로 묶는 것도 가능함
        ```jsx
        <>
            <img></img>
            <h1></h1>
            ...
        </>
        ```
    - 빈 태그로 묶으면 JSX에서는 최상위 태그로 묶었다고 판단되지만 실제로 렌더링 될 때는 렌더링 되지 않음.
## return 값에 따라 UI 다르게 출력하기
```jsx
function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }
    return (
        <>
        {user.isLogin ? (
            <div>로그아웃</div>
        ) : (
            <div>로그인</div>
        )}
        </>
    );
}
```
- 이 경우 isLogin이 true일 경우 화면에 "로그아웃"이라고 출력되고, false일 경우 "로그인"으로 출력될 수 있다.
```jsx
function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }

    if (user.isLogin) {
        return <div>로그아웃</div>;
    } else {
        return <div>로그인</div>;
    }
}
```
- 이렇게 작성하는 것도 가능함.
## 요소에 style 적용하기
### 1. 직접 태그에 style 작성하기
```jsx
function Main () {
    const user = {
        name: "홍길동",
        isLogin: true,
    }

    if (user.isLogin) {
        return (
          <div 
            style={{
              backgroundColor: "red",
              borderBottom: "5px solid blue",
            }}
          >
            로그아웃
          </div>
        );
    } else {
        return <div>로그인</div>;
    }
}
```
- `<div style={{}} >`
    - 객체를 전달하기 위해 중괄호를 두 개 작성한다 `{{}}`
- 스타일을 작성할 때 CSS에서 작성했던 것 처럼 `background-color` 와 같이 작성해서는 안된다.
  - `backgroundColor: "red"`
  - 연결되는 문자를 띄어쓰기 없이 대문자로 작성해야 함.
    - 이와 같은 작성법을 **카멜케이스(camelCase)**라고 부름
### 2. 별도의 css 파일을 만들어 작성하기
- main 컴포넌트를 위한 css 파일을 만들기 위해 **components**폴더에 `Main.css` 파일을 만들어준다.
- 그리고 원하는 스타일을 css 형식으로 작성한다.
  ```css
  .logout{
    background-color: red;
    border-bottom: 5px solid skyblue;
  }
  ```
- main 컴포넌트 파일 최상단에 `import "./Main.css"`를 작성하여 불러와 준다.
  - 컴포넌트에서 css 파일을 불러올 때 import 뒤에 경로만 작성해줘도 알아서 불러와 줌 (리액트 기능)
- 이 전에 요소에 직접 작성하였던 style을 삭제 후 className을 css에서 작성했던 것과 동일하게 작성하기.
  ```jsx
  <div className="logout">로그아웃</div>
  ```
- html에서는 `class=""`로 클래스 이름을 설정해줬었는데, JSX에서는 `className=""`로 작성하는 것을 알 수 있음
