# 09 State로 사용자 입력 관리하기 2
- 지난 실습에서 반복적으로 사용되는 비슷한 형태의 코드들이 많이 있었음 이를 효율적으로 작성할 수 있도록 수정하고자 함.
## state 선언문
```jsx
const [name, setName] = useState("이름");
const [birth, setBirth] = useState("");
const [country, setCountry] = useState("");
const [bio, setBio] = useState("");
```
원래 이상태였던 선언문들을 삭제
```jsx
const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
})
```
- 이처럼 input을 한번에 받고 객체 형식으로 작성할 수 있도록 수정.
- 이 input을 이용하여 작동하도록 나머지 함수를 수정
    ```jsx
    const onChangeName = (e) => {
        setInput({
            ...Input,
            name : e.target.value
        })
    }
    ```
    - setInput에서 name의 값을 e.target.value으로 수정
    - ...Input : 스프레드 연산자를 사용하여 name 이외의 값들은 그대로 유지하도록 해줌.
        - 이를 작성해주지 않으면 setInput의 내용물이 나머지는 지워지고 name : e.target.value만 남게됨.
    - 나머지도 동일하게 수정
- input 속성에서도 value의 값을 `input.값`으로 변경
    ```html
    <div>
        <input 
            value={input.name}
            onChange={onChangeName} 
            placeholder={"이름"} />
    </div>
    ```
    - 나머지도 동일하게 수정