function solution(n) {
    // F(0), F(1)의 초기값 설정
    let result = [0, 1];
    
    // F(2) = (F(0) + F(1)) % 1234567 
    // F(3) = (F(1) + F(2)) % 1234567
    // 위의 식대로 result에 n번째까지 추가
    for(let i = 2; i <= n; i++){
        result[i] = (result[i-2] + result[i-1]) % 1234567;
    }
    
    return result[n]
}

/* 시간 복잡도
 - for(let i = 2; i <= n; i++) : n-1번까지 순회 => O(n-1)
    *  피보나치 수열을 계산하기 위해 n-1번 반복
 
 => 전체 시간 복잡도 : O(n)
*/