package comd.ex;

public class ExchangeRateEx {
    public static void main(String[] args) {
        int dallor = 10;

        if (dallor < 0) {
            System.out.println("잘못된 금액입니다.");
        } else if (dallor == 0) {
            System.out.println("환전할 금액이 없습니다.");
        } else {
            System.out.println("환전 금액은 " + dallor*1300 + "원입니다.");
        }
    }
}
