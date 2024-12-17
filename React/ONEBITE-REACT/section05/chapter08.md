# 08 State로 사용자 입력 관리하기 1
## 사전 준비
- App.jsx에 작성되어 있던 Bulb, Counter 컴포넌트와 useState import문은 더이상 사용하지 않기에 삭제.
```jsx
import './App.css';

function App() {
  
  return (
    <>

    </>
  );
}

export default App;
```
## 간단한 회원가입 폼 만들기
1. components 폴더에 `Register.jsx` 파일 만들기
    ```jsx
    const Register = ()=> {
        return (
            <h1>register</h1>
        )
    }

    export default Register;
    ```
2. `App.jsx` 파일에 Register 컴포넌트 import 하기
    ```jsx
    // App.jsx
    import Register from './components/Register';

    function App() {
    
    return (
        <>
        <Register />
        </>
    );
    }
    ```
### 수집할 내용 입력하기
1. 사용자의 이름
2. 생년 월일
3. 국적
4. 자기소개
- Register 컴포넌트 내부에 `input 태그`를 작성해주기
    ```jsx
    const Register = ()=> {
        return (
            <div>
                <input placeholder={"이름"} />
            </div>
        )
    }

    export default Register;
    ```
    - placeholder : 사용자가 아무것도 입력하지 않았을 경우 회색으로 나타나는 가이드문구
#### 이름을 state에 저장하기
```jsx
import { useState } from "react";

const Register = ()=> {
    const [name, setName] = useState("");

    return (
        <div>
            <input placeholder={"이름"} />
        </div>
    )
}
```
- state를 구조분해 할당하여 name state를 만들기
- input 안에 값이 바뀌면 상태를 바꿔줄 이벤트 핸들러를 만들기
```jsx
const Register = ()=> {
    const [name, setName] = useState("");

    const onChangeName = (e) => {
        console.log(e)
    }

    return (
        <div>
            <input onChange={onChangeName} placeholder={"이름"} />
        </div>
    )
}
```
- 이렇게 작성하면 input에 작성된 내용을 콘솔로그를 통해 볼 수 있음
    - SyntheticbaseEvent > target > value에서 "..." 클릭
    - e.target.value로 접근하면 사용자가 입력한 내용에 접근 할 수 있다는 이야기.
```jsx
const onChangeName = (e) => {
    setName(e.target.value);
}
```
- 이를 통해 setName에 사용자가 입력한 값이 매개변수로 들어가고 name에 그 값이 저장될 것임.
```jsx
const Register = ()=> {
    const [name, setName] = useState("이름");

    const onChangeName = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <input 
                value={name}
                onChange={onChangeName} 
                placeholder={"이름"} />
            {name}
        </div>
    )
}
```
- 만약 초기값을 설정하려는 경우 input의 속성에 value 값을 설정함으로써 초기값을 띄울 수 있음.


#### 생년월일을 state에 저장하기
1. `<input type="date" />`를 작성하면 날짜 선택기(Date Picker)를 사용할 수 있음
    - 사용하는 브라우저에 따라 다른 모양으로 렌더링 될 수 있음
2. 각 각의 인풋 값을 한 줄씩 보여주기 위해 div로 감싸기
    - 현재 상태에서는 name을 받는 인풋과 생년월일을 받을 인풋이 한줄로 나열되어있고, 딱 붙어있어 보기 않좋음
    ```jsx
    <div>
        <input 
            value={name}
            onChange={onChangeName} 
            placeholder={"이름"} />
    </div>
    <div>
        <input type="date" />
    </div>
    ```
    - div는 한 줄을 통째로 사용하기 때문에 한 줄씩 출력할 수 있음
3. input으로 받을 값을 state에 저장하기
    ```jsx
    const Register = ()=> {
        const [birth, setBirth] = useState("");

        const onChangeBirth = (e) => {
            setBirth(e.target.value);
        }

        return (
            <div>
                <div>
                    <input 
                        value={name}
                        onChange={onChangeName} 
                        placeholder={"이름"} />
                </div>
                <div>
                    <input 
                        value={birth}
                        type="date"
                        onChangeBirth={onChangeBirth} />
                </div>

            </div>
        )
    }
    ```
#### 국적을 state에 저장하기
1. select 태그를 이용하면 드롭박스의 형태로 제작할 수 있음
    - option 태그를 사용해 원하는 값들을 드롭박스에 요소로 넣기
    - select 태그는 최상단의 option을 기본 값으로 가지기에 아무것도 선택이 안된 상태를 원한다면 빈 값을 가진 option을 최상단에 위치시켜주기
    ```jsx
    <div>
        <select>
            <option></option>
            <option>한국</option>
            <option>미국</option>
            <option>영국</option>
        </select>
    </div>
    ```
2. state 만들기
    ```jsx
    const Register = ()=> {
        const [country, setCountry] = useState("");

        const onChangeCountry = (e) => {
            setCountry(e.target.value);
        }

        return (
            <div>
                <div>
                    <input 
                        value={name}
                        onChange={onChangeName} 
                        placeholder={"이름"} />
                </div>
                <div>
                    <input 
                        value={birth}
                        type="date"
                        onChangeBirth={onChangeBirth} />
                </div>
                <div>
                    <select 
                        value={country}
                        onChangeCountry={onChangeCountry}>
                        <option></option>
                        <option>한국</option>
                        <option>미국</option>
                        <option>영국</option>
                    </select>
                </div>

            </div>
        )
    }
    ```
    - select 태그의 경우 value의 값을 선택지에서 보이는 것과 다르게 출력할 수 있음
    ```html
    <div>
        <select 
            value={country}
            onChangeCountry={onChangeCountry}>
            <option></option>
            <option value="kr">한국</option>
            <option>미국</option>
            <option>영국</option>
        </select>
        {country}
    </div>
    ```
    - 이렇게 설정하는 경우 드롭 박스에서 "한국"을 선택한 경우 "kr"로 출력되게 할 수 있음.
    - 이를 활용하여 드롭박스에는 친절하고 긴 텍스트를 사용하고 내부적으로는 더 간결한 텍스트를 사용하는 경우가 일반적.
#### 자기소개 입력받기
1. 자기소개는 다른 항목들보다 길 수 있으니 textarea 태그를 사용함.
    - 인풋 태그와 달리 여러줄의 텍스트를 작성할 수 있는 태그.
    - 이를 제외한 다른 부분은 인풋 태그와 동일함.
2. state에 저장하기
    ```jsx
    const Register = ()=> {
        const [bio, setBio] = useState("");

        const onChangeBio = (e) => {
            setBio(e.target.value);
        }

        return (
            <div>
                <div>
                    <input 
                        value={name}
                        onChange={onChangeName} 
                        placeholder={"이름"} />
                </div>
                <div>
                    <input 
                        value={birth}
                        type="date"
                        onChangeBirth={onChangeBirth} />
                </div>
                <div>
                    <select 
                        value={country}
                        onChangeCountry={onChangeCountry}>
                        <option></option>
                        <option value="kr">한국</option>
                        <option value="us">미국</option>
                        <option value="uk">영국</option>
                    </select>
                </div>

                <div>
                    <textarea 
                        value={bio}
                        onChangeBio={onChangeBio}/>
                </div>

            </div>
        )
    }
    ```