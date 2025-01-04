# 03 인터페이스(interface)
## interface로 object 정의하기
```js
let user:object;

user = {
    name: 'xx',
    age: 30
}

console.log(user.name);
```
- 이렇게 작성할 경우 object에는 name이 없다고 오류가 뜸
- 이렇게 프로퍼티를 정해서 객체를 표현하고자 할 때는 interface를 사용함

```js
interface User {
    name: string;
    age: number;
}

let user : User = {
    name: 'xx',
    age: 30
}

console.log(user.name);
```
- interface를 사용하면 의도했던 대로 사용할 수 있음
```js
interface User {
    name: string;
    age: number;
    gender: string;
}

let user : User = {
    name: 'xx',
    age: 30
}

user.age = 10;
user.gender = "male";

console.log(user.name);
```
- 이렇게 작성하면 age는 정상적으로 수정이 되는 반면, gender는 원래 작성되어야 하는데 뒤늦게 추가 되어 오류가 발생함.
- 이럴 경우 gender를 옵션으로 설정하여 작성해도 되고, 안해도 되게 설정할 수 있음
```js
interface User {
    name: string;
    age: number;
    gender?: string;
}
```
- 이렇게 변수명 뒤에 ?(물음표)를 붙이면 옵션이 됨.
```js
interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear : number;
}

let user : User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
}

user.age = 10;
user.gender = "male";
user.birthYear = 1990;

console.log(user.name);
```
- 읽기 전용으로 설정할 수 있음
- 읽기 전용으로 설정한 변수가 수정되려고 한다면 오류가 발생
### 학년별로 성적을 저장하고 싶을 경우
```js
interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear : number;
    [grade:number]: string;
}

let user : User = {
    name: 'xx',
    age: 30,
    birthYear: 2000,
    1 : 'A',
    2 : 'B'
}
```
- grade는 변수명으로 원하는대로 설정할 수 있음
    - 숫자를 이름으로 string 값을 갖는 것
- 성적을 string 타입으로 받기는 범위가 너무 넓기에 타입을 설정해 줄 수 있음
```js
type Score = 'A' | 'B' | 'C' | 'F';

interface User {
    name: string;
    age: number;
    gender?: string;
    readonly birthYear : number;
    [grade:number]: Score;
}
```
- 이제 성적은 위에 선언해놓은 값 외에는 입력할 수 없게 됨.
## interface로 함수 정의하기
- interface