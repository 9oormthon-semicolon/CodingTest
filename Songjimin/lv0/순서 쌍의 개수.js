function solution(n) {
    let count = 0;
    
    // 1부터 sqrt(n)제곱근까지 반복
    for (let a = 1; a * a <= n; a++) {
		    // a가 n의 약수인지 확인함
        if (n % a === 0) {
            count++; // a를 포함하는 쌍
            
            if (a !== n / a) {
                count++; // b를 포함하는 쌍
            }
        }
    }
    
    return count;
}

// 예시 테스트
console.log(solution(20)); // 6
console.log(solution(100)); // 9
