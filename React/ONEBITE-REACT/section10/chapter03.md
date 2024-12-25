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

