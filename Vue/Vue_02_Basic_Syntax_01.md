## Directive
'v-'접두사가 있는 특수 속성
### Directive 특징
- Directive의 속성 값은 단일 JavaScript 표현식이어야 함 (v-for, v-on 제외)
- 표현식 값이 변경될 때 DOM에 반응적으로 업데이트를 적용
### Directive - “Arguments”

- 일부 directive는 directive 뒤에 콜론(”:”)으로 표시되는 인자를 사용할 수 있음
- 아래 예시의 href는 HTML `<a>`요소의 href 속성 값을 myUrl 값에 바인딩하도록 하는 v-bind의 인자
    
    `<a v-bind:href=”myUrl”>Link</a>`
    
    - 기존에 가지고 있던 속성 값(href)를 바인딩
- 아래 예시의 click은 이벤트 수신할 이벤트 이름을 작성하는 v-on의 인자
    
    `<button v-on:click="doSomething">Button</button>` 
    
- v-on은 인자로 이벤트 이름을 받음 `<button v-on:click="doSomething">button</button>`
### Directive - “Modifiers”

- “.(dot)”로 표시되는 특수 접미사로, directive가 특별한 방식으로 바인딩되어야 함을 나타냄
- 아래 예시의 .prevent는 발생한 이벤트에서 event.preventDefault()를 호출하도록 v-on에 지시하는 modifier
    - .prevent → prevent Default() : 이벤트 동작 취소
    - 당연히 아무런 이름이나 쓰면 안되고 정해진 이름이 있음. 공식 문서를 확인해보기.

```html
<form v-on:submit.prevent="onSubmit">
      <input type="submit">
    </form>
```
## Dynamically data binding
### v-bind
하나 이상의 속성 또는 컴포넌트 데이터를 표현식에 동적으로 바인딩
### v-bind 사용처
1. Attribute Bindings
2. Class and Style Bindings
### Attribute Bindings (속성 바인딩)

- HTML의 속성 값을 Vue의 상태 속성 값과 동기화 되도록 함
    
    ```jsx
    <img :src="imageSrc">
    <a :href="myUrl">Move to url</a>
    ```
    
- v-bind shorthand (약어)
    - ‘:’ (colon)
### Dynamic attribute name (동적 인자 이름)

- 대괄호([])로 감싸서 directive argument에 JavaScipt 표현식을 사용할 수 있음
- 표현식에 따라 동적으로 평가된 값이 최종 argument 값으로 사용됨

`<button :[key]=”myValue”></button>`

→ 대괄호 안에 작성하는 이름은 반드시 소문자로만 구성 가능 (브라우저가 속성 이름을 소문자로 강제 변환하기 때문) ⭐️

## Class and Style Bindings
### Class and Style Bindings (클래스와 스타일 바인딩)

- class와 style은 모두 HTML 속성이므로 다른 속성과 마찬가지로 v-bind를 사용하여 동적으로 문자열 값을 할당할 수 있음
- Vue는 class 및 style 속성 값을 v-bind로 사용할 때 객체 또는 배열을 활용하여 작성할 수 있도록 함
    
    → 단순히 문자열 연결을 사용하여 이러한 값을 생성하는 것은 번거롭고 오류가 발생하기가 쉽기 때문
### Class and Style bindings가 가능한 경우

1. Binding HTML Classes
    
    1.1 Binding to Objects
    
    1.2 Binding to Arrays
    
2. Binding Inline Styles
    
    2.1 Binding to Objects
    
    2.2 Binding to Arrays
### 1.1 Binding HTML Classes - Binding to Objects

- 객체를 :class에 전달하여 클래스를 동적으로 전환할 수 있음
- 예시 1
    - isActive의 Boolean 값에 의해 active 클래스의 존재가 결정됨
        ```html
        <!-- bindign-html-classes.html -->
        const isActive = ref(false)
        ```
        ```html
        <div :class="{ active: isActive }">Text</div>
        ```
- 객체에 더 많은 필드를 포함하여 여러 클래스를 전환할 수 있음
- 예시 2
    - :class direcctive를 일반 클래스 속성과 함께 사용 가능

        ```jsx
        const isActive = ref(false)
        const hasInfo = ref(true)
        ```

        ```html
        <div class="static" :class="{ active: isActive, 'text-primary':hasInfo}">Text</div>
        ```
- 반드시 inline 방식으로 작성하지 않아도 됨
- 반응형 변수를 활용해 객체를 한번에 작성하는 방법
    ```jsx
    const isActive = ref(false)
    const hasInfo = ref(ture)
    // ref는 반응 객체의 속성으로 엑세스되거나 변경될 때 자동으로 unwrap
    const classObj = ref({
        active: isActive,
        'text-primary': hasInfo
    })
    ```

    ```jsx
    <div class="static" :class="classObj">Text</div>
    ```
