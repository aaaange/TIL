# Computed Properties
계산된 속성
## Computed
### computed()
- “계산된 속성”을 정의하는 함수
- → 미리 계산된 속성을 사용하여 템플릿에서 표현식을 단순하게 하고 불필요한 반복 연산을 줄임
- 계속해서 계산하지 않겠다. 불필요한 반복적인 연산을 최소화하겠다.
- 처음 한 번 계산하고 변동이 없다면 계속 사용할 것.
### computed가 필요한 경우
- 할 일이 남았는지 여부에 따라 다른 메세지를 출력하기
```js
const todos = ref([
    { text: 'todo1' },
    { text: 'todo2' },
    { text: 'todo3' }
])
```
```html
<h2>남은 할 일</h2>
<p>{{ todos.length > 0 ? '미완료' : '모두 완료' }}</p>
```
- → 템플릿이 복잡해지며 todos에 따라 계산을 수행하게 됨
- → 만약 이 계산을 템플릿에 여러 번 사용하는 경우에는 반복이 발생함
- 그렇다면 현재 todos에 대한 계산을 미리 해두고 변동이 없다면 굳이 템플릿을 사용할 때마다 계산할 필요가 없지 않은가?
```js
const { createApp, ref, computed } = Vue
```
```js
const restOfTodos = computed(() => { // computed() 값은 객체
    return todos.value.length > 0 ? '미완료' : '모두 완료'
})
```
```html
<h2>남은 할 일</h2>
<p>{{ restOfTodos }}</p>
```
- computed 적용 후
- 반응형 데이터를 포함하는 복잡한 로직의 경우 computed를 활용하여 미리 값을 계산하여 계산된 값을 사용
### computed 특징
- 반환되는 값은 computed ref이며 일반 refs와 유사하게 계산된 결과를 .value로 참조할 수 있음 (템플릿에서는 .value 생략 가능)
- computed 속성은 의존된 반응형 데이터를 자동으로 추적
    - 위와 같은 예시에서는 todos가 의존된 반응형 데이터. todos를 추적 중
- 의존하는 데이터가 변경될 때만 재평가
    - restOfTodos의 계산은 todos에 의존하고 있음
    - 따라서 todos가 변경될 때만 restOfTodos가 업데이트 됨
## Computed vs. Methods
### computed와 동일한 로직을 처리할 수 있는 method
- computed 속성 대신 method로도 동일한 기능을 정의할 수 있음
### computed와 method 차이
- computed 속성은 의존된 반응형 데이터를 기반으로 캐시(cached)됨
- 의존하는 데이터가 변경된 경우에만 재평가됨
- 즉, 의존된 반응형 데이터가 변경되지 않는 한 이미 계산된 결과에 대한 여러 참조는 다시 평가할 필요 없이 이전에 계산된 결과를 즉시 반환
- → 반면, method 호출은 다시 렌더링이 발생할 때마다 항상 함수를 실행
- method는 호출을 할 때마다 함수를 실행할 수 밖에 없음