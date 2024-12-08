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