function solution(n) {
    let count = 0;
    
    for (let a = 1; a * a <= n; a++) {
        if (n % a === 0) {  // a가 n의 약수인지 확인
            const b = n / a;  // b를 계산
            if (a === b) {
                count += 1;  // a와 b가 같으면 1 쌍
            } else {
                count += 2;  // a와 b가 다르면 2 쌍
            }
        }
    }

    return count;
}
