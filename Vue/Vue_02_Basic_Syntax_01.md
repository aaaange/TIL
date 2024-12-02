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
