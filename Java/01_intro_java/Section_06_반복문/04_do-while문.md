# 04 do-while문
while문과 비슷하지만 조건에 만족하지 않아도 한번은 코드를 실행함.
### DoWhile1
```java
package loop;

public class DoWhile1 {
    public static void main(String[] args) {
        int i = 10;
        while (i < 3) {
            System.out.println("현재 숫자는 : " + i);
            i++;
        }
    }
}
```
- 이러면 아무것도 출력이 안됨
### DoWhile2
```java
package loop;

public class DoWhile2 {
    public static void main(String[] args) {
        int i = 10;

        do {
            System.out.println("현재 숫자는 : " + i);
            i++;
        } while (i < 3);
    }
}
```
- do를 한번 실행하고, while문 조건식을 검증함. 참이면 do안에 있는 코드블럭을 실행함.
