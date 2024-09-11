function solution(price, money, count) {
    let sum = 0; // 총 이용 금액을 저장할 변수
    let person = price; // 놀이기구의 1회 이용 가격
    
    // 1부터 count까지 반복하면서 N번째 이용 금액을 더함
    for (let i = 1; i <= count ; i++) {
        let curPrice = person * i; // N번째 이용 금액 (price * N)
        sum += curPrice; // 총 이용 금액에 더함
    }

    let result = sum - money; // 총 이용 금액에서 가지고 있는 금액을 뺌
    return result > 0 ? result : 0; // 부족하면 그 금액을 반환, 부족하지 않으면 0 반환
}

/**
 * 시간복잡도:
 * 반복문은 for 루프가 count번 실행
 * 루프 내에서 수행하는 계산은 기본적인 산술 연산으로 상수 시간(O(1))
 * 이 함수의 시간 복잡도는 O(count)
 */