### 1.2 Binding HTML Classes - Binding to Arrays
- :class를 배열에 바인딩하여 클래스 목록을 적용할 수 있음
- 예 1
    ```js
    const isActiveClass = ref("active")
    const infoClass = ref("text-primary")
    ```
    ```html
    <div class="[isActiveClass, infoClass]">Text</div>
    ```
- 배열 구문 내에서 객체 구문을 사용하는 경우
- 예시 2
    ```html
    <div class="[{active: isActive}, infoClass]">Text</div>
    ```
### 2.1 Binding Inline Styles - Binding to Objects
- :style은 JavaScript 객체 값에 대한 바인딩을 지원 (HTML style 속성에 해당)
- 예시 1
    ```js
    const activeColor = ref('crimson')
    const fontSize = ref(50)
    ```
    ```html
    <div :style="{color: activeColor, fontSize: fontSize + 'px'}">Text</div>
    ```
- 실제 CSS에서 사용하는 것처럼 :style은 kebab-cased 키 문자열도 지원 (단, camelCase 작성을 권장)
- 예시 2
    ```html
    <div :style="{ 'fontSize': fontSize + 'px'}">Text</div>
    ```
- 반드시 inline 방식으로 작성하지 않아도 됨
- 반응형 변수를 활용해 객체를 한번에 작성하는 방법
- 예시 3
    ```js
    const styleObj = ref({
        color: activeColor,
        fontSize: fontSize.value + 'px'
    })
    ```
    ```html
    <div :style="styleObj">Text</div>
    ```
    - .value 잊지 않고 넣어주기⭐️
### 2.2 Binding Inline Styles - Binding to Arrays
- 여러 스타일 객체를 배열에 작성해서 :style을 바인딩할 수 있음
- 작성한 객체는 병합되어 동일한 요소에 적용
- 예시 3
    ```js
    const styleObj2 = ref({
        color: 'blue',
        border: '1px solid black'
    })
    ```
    ```html
    <div :style="[styleObj, styleObj2]">Text</div>
    ```
## Event Handling
### v-on
#### v-on
- DOM 요소에 이벤트 리스너를 연결 및 수신
#### v-on 구성
```
v-on:submit.prevent="onSubmit"
```
- `v-on` : Name
- `submit` : Argument
- `prevent` : Modifiers
- `onSubmit` : Value
##### `v-on:event=”handler”` 

- handler 종류
    1. iniline handlers : 이벤트가 트리거가 될 때 실행 될 JavaScript 코드
    2. Method handlers : 컴포넌트에 정의된 메서드 이름
- v-on shorthand (약어)
    - ‘@’
        
        `@event=”handler”`
### 1. Inline handlers
- Inline handlers는 주로 간단한 상황에 사용
```js
const count = ref(0)
```
```html
<button> @click="count++">Add 1</button>
<p>Count: {{ count }}</p>
```
- 간단한 상황에서 사용
- 메서드로 만들어서 사용하는 것이 유지보수가 좋음
#### Inline Handlers에서의 메서드 호출
- 메서드 이름에 직접 바인딩하는 대신 Inline Handlers에서 메서드를 호출할 수도 있음
- 이렇게 하면 기본 이벤트 대신 사용자 지정 인자를 전달할 수 있음
```js
const greeting = function (message) {
    console.log(message)
}
```
```html
<button @click = 'greeting("hello")'>Say hello</button>
<button @click = 'greeting("bye")'>Say bye</button>
```
- 인라인 핸들러를 메서드 핸들러로 만들기
#### Inline Handlers에서의 event 인자에 접근하기
- Inline Handlers에서 원래 DOM 이벤트에 접근하기
- $event 변수를 사용하여 메서드에 전달
```js
const warning = function (message, event) {
    console.log(message)
    console.log(event)
}
```
```html
<button @click="warning('경고입니다.', $event)">Submit</button>
```
- `$evnet` 달러 접두어 : 글로벌 변수라는 뜻. 우리가 만든 변수가 아니라 내장된 변수
    - 일반 변수들과 구분을 하기 위함
    - 클릭을 했을 때 발생하는 이벤트를 뜻함. 위치는 ‘경고입니다’ 앞에 쓰든 뒤에 쓰든 상관 x

