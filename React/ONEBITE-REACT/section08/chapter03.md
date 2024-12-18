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

