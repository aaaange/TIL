## 문제
당신은 회원 등급에 따라 다른 쿠폰을 발급하는 프로그램을 작성해야 한다.
이 프로그램은 `int grade` 라는 변수를 사용하며, 회원 등급( `grade` )에 따라 다음의 쿠폰을 발급해야 한다.
- 1등급: 쿠폰 1000
- 2등급: 쿠폰 2000
- 3등급: 쿠폰 3000
위의 등급이 아닐 경우: 쿠폰 500
각쿠폰이할당된후에는 `"발급받은 쿠폰 " + 쿠폰값` 을출력해야한다. 2등급 사용자 출력 예)
```
발급받은 쿠폰 2000 
```
`if` 문을 사용해서 코드를 작성해보자.
```java
package comd;

public class Switch1 {
    public static void main(String[] args) {
        int grade = 2;

        int coupon;
        if (grade == 1) {
            coupon = 1000;
        } else if (grade == 2) {
            coupon = 2000;
        } else if (grade == 3) {
            coupon = 3000;
        } else {
            coupon = 500;
        }
        System.out.println("발급받은 쿠폰 " + coupon);
    }
}
```

## switch문
- `switch`문은 앞서 배운 if문을 조금 더 편리하게 사용할 수 있는 기능
- 참고로 `if`문은 비교 연산자를 사용할 수 있지만, `switch`문은 단순히 값이 같은 지만 비교할 수 있음.
```java
switch (조건식) { case value1:
// 조건식의 결과 값이 value1일 때 실행되는 코드
     break;
 case value2:
// 조건식의 결과 값이 value2일 때 실행되는 코드
     break;
 default:
// 조건식의 결과 값이 위의 어떤 값에도 해당하지 않을 때 실행되는 코드 
}
```

### switch2
```java
package comd;

public class Switch2 {
    public static void main(String[] args) {
        int grade = 2;

        int coupon;
        switch (grade) {
            case 1:
                coupon = 1000;
                break;
            case 2:
                coupon = 2000;
                break;
            case 3:
                coupon = 3000;
                break;
            default:
                coupon = 500;
        }
        System.out.println("발급 받은 쿠폰 " + coupon);
    }
}
```
## break문이 없다면?
### Switch3
```java
package comd;

public class Switch3 {
    public static void main(String[] args) {
        int grade = 2;

        int coupon;
        switch (grade) {
            case 1:
                coupon = 1000;
                break;
            case 2:
            case 3:
                coupon = 3000;
                break;
            default:
                coupon = 500;
        }
        System.out.println("발급 받은 쿠폰 " + coupon);
    }
}
```
- 만약 브레이크문이 없다면 `case 2` 아래에 있는 코드까지 실행해버림
### 결과
```bash
발급 받은 쿠폰 3000
```
- switch문은 대부분 break와 함께 사용

## if문 vs switch문
- if문 안에 switch문이 포함되어 있는 형식
- if문만으로 다 사용할 수 있음
- 그러나 특정 값에 따라 코드를 실행하는 경우 switch문을 사용할 경우 if문을 사용하는 경우보다 간결하게 작성할 수 있음.

## 자바 14 새로운 switch문
- 스위치문이 if문보다 덜 복잡한 것 같지만 그래도 깔끔하지 않은 것 같은 유저들의 불만으로부터 개발됨
### Switch4
```java
package comd;

public class Switch4 {
        public static void main(String[] args) { //grade 1:1000, 2:2000, 3:3000, 나머지: 500 int grade = 2;
            int grade = 2;
            
            int coupon = switch (grade) {
                case 1 -> 1000;
                case 2 -> 2000;
                case 3 -> 3000;
                default -> 500;
            };
            System.out.println("발급받은 쿠폰 " + coupon); }
    }
```
