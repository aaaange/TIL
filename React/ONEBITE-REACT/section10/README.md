# 최적화 (Optimization)
목차
1. [최적화란](#01-최적화란)
2. [useMemo와 연산 최적화](#02-usememo와-연산-최적화)
3. [React.memo와 컴포넌트 렌더링 최적화](#03-reactmemo와-컴포넌트-렌더링-최적화)


# 01 최적화란
- 웹 서비스의 성능을 개선하는 모든 행위를 일컫음
- 아주 단순한 것부터 아주 어려운 방법까지 매우 다양함.
#### 일반적인 웹 서비스 최적화 방법
- 서버의 응답 속도 개선
- 이미지, 폰트, 코드 파일 등의 정적 파일 로딩 개선
- 불필요한 네트워크 요청 줄임
- ...
#### React App 내부의 최적화 방법
- 컴포넌트 내부의 불필요한 연산 방지
- 컴포넌트 내부의 불필요한 함수 재생성 방지
- 컴포넌트의 불필요한 리렌더링 방지
## 사전 준비
- section09에서 작성한 todolist 프로젝트를 그대로 사용할 것이기 때문에 section09에서 node_modules를 제외한 나머지를 복사하여 section10로 가져오기
- section10로 터미널을 이동한 후 `npm i`를 입력해 사용할 것들을 설치
- `npm run dev`로 서버 켜고 잘 작동되는지 확인까지 완료하기

# 02 useMemo와 연산 최적화
useMemo - 불필요한 연산 방지
### useMemo
- **"메모이제이션"** 기법을 기반으로 불필요한 연산을 최적화하는 리액트 훅
    - 자매품 : useCallback
#### Memoization
- 기억해두기, 메모해두기 라는 뜻
- 동일한 연산을 반복적으로 사용하여야 할 때 결과 값을 매번 새롭게 연산하는 것이 아닌 최초로 계산하였을 때의 결과값을 메모리에 저장.
- 다시 이 연산이 필요해지면 연산을 수행하는 것이 아니라 메모리에 저장된 결과값을 돌려주는 기법
- 불필요한 연산 방지
## 현재 todo들의 상태를 분석하여 수치를 나타내기
```jsx
const getAnalyzedData = () => {
    const totalCount = todos.length;
    const doneCount = todos.filter(
        (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;
    
    return {
        totalCount,
        doneCount,
        notDoneCount
    }
}
```
- List 컴포넌트 안에 return문 위에 코드를 작성
```jsx
const {totalCount, doneCount, notDoneCount} = getAnalyzedData();
```
- 그리고 그 아래에 각각의 변수로 구조 분해 할당하여 담아주기
```jsx

```
- list 컴포넌트의 retur문 위에 div 태그를 만들어 출력할 내용을 담아주기
### filter
- 위와 같은 분석의 경우 Filter 함수를 사용하였기 때문에 todos에 들어 있는 값이 많아질 수록 훨씬 오래 걸리는 코드가 될 것.
- filter는 배열내의 전체 코드를 한 번씩 순회하기 때문.
- 최대한 이 함수가 불필요하게 호출되는 경우를 방지할 수 있어야 함
```jsx
const getAnalyzedData = () => {
    console.log("getAnalyzedData 호출!")
    const totalCount = todos.length;
    ...
```
- 이 처럼 getAnalyzedData 함수가 호출될 때마다 console.log를 찍게 한다면 페이지가 최초 렌더링 되었을 때 한 번 호출되고, 이후 검색을 할 때 한글자마다 한번씩 호출됨을 알 수 있음.
- 검색창에 무언가 검색한다고 수치가 변화하는 것이 아니기에 이는 명백한 낭비
- 때문에 getAnalyzedData 함수의 연산 자체를 메모이제이션 할 수 있는 방법이 필요한데 이 것이 useMemo
## useMemo 사용하여 불필요한 연산 줄이기
```jsx
import { useState, useMemo } from "react";
```
- 파일 상단으로 가 useMemo를 import
```jsx
useMemo(()=>{}, [])
```
- 우리가 만든 getAnalyzedData 함수 아래에 useMemo를 작성. 
- useMemo는 첫 번째 인수로 콜백 함수를 갖고, 두 번째 인수로 배열을 가짐.
- 여기서 두 번째 인수인 배열은 **의존성 배열인 deps**
    - 이전에 배웠던 useEffect Hook에서 deps가 바뀌면 콜백 함수를 다시 실행하는 Hook이라고 배웠었음
    - 이와 동일
- 추가로 콜백함수가 리턴하는 값을 바로 사용할 수 있음
    ```jsx
    const a = useMemo(()=>{return 1}, [])
    ```
    - 이런식으로 바로 받아서 사용할 수 있음
### useMem의 콜백 함수
#### 콜백함수에는 메모이제이션 하고 싶은 내용을 넣어주면 됨.
```jsx
useMemo(()=>{
    console.log("getAnalyzedData 호출!")
    const totalCount = todos.length;
    const doneCount = todos.filter(
        (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;
    
    return {
        totalCount,
        doneCount,
        notDoneCount
    }
}, [])
```
- getAnalyzedData 함수의 내용을 전체 다 메모이제이션 하고 싶기에 전체를 복사해 넣어줬음.
```jsx
const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!")
    const totalCount = todos.length;
    const doneCount = todos.filter(
        (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;
    
    return {
        totalCount,
        doneCount,
        notDoneCount
    }
}, [])

// const {totalCount, doneCount, notDoneCount} = getAnalyzedData();
```
- useMemeo는 콜백함수가 return한 것을 그대로 return하기 때문에 아까 작성했던 변수 코드는 주석 처리하고 바로 구조 분해 할당을 진행하면 됨.
- 이제 getAnalyzedData 함수는 useMemo 안에서 연산을 수행하고 있기에 필요가 없으니 삭제.
- 현재 deps가 비어있기 때문에 해당 useMemo는 페이지가 최초에 렌더링 되는 순간 한 번만 호출됨
```jsx
const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
    console.log("getAnalyzedData 호출!")
    const totalCount = todos.length;
    const doneCount = todos.filter(
        (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;
    
    return {
        totalCount,
        doneCount,
        notDoneCount
    }
}, [todos])
```
- deps 안에 todos를 넣어주면 todos가 변경될 때만 콜백함수가 호출됨.

# 03 React.memo와 컴포넌트 렌더링 최적화
## React.memo
- 리액트의 내장함수
- 컴포넌트를 인수로 받아, 최적화된 컴포넌트로 만들어 반환
```jsx
const MemoizedComponent = memo(Component)
```
- 부모의 컴포넌트가 리렌더링되더라도 자신이 받는 props가 바뀌지 않으면 리렌더링되지 않음
## 현재 만든 프로젝트에서 불필요하게 리렌더링되는 부분 살펴보기
1. 크롬 개발자도구에서 Components 탭에서 톱니바퀴(⚙️) 모양의 설정 버튼을 클릭
2. Highlight updates when components render의 체크 박스를 체크
    - 리렌더링 되는 부분을 하이라이팅으로 알려줌.
3. 새로고침 한 후 Todoitem의 체크박스를 켰다 껐다 해보기.
    - 존재하는 모든 컴포넌트가 리렌더링됨.
    - 그러나 Header 컴포넌트는 리렌더링될 필요가 없음
## Header 컴포넌트에 memo 기능 사용하기
```jsx
import { memo } from "react";
```
- Header 컴포넌트 파일 상단에 memo를 import
```jsx
const memoizedHeader = memo(Header)

export default memoizedHeader;
```
- 해당 파일 하단에 Header 컴포넌트 바깥에 memo를 호출하고 인수로 Header 컴포넌트를 넣어주기
- 이를 변수에 저장함
- 이제 export로 Header를 내보내는게 아니라 저장한 변수를 내보냄
- 이렇게 되면 메모이제이션 되어 자신이 받는 프롭스가 변하지 않으면 다시는 리렌더링되지 않음.
```jsx
export default memo(Header);
```
- 위에 작성한 두 줄을 지우고 이처럼 단축하여도 같은 결과
## Todoitem 컴포넌트에 memo 기능 사용하기
- 현재 어떤 todoitem 요소의 체크를 클릭하든 다른 todoitem 요소들도 함께 리렌더링 됨.
- 이 부분 또한 최적화 해줄 수 있음
```jsx
import { memo } from "react";
import "./Todoitem.css"

const Todoitem = ({id, isDone, content, date, onUpdate, onDelete}) => { ...
}

export default memo(Todoitem);
```
- 상단에 memo 메서드 import 하기
- 하단에 export에 memo로 컴포넌트를 감싸 memo 메서드 호출
#### 그런데 테스트 해보니 예상한대로 동작하지 않음.
- 0번 todo의 체크박스를 눌러도 모든 todoitem의 요소들이 리렌더링 됨.
- 메모 메서드가 제대로 동작하지 않는 것처럼 보임
- 사실 메모 메서드는 제대로 작동하고 있는게 맞음
    - 체크박스를 클릭하면 todos를 리렌더링한다면 App 컴포넌트가 리렌더링되고, 그렇게 되면 컴포넌트 안에 있던 함수들도 다 새롭게 만들어지게 됨.
    - 함수는 객체 타입에 해당되기 때문에 같은 동작을 한다고 해도 다른 값으로 인식하게 됨.
    - 함수는 객체 타입이기 때문에 주소 값으로 저장됨. 객체 간의 비교는 주소값을 기준으로 진행됨.
#### 객체타입의 함수를 props로 전달하면 리렌더링 될 때마다 주소 값이 바뀌어 동일한 props라고 취급하지 않는 것.
- 과거와 현재 props를 비교해보고, 다르다고 판단하여 memo를 사용해도 전체 todoitem이 모두 리렌더링하는 것.
## 객체 타입의 프롭스를 전달 받는 컴포넌트에 memo를 적용하는 2가지 방법
### 1. 함수들 자체를 메모이제이션하여 리렌더링되어도 변경되지 않게 하기
- 이렇게 하려면 useCallback이라는 또 다른 hook을 이용해야 함.
### 2. memo 함수에 두 번째 인수로 콜백함수를 넣어 최적화 기능 커스텀 하기
```jsx
memo(Todoitem, (pervProps, nextProps) => {

})
```
- 대체로 두번째 인수의 콜백함수는 생략하지만, 생략하지 않는다면 알아서 이전 프롭스와 현재 프롭스가 같은지 판단하지 않음
- 반환 값에 따라 props가 바뀌었는지 안 바뀌었는지 판단하게 됨
- T 반환 : props가 바뀌지 않음 -> 리렌더링 x
- F 반환 : props가 바뀌었음 -> 리렌더링 o
```jsx
export default memo(Todoitem, (prevProps, nextProps)=> {
    if(prevProps.id !== nextProps.id) return false;
    if(prevProps.isDone !== nextProps.isDone) return false;
    if(prevProps.content !== nextProps.content) return false;
    if(prevProps.date !== nextProps.date) return false;

    return true; // 아무것도 바뀌지 않았다면 리렌더링 하지 마라
});
```
## 고차 컴포넌트 (HOC)
- 컴포넌트를 인수로 받아 해당 컴포넌트의 최적화나 메모이제이션 같은 추가적인 기능을 덧붙여서 기능이 추가된 컴포넌트를 반환하는 메서드들을 리액트에서는 고차 컴포넌트라고 부름

