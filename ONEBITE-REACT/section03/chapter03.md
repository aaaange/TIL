# 프로젝트(Project)
## 패키지
- Node.js에서 사용하는 프로그램 단위
```
npm init
```
- 상세정보를 설정하거나 기본 값으로 엔터를 쳐서 넘어가 패키지를 만들어준다.
```
{
  "name": "section03",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": ""
}
```
## index.js
파일을 만들어 console.log("안녕 node.js") 이라고 작성 한 후 브라우저로 확인하지 않고 터미널에서 바로 확인할 수 있음
```
node index.js
```
만약 src폴더 안에 index.js를 열고 싶다면 경로 설정하여 명령
```
node src/index.js
```
## 파일 관리
파일이 많아지면 관리하기 힘들어짐.
- package.json 안에 script에 다음과 같이 작성
    ```"start": "node src/index.js"```
    - 그럼 터미널에 경로를 작성하는 게 아니라 작성한 명령어를 입력하면 됨
    ```
    npm run start
    ```