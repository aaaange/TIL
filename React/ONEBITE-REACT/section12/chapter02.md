# 02 페이지 라우팅 1.소개
## 페이지 라우팅(Page Routing)
- 리액트에서 다양한 페이지를 제공할 수 있도록 하는 기능
- 경로에 따라 알맞은 페이지를 렌더링 하는 과정
- ex : /new -> new 페이지 렌더링
### 페이지 라우팅의 원리
#### Multi Page Application (MAP)
- 애초에 서버가 여러개의 페이지를 가지고 있음
- 많은 서비스가 사용하는 전통적인 방식
#### Sever side Rendering 서버 사이드 렌더링
- 브라우저가 서버에 요청을 하면 서버가 미리 완성되어 있는 페이지를 렌더링하여 반환해줌
#### MPA 와 SSR
- 서버가 여러개의 페이지를 가지고 있는 상태를 MPA라고 부르는 것
- 이 상태에서 완성되어 있는 페이지를 렌더링하는 것이 SSR
#### React는 MPA 방식을 따르지 않음
- 쾌적한 페이지 이동 제공이 어렵기 때문
### React의 SPA(Single Page Application)
- 페이지 이동이 매끄럽고 효율적임
- 다수의 사용자가 접속해도 크게 상관 없음
- 페이지를 하나만 가지고 있음.
- 자바스크립트 등을 vite가 번들링하여 클라이언트에게 하나의 페이지와 함께 전달
#### Client side Rendering 클라이언트 사이드 렌더링
- 클라이언트가 페이지와 번들로 페이지를 그리는 것이 CSR
- vite가 번들링하여 보낸 js 번들은 리액트 앱으로 볼 수 있음.
