# 05 break, continue
- 반복문에서 사용할 수 있는 키워드
- `break` : 반복문을 즉시 종료하고 나감
- `continue` : 반복문의 나머지 부분을 건너뛰고 다음 반복을 진행
## break
```java
while (조건식) {
    코드1;
    break; // 즉시 while문 종료로 이동 
    코드2;
}
// while문 종료
```
- break를 만나면 코드2가 실행되지 않고 while문이 종료
## continue
```java
while (조건식) {
    코드1;
    continue; // 즉시 조건식으로 이동
    코드2;
}
```
- continue를 만나면 코드2가 실행되지 않고 다시 조건식으로 이동함.
- 조건식이 참이면 while문을 실행
