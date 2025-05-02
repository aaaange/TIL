# while문 2
## 문제 1
숫자를 하나씩 더하는 코드를 작성해보기
### while2_1
```java
package loop;

public class While2_1 {
    public static void main(String[] args) {
        int sum = 0;
        sum = sum + 1;
        System.out.println("i=" +  1 + " sum=" + sum);

        sum = sum + 2;
        System.out.println("i=" +  2 + " sum=" + sum);

        sum = sum + 3;
        System.out.println("i=" +  3 + " sum=" + sum);
    }
}

```
### 출력 결과
```java
i=1 sum=1
i=2 sum=3
i=3 sum=6
```
- 코드의 정답은 맞지만, 이 코드는 변경에 유연하지 않다는 단점이 있음
- 다음과 같이 요구사항이 변경되었다면?
## 문제 2
10부터 하나씩 증가하는 수를 3번 더해라 (10~12 더하기)
- 이렇게 되면 10 + 11 + 12를 계산해야 하는데 코드를 굉장히 많이 변경해야 함.
- 이럴 때 변수 i를 사용하면 유용
i부터 하나씩 증가하는 수를 3번 더해라 (i ~ i+2 더하기)
### while2_2
```java
package loop;

public class While2_2 {
    public static void main(String[] args) {
        int sum = 0;
        int i = 1;

        sum = sum + i;
        System.out.println("i=" +  i + " sum=" + sum);
        i++;

        sum = sum + i;
        System.out.println("i=" +  i + " sum=" + sum);
        i++;

        sum = sum + i;
        System.out.println("i=" +  i + " sum=" + sum);
    }
}
```
```java
package loop;

public class While2_2 {
    public static void main(String[] args) {
        int sum = 0;
        int i = 10;

        sum = sum + i;
        System.out.println("i=" +  i + " sum=" + sum);
        i++;

        sum = sum + i;
        System.out.println("i=" +  i + " sum=" + sum);
        i++;

        sum = sum + i;
        System.out.println("i=" +  i + " sum=" + sum);
    }
}
```
- 좋은 코드인지 아닌지는 변경 사항이 발생했을 때 알 수 있음.
## 문제 3
i부터 하나씩 증가하는 수를 endNum(마지막 수)까지 더해라 (i ~ endNum까지 더해라)
### while2_3
```java
package loop;

public class While2_3 {
    public static void main(String[] args) {
        int sum = 0;
        int i = 1;
        int endNum = 3;

        while (i <= endNum) {
            sum = sum + i;
            System.out.println("i=" +  i + " sum=" + sum);
            i++;
        }
    }
}
```
- 반복 횟수 정하기
    - i가 endNum이 될때까지 반복해서 코드를 실행
### 출력 결과
```java
i=1 sum=1
i=2 sum=3
i=3 sum=6
```
