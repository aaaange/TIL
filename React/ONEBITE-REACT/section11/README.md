# Context
목차
1. [Context란](#01-context란)

# 01 Context란
## React Context
- 컴포넌트 간의 데이터를 전달하는 또 다른 방법
- 기존의 Props가 가지고 있던 단점을 해결할 수 있음
### Props의 단점 Porps Drilling
- 부모에서 자식으로만 데이터를 전달할 수 있음.
- 전달해야할 계층이 깊어질수록 거쳐가야 할 단계가 많아짐
### Context로 Props Drilling 해결
#### Context : 데이터 보관소 (객체)
- App 컴포넌트에 있던 요소들인 todos, onCreate, onUpdate, onDelete .. 등을 프롭스로 전달하는게 아닌 Context에 저장
- 자식 컴포넌트에서 중간 컴포넌트들을 거치지 않고 바로 Context를 통해 필요한 데이터를 불러올 수 있음
- Context는 여러 개 만드는 것도 가능
## 사전 준비
- section10에서 작성한 todolist 프로젝트를 그대로 사용할 것이기 때문에 section10에서 node_modules를 제외한 나머지를 복사하여 section11로 가져오기
- section11로 터미널을 이동한 후 `npm i`를 입력해 사용할 것들을 설치
- `npm run dev`로 서버 켜고 잘 작동되는지 확인까지 완료하기
