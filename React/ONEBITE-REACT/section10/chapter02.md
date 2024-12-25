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
