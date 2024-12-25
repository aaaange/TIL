# 04 useCallback과 함수 재생성 방지
- 최적화를 위해 컴포넌트에 memo 메서드를 전달할 때마다 모든 프롭스를 일일이 비교하도록 코드를 작성하긴 어려움.
- 이럴 때는 객체 타입의 프롭스가 다시 생성되지 않도록 최적화하는게 좋음.
## useCallback
1. App 컴포넌트 파일 상단에 useCallback 함수를 import
    ```jsx
    import { useState, useRef, useReducer, useCallback } from 'react'
    ```
2. App 컴포넌트의 return문 위에 useCallback 함수 작성하기
3. useCallback 함수는 첫 번째 인수로 최적화하고 싶은 함수, 불필요하게 리렌더링 되는 함수를 넣어줌
4. 두 번째 인수로는 deps를 넣어줌
- useCallback은 첫 번째 인수인 콜백함수의 결과를 그대로 반환해서 사용할 수 있게 함.

```jsx
const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    })
}, [])
```
- useCallback 함수에 첫번째 인자에 최적화할 함수를 그대로 넣고, deps는 비워주기. 
- 그럼 최초 렌더링 이후로 리렌더링 되지 않음
- onDelete 변수에 담아주고, 원래 있던 OnDelete 함수는 삭제
- 나머지도 최적화를 한다면 다른 함수들도 useCallback으로 감싸주면 됨.
    ```jsx  
    const onCreate = useCallback((content) => {
        dispatch({
        type: "CREATE",
        data: {
            id : idRef.current ++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        }
        })
    }, [])
    const onUpdate = useCallback((targetId) => {
        dispatch({
        type:"UPDATE",
        targetId: targetId
        })
    }, [])
    ```
## 테스트
- 이제 더이상 todoitem의 memo 메서드에 콜백함수를 일일이 전달하지 않아도 됨
- 이전에 작성했던 export 문을 주석처리하고 아래에 다시 작성하기
```jsx
export default memo(Todoitem);
```
## 최적화
- 최적화는 언제하는가? 어떤 것을 하는가가 중요함.
    - 너무 이른 타이밍에 해도 문제가 발생할 수 있음.
    - 너무 많은 것을 하려고 해도 문제가 발생할 수 있음.
### 최적화는 언제하면 좋을까?
- 하나의 컴포넌트 기능을 모두 구현한 후 최적화를 하는게 일반적임
- useCallback과 같은 함수를 최적화 하는 기능을 사용한 후 함수를 수정하거나 추가로 덧붙이는 내용들이 있다면 문제가 발생할 수 있기 때문.
- 기능 구현 완료 후 마지막에 최적화하기
### 어떤 것이 최적화의 대상이 되어야 하는가?
- 모든 요소에 최적화를 적용하는 것이 아닌 꼭 필요한 컴포넌트나 요소에 적용해야 함.
- 너무 사소한 요소의 최적화를 위해 memo 함수를 사용할 경우 그냥 리렌더링을 하는게 memo 함수를 돌리는 것보다 빠를수 있거나 효율적인 경우가 생김
- 함수를 많이 가지고 있어 무거운 컴포넌트나, 유저의 행동에 따라 갯수가 굉장히 많아질 수도 있는 컴포넌트 등을 최적화함.

