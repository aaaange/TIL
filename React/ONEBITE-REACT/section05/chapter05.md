# 05 이벤트 처리기
## Event Handing
### Event
- 웹 내부에서 발생하는 사용자의 행동
    - ex. 버튼 클릭, 메세지 입력, 스크롤 등
### Handing
- 다루다, 취급하다, 처리하다
### Event Handing
- 이벤트가 발생했을 때 그것을 처리하는 것
    - ex. 버튼 클릭시 경고창 노출
## 실습
### 버튼에 Cilck 이벤트 넣기
```jsx
const Button = ({ text, color, children }) => {
  return (
    <button 
      onClick={()=> {
        console.log(text)
      }}
      style={{ color: color }}>
        {text} - {color.toUpperCase()}
        {children}
    </button>)
};
```
- 이렇게 버튼 태그 안에 이벤트 핸들러 onCilck을 작성할 경우 버튼을 클릭했을 때 콘솔로그에 해당 택스트가 출력됨.
```jsx
const onClickButton = () => {
    console.log(text);
  };
  return (
    <button 
      onClick={onClickButton}
```
- 이렇게 전달해도 괜찮음
- 이벤트 핸들러 사용시 주의 점
  - `onClick={onClickButton}` 
  - 함수 이름만 작성해야 하고, onClickButton()이렇게 괄호를 열어주면 안됨
  - 콜백함수를 전달하듯 **이름**만 전달해야 함.
## 이벤트 객체
- 리액트에서 발생하는 모든 이벤트는 이벤트 핸들러 함수를 호출할 때 호출된 이벤트 핸들러 함수의 매개변수인 **이벤트 객체**라는 것을 제공함.
```jsx
const onClickButton = (e) => {
  console.log(e);
};
```
- 위와 같이 이벤트 객체를 콘솔로그에 작성하도록 명령하면 **SynthethicBaseEvent**라는 것이 나옴

### Synthethic Base Event(합성 이벤트)
- 모든 웹 브라우저의 이벤트 객체를 하나로 통일한 형태
- 브라우저마다 Event 객체가 서로 다름
- 브라우저마다 규격도 다르고 동작방식도 다름
  - Cross Browsing Issue
    - 브라우저 별 스펙이 달라 발생하는 문제
- 합성 이벤트 
  - Cross Browsing Issue를 편리하게 해결해주는 것

