# 03 if문 3 - if문과 else if문
- if문에 else if문을 함께 사용하는 경우와 따로 사용하는 경우
## 예시
```java
// 예시1. if-else 사용: 서로 연관된 조건이어서, 하나로 묶을 때 
if (condition1) {
    // 작업1 수행
} else if (condition2) {
    // 작업2 수행 
}
// 예시2. if 각각 사용: 독립 조건일 때 
if (condition1) {
    // 작업1 수행 
}
if (condition2) { 
    // 작업2 수행
}
```
- 예시 1의 경우 작업 1과 2가 둘 중 하나만 수행
- 예시 2의 경우 조건만 맞다면 둘 다 수행될 수 있음
## 문제
온라인 쇼핑몰의 할인 시스템을 개발해야 한다. 한 사용자가 어떤 상품을 구매할 때, 다양한 할인 조건에 따라 총 할인 금액이 달라질 수 있다.
각각의 할인 조건은 다음과 같다.
- 아이템 가격이 10000원 이상일 때, 1000원 할인 
- 나이가 10살 이하일 때 1000원 할인
이 할인 시스템의 핵심은 **한 사용자가 동시에 여러 할인을 받을 수 있다는 점**이다.
예를 들어, 10000원짜리 아이템을 구매할 때 1000원 할인을 받고, 동시에 나이가 10살 이하이면 추가로 1000원 더 할인을 받는다. 그래서 총 2000원 까지 할인을 받을 수 있다.
```java
package comd;

public class If5 {
    public static void main(String[] args) {
        int price = 10000;
        int age = 10;
        int discount = 0;

        if (price >= 10000) {
            discount = discount + 1000;
            System.out.println("10000원 이상 구매, 1000원 할인");
        }

        if (age <= 10) {
            discount = discount + 1000;
            System.out.println("어린이 1000원 할인");
        }
        System.out.println("총 할인 금액: " + discount + "원");
    }
}
```
- 모든 할인 적용
- 만약 여기서 else if를 사용한다면 두번째 할인이 적용되지 않음
    ```java
    package comd;

    public class If5 {
        public static void main(String[] args) {
            int price = 10000;
            int age = 10;
            int discount = 0;

            if (price >= 10000) {
                discount = discount + 1000;
                System.out.println("10000원 이상 구매, 1000원 할인");
            } else if (age <= 10) {
                discount = discount + 1000;
                System.out.println("어린이 1000원 할인");
            }
            System.out.println("총 할인 금액: " + discount + "원");
        }
    }
    ```
## if문 안에 여러 문장 작성하기
- `{ }`를 사용하여 안에 여러 문장을 작성하면 됨
```java
if (age >= 20) {
    ystem.out.println("성인");
    ystem.out.println("20세 이상");
}
```
- 일반적으로 if문 안에 명령무이 1개만 존재할 경우에도 중괄호 사용
    - **가독성** : 조건의 범위가 명확히 표시되어 코드의 흐름 이해 쉬움
    - **유지보수성** : 나중에 코드 수정 시 오류 덜 발생 시킴