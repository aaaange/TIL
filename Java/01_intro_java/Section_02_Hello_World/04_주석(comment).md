# 주석(Comment)
소스 코드가 복잡하다면 소스 코드에 대한 이해르 돕기 위해 설명을 적어두기
## 실습 (CommentJava.java)
```java
public class CommentJava {
    psvm
}
```
- 오늘 실습 파일을 만들고 실행 코드를 작성해야하는데 다 치고 있기 어려우니 `psvm`이라고 치고 엔터를 누르면 자동으로 실행 코드가 작성된다.
    ```java
    public class CommentJava {
        public static void main(String[] args) {

        }
    }
    ```
    - 인텔리제이 단축키
- 출력 단축키도 존재 `sout`
    - `sout`을 치고 엔터 혹은 탭을 누르면 자동으로 출력 코드가 작성됨
    ```java
    public class CommentJava {
        public static void main(String[] args) {
            System.out.println();
        }
    }
    ```
- 한 줄 주석과 여러 줄 주석
```java
public class CommentJava {
    public static void main(String[] args) {
        System.out.println("Hello Java1"); // hello java1을 출력합니다.
        // System.out.println("Hello Java2"); // 한 줄 주석
        
        /* 여러 줄 주석
        System.out.println("Hello Java1"); // hello java1을 출력합니다.
        System.out.println("Hello Java1"); // hello java1을 출력합니다.
         */
    }
}
```
## 요약
- 한줄 주석은 `//`를 사용하여 작성한다.
- 여러 줄 주석은 `/* */`를 사용하여 작성한다.
- 메인 코드는 `psmv` 단축키로 자동 입력할 수 있다.
- 출력 코드는 `sout` 단축키로 자동 입력할 수 있다.
