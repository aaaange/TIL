# 01 if문 1 - if, else

## 조건문 시작
특정 조건에 따라서 다른 코드를 실행하고 싶음

## if문
- if문은 특정 조건이 참인지 확인하고, 그 조건이 참(ture)인 경우 특정 코드 블록을 실행
```java
if (condition) {
// 조건이 참일 때 실행되는 코드
}
```
- 코드 블록: `{}` (중괄호) 사이에 있는 코드
### if1
```java
package comd;

public class if1 {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("성인입니다.");
        }

        if (age < 18) {
            System.out.println("미성년자입니다.");
        }
    }
}
```
## else문
- else문은 if문이 만족하는 조건이 없을 때 실행하는 코드를 제공
```java
if (condition) {
// 조건이 참일 때 실행되는 코드
} else {
// 만족하는 조건이 없을 때 실행되는 코드
}
```
### if2
```java
package comd;

public class If2 {
    public static void main(String[] args) {
        int age = 20;

        if (age >= 18) {
            System.out.println("성인입니다.");
        } else {
            System.out.println("미성년자입니다.");
        }
    }
}
```
