function solution(price, money, count) {
    let total = 0; // 요금
    for (let x = 1; x <= count; x++) { // count번 이용
        total += price * x; // x번 이용하면 x배 받음
    }
    
    return total > money ? total - money : 0; // 모자라지 않으면 0
}

/*
시간복잡도 O(n)
*/