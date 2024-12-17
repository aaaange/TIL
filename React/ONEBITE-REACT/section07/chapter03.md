# 03 useEffect로 라이프사이클 제어하기
## 1. Mount를 useEffect로 제어하기
- Mount를 useEffect로 제어하는 방법은 함수를 작성하고 deps를 빈 배열로 입력하면 됨. ⭐️
    ```jsx
    useEffect( () => {}, [])
    ```
- useEffect의 함수는 deps의 값이 변경되어야 실행되기 때문에 처음 마운트 될 때 이후에는 다시는 실행되지 않음.
    ```jsx
    useEffect( () => {
        console.log("Mount")
    }, [])
    ```
## 2. Update를 useEffect로 제어하기
- useEffect를 작성하고 deps를 생략하기. ⭐️
    ```jsx
    useEffect( () => {})
    ```
- 이렇게 되면 해당 useEffect는 Mount될 때 한번 호출되고 리렌더링(업데이트)될 때 마다 호출될 것
    ```jsx
    useEffect( () => {
        console.log("Update");
    })
    ```
    - 컴포넌트를 클릭해 리렌더링 될 때마다 콘솔에 Update가 출력됨.
- 만약 마운트 될 때를 제외하고 업데이트가 될 경우에만 실행시키고 싶다면 마운트가 되었는지, 안되었는지를 확인하는 useRef를 활용하면 됨.
    - useRef import하기
        ```jsx
        import { useState, useEffect, useRef } from 'react'
        ```
    - state 아래에 다음과 같은 변수 선언
        ```jsx
        const isMount = useRef(false);
        ```
    - 그리고 useEffect에 isMount가 false라면 true로 변경하고 함수를 종료해버리는 조건문을 작성하면 된다.
        ```jsx
        useEffect( () => {
            if (!isMount.current) {
                isMount.current = true;
                return;
            }
            console.log("Update");
        })
        ```
## 3. UnMount를 useEffect로 제어하기
### unMount를 제어하기 위해 필요한 컴포넌트 생성
- UnMount를 제어하기 위해서는 조건에 따라 화면에 나타났다, 사라졌다 하는 컴포넌트가 필요함.
- component 폴더에 `Even.jsx` 파일 생성
    ```jsx
    const Even = () => {
        return <div>짝수입니다</div>
    };

    export default Even;
    ```
- App.jsx에 Viewer 컴포넌트 아래에 삼항연산자로 호출
    ```jsx
    <section>
        <Viewer count={count}/>
        {count % 2 === 0 ? <Even /> : null}
    </section>
    ```
    - 작성하면 상단에 Even의 import문 자동으로 생길 것. 생기지 않는다면 직접 작성하기
### unMount 제어하기
- useEffect의 두 번째 인수에 빈 배열을 넣고, 첫 번째 인수인 콜백함수의 return문에 콜백함수를 하나 더 작성하기 ⭐️
- Even.jsx 파일 상단에 useEffect import 하기
    ```jsx
    import { useEffect } from "react";
    ```
- 컴포넌트 안에 useEffect 작성
    ```jsx
    useEffect(() => {
        return () => {}
    }, [])
    ```
    - useEffect의 콜백함수가 반환하는 함수를 **클린업, 정리함수** 라고 부름.
        - 정리함수는 useEffect가 끝날 때 호출이 됨
    - useEffect는 deps가 비어 있으니 Mount될 때 실행이 되고, 종료는 그 반대인 UnMount될 때 종료됨.
        - 종료가 될 시점에 정리함수를 호출하게 되는 것.
- 정리함수 작성하기 
    ```jsx
    const Even = () => {
        useEffect(() => {
            return () => {
                console.log("UnMount")
            }
        }, [])
        return <div>짝수입니다</div>
    };
    ```
