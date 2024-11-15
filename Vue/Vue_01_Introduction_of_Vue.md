# Vue_01 : Introduction_of_Vue

## Vue.js
사용자 인터페이스를 구축하기 위한 JavaScript 프레임 워크

[최신버전의 Vue3](https://vuejs.org/)

### Vue의 2가지 핵심 기능
1. 선언적 렌더링 (Declarative Rendering)
    - 표준 HTML을 확장하는 Vue “템플릿 구문”을 사용하여 JavaScript 상태(데이터)를 기반으로 화면에 출력될 HTML을 선언적으로 작성
2. 반응성 (Reactivity)
    - JavaScript 상태 변경을 추적하고, 변경사항이 발생하면 자동으로 DOM을 업데이트

### Vue 사용 방법
1. 'CDN' 방식 
2. 'NPM' 설치 방식
    -> 추후 학습 예정

## Component
재사용 가능한 코드 블록
### Component 특징
- UI를 독립적이고 재사용 가능한 일부분으로 분할하고 각 부분을 개별적으로 다룰 수 있음
    → 자연스럽게 애플리케이션은 중첩된 Component의 트리 형태로 구성됨

## Vue Application 생성
### Vue CDN 입력하기
[Vue docs](https://vuejs.org/guide/quick-start.html)

1. vue의 공식 문서에서 'docs' -> 'Guide' -> 'Quick Start' 에서 CND를 복사하기.
2. < body > 안에 해당 script를 넣기
    ```javascript
    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    ```

### Application instance
- CDN에서 Vue를 사용하는 경우 전역 Vue 객체를 불러오게 됨.
- 구조분해할당 문법으로 Vue 객체의 createApp 함수를 할당
    - 모든 Vue 애플리케이션은 createApp함수로 새 Application instance를 생성하는 것으로 시작됨
    ```html
    <!-- vue-isntance.html -->
    <script>
        const { createApp } = Vue

        const app = createApp({})
    </script>
    ```
- Root Component
    - createApp 함수에는 객체(컴포넌트)가 전달됨
    - 모든 App에는 다른 컴포넌트들을 하위 컴포넌트로 포함할 수 있는 Root(최상위) 컴포넌트가 필요(현재는 단일 컴포넌트)
- Mounting the App
    - HTML 요소에 Vue Application instance를 탑재(연결)
    - 각 앱 인스턴스에 대해 mount()는 한 번만 호출할 수 있음
    ```html
    <div id="app"></div>
    <script>
        const { createApp } = Vue

        const app = createApp({})
        app.mount('#app')
    </script>
    ```

## 반응형 상태
### ref()
반응형 상태(데이터)를 선언하는 함수
(Declaring Reactive State)
- ref로 감싸지 않으면 그것은 반응형이 아님
- 반응형을 가지는 참조 변수를 만드는 것 (ref === reactive reference)
### ref 함수
- .value 속성이 있는 ref 객체로 래핑(wrapping)하여 반환하는 함수
- ref로 선언된 변수의 값이 변경되면, 해당 값을 사용하는 템플릿에서 자동으로 업데이트
- 인자는 어떤 타입도 가능
- 템플릿의 참조에 접근하려면 setup함수에서 선언 및 반환 필요
- 편의상 템플릿에서 ref를 사용할 때는 .value를 작성할 필요 없음(automatically unwrapped)

## Vue 기본 구조
- createApp()에 전달되는 객체는 Vue 컴포넌트
- 컴포넌트 상태 setup() 함수 내에서 선언되어야 하며 객체를 반환해야 한다.
### 템플릿 렌더링
- 반환되는 객체의 속성은 템플릿에서 사용할 수 있음
- Mustache syntax(콧수염 구문)를 사용하여 메세지 값을 기반으로 동적 텍스트를 렌더링
    ```html
    <h1>{{ message }}</h1>
    ```
- 콘텐츠는 식별자나 경로에만 국한되지 않으면 유효한 JavaScript 표현식을 사용할 수 있음
    ```html
    <h1>{{ message.split('').reverse().join() }}</h1>
    ```
### Event Listeners in Vue
'v-on' directive를 사용하여 DOM 이벤트를 수신할 수 있음
- 함수 내에서 반응형 변수를 변경하여 구성 요소 상태를 업데이트