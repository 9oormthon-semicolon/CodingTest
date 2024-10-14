function solution(price) {
    let discount = 0;
    
    // 할인율 결정
    if (price >= 500000) {
        discount = 0.20; // 20% 할인
    } else if (price >= 300000) {
        discount = 0.10; // 10% 할인
    } else if (price >= 100000) {
        discount = 0.05; // 5% 할인
    }
    
    // 할인된 가격 계산
    const finalPrice = price * (1 - discount);
    
    // 소수점 이하 버림 후 정수로 반환
    return Math.floor(finalPrice);
}

console.log(solution(150000)); // 142500
console.log(solution(580000)); // 464000
