package operator;

public class OperatorAdd2 {
    public static void main(String[] args) {
        // 전위 증감 연산자
        int a = 1;
        int b = 0;

        b = ++a; // a의 값을 먼저 증가 시키고, 그 결과를 b에 저장함.
        System.out.println("a = " + a + ", b = " + b);

        // 후위 증감 연산자
        a = 1; // a 값을 다시 1로 저장
        b = 0; // b 값을 다시 0으로 저장

        b = a++; // a의 현자 값을 b에 먼저 대입 하고, 그 후 a 값을 증가 시킴
        System.out.println("a = " + a + ", b = " + b);
    }
}