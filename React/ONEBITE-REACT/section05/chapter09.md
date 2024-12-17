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
            ...input,
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
- 제대로 잘 설정이 완료되었는지 확인하기 위해 console.log 작성
    ```jsx
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    })

    console.log(input);
    ```
    - 스프레스 연산자를 통해 변경하려는 값만 변경되는 것을 볼 수 있음.
    - 확인 다 했으면 콘솔로그 지우기
### 이벤트 핸들러 묶어주기 (통합 이벤트 핸들러)
- 통합 이벤트 핸들러 만들기
    ```jsx
    const onChange = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
    }
    ```
    - state와 마찬가지로 스프레드 문을 활용하여 다른 이벤트 핸들러는 유지되도록 설정하기.
- 나머지 이벤트 핸들러 삭제
- 리턴문의 인풋 속성에 name을 작성해주고 이벤트 핸들러의 함수를 수정해준다.
    ```html
    <div>
        <input 
            name="name"
            value={input.name}
            onChange={onChange} 
            placeholder={"이름"} />
    </div>
    ```
    - name 속성에는 input의 이름을 넣는다.
    - 나머지 속성도 동일하게 수정
#### 통합 이벤트 핸들러 설명
1. 먼저 통합 이벤트 핸들러에 작성된 onChange라는 함수로 모든 이벤트 핸들러 함수를 수정해주었기에 어디에서 입력을 수정하든 onChange 함수가 실행이 됨.
2. 함수가 실행되면 setInput이라는 함수가 실행되고, 객체로 스프레드 문인 `...input`은 기존에 input으로 받은 값들을 나열해준 다음 마지막에 프로퍼티의 키를 명시하는 자리에 [e.target.name]을 넣어줌.
    - 자바스크립트의 문법으로 새로운 객체를 만들면서 프로퍼티의 키의 자리에 대괄호를 열고 변수의 이름을 작성하면 작성한 변수의 값이 프로퍼티의 키로 설정됨.
    - e.target.name
        - evnet가 발생한 값의 속성 값 중 name이 들어있음.
        - 만약 생년월일을 수정한다면 event의 target은 Input 태그가 될 것이고, 그 타겟의 name은 birth가 되는 것.
        - 즉, [e.target.name]은 birth가 되는 것이고 `birth: e.target.name`가 되는 것.
