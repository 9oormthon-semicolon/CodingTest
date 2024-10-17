function solution(n) {
    let sum = 0;
    
    if (n % 2 === 1) { // n이 홀수인경우
        // 1부터 n까지 2씩 증가
        for (let i = 1; i <= n; i += 2) {
            sum += i;
        }
    } else {  // n이 짝수인 경우
        // 2부터 n까지 2씩 증가
        for (let i = 2; i <= n; i += 2) {
            // 각 짝수를 제곱한 값을 더해야 함 (ex - 2*2=4)
            sum += i * i;  
        }
    }
    return sum;
}
