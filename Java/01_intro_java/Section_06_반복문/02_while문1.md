# while문 1
조건에 따라 코드를 반복해서 실행
```java
while (조건식) {
    // 코드
}
```
- 조건식이 참이면 코드 블럭을 실행하고, 거짓이면 while문을 벗어남
- 조건식이 참이면 코드 블럭을 실행하고, 이후에 코드 블럭이 끝나면 다시 조건식 검사로 돌아가 검사 (무한 반복)

### while문1_1
```java
package loop;

public class While1_2 {
    public static void main(String[] args) {
        int count = 0;

        while (count < 5) {
            count = count + 1;
            System.out.println("현재 숫자는: " + count);
        }
    }
}
```