### 2. Method Handlers
- Inline handlers로는 불가능한 대부분의 상황에서 사용
```js
const name = ref('Alice')
const myFunc = function(event) {
    console.log(event)
    console.log(event.currentTarget)
    console.log(`Hello ${name.value}`)
} 
```
```html
<button @click="myFunc">Hello</button>
```
- Method Handlers는 이를 트리거하는 기본 DOM Event 객체를 자동으로 수신
```js
const name = ref('Alice')
const myFunc = function(event) {
    console.log(event)
    console.log(event.currentTarget)
    console.log(`Hello ${name.value}`)
} 
```
- 인자를 지정해주지 않는다면, 이벤트 객체를 자동으로 수신
## Modifiers
### Evnet Modifiers
- Event Modifiers를 활용해 event.preventDefault()와 같은 구문을 메서드에 작성하지 않도록 함
- stop, prevent, self 등 다양한 modifiers를 제공
    - → 메서드는 DOM 이벤트에 대한 처리보다는 데이터에 관한 논리를 작성하는 것에 집중할 것
    - `<form @submit.prevent=”onSubmit”>…</form>` 
    - `<a @click.stop.prevent=”onLink”>…</a>` 
    - Modifiers는 chained 되게끔 작성할 수 있으며 이때는 작성된 순서로 실행되기 때문에 작성 순서에 유의
### Key Modifiers
- 키보드 이벤트를 수신할 때 특정 키에 관한 별도 modifiers를 사용할 수 있음
- 예시
    - key가 enter 일 때만 onSubmit 이벤트를 호출하기
    - `<input @keyup.enter=”onSubmit”>` 
- → input에서 enter를 눌렀을 때만 호출이 됨
### v-on 종합
[Vue.js](https://vuejs.org/guide/essentials/event-handling)
## Form Input Bindings
입력값을 동적으로 추적할 수 있어야 백엔드에서 반응형 데이터를 동기화할 수 있음
### Form Input Bindings (폼 입력 바인딩)
- form을 처리할 때 사용자가 input에 입력하는 값을 실시간으로 JavaScript 상태에 동기화 해야 하는 경우 (양방향 바인딩)
- 양방향 바인딩 방법
    1. v-bind와 v-on을 함께 사용
    2. v-model 사용
- 두가지 다 같은 방식인데 표현이 조금 다름
## v-bind with v-on
### 1. v-bind와 v-on을 함께 사용
1. v-bind를 사용하여 input 요소의 value 속성 값을 입력 값으로 사용
2. v-on을 사용하여 input 이벤트가 발생 할 때마다 input 요소의 value 값을 별도 반응형 변수에 저장하는 핸들러를 호출
```js
const inputText1 = ref('')
const onInput = function (event) {
    inputText1.value = event.currentTarget.value
}
```
```html
<p>{{ inputText1 }}</p>
<input :value="inputText1" @input="onInput">
```
- v-bind, v-on 둘 다 사용
- `@input=”onInput”` 
- 인풋할때마다 onlnput함수를 발동시켜서 이벤트가 활성화된 현재 타겟의 값을 inputText1에 할당
## v-model
### v-model
- form input 요소 또는 컴포넌트에서 양방향 바인딩을 만듦
### 2. v-model 사용
- 사용자 입력 데이터와 반응형 변수를 실시간 동기화
```js
const inputText2 = ref('')
```
```html
<p>{{ inputText2 }}</p>
<input v-model="inputText2">
```
- 빈 문자열을 준비하고, v-model에 그 빈 문자열을 속성 값에 넣어주기.
- 아까와 동일하게 동작함을 볼 수 있음 — 양방향 바인딩
- → IME가 필요한 언어(한국어, 중국어, 일본어 등)의 경우 v-model이 제대로 업데이트되지 않음
- → 해당 언어에 대해 올바르게 응답하려면 v-bind와 v-on 방법을 사용해야 함
- 그러나 동작의 원리가 살짝 달라서 완성의 속도가 한 박자 느림
    - 다음 글자가 시작할 때 단어가 완성됨
    - 왜냐면 영어를 기반으로 되어있기에 자모음이 뭉쳐져 완성되는 문법의 경우 실시간으로 작성되지 않는 오류가 있음
## v-model 활용
### v-model과 다양한 입력(input) 양식
- v-model은 단순 Text input 뿐만 아니라 Checkbox, Radio, Select 등 다양한 타입의 사용자 입력 방식과 함께 사용 가능
### Checkbox 활용
1. 단일 체크 박스와 boolean 값 활용
```js
const checked = ref(false)
```
```html
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```
2. 여러 체크박스와 배열 활용
    - 해당 배열에는 현재 선택된 체크박스의 값이 포함됨
    - 빈 배열을 하나 만들어주기
### Select 활용
- select에서 v-model 표현식의 초기 값이 어떤 option과도 일치하지 않는 경우 select 요소는 “선택되지 않는(unselected)” 상태로 렌더링 됨