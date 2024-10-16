const isPrime = (num) => {
    // 1 이하는 소수가 아님
    if (num <= 1) return false;
    // 2는 소수
    if (num === 2) return true;
    // 2 이상의 짝수는 소수가 아님
    if (num % 2 === 0) return false;
    // 나누어 떨어지면 소수가 아님 (2 이후 홀수들만 검사)
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    // 위 조건에 걸리지 않았다면 소수임
    return true;
}

function solution(n, k) {
    // n을 k진수로 변환하고, '0'을 기준으로 분리, 빈문자열 제거
    let binary = n.toString(k).split("0").filter(num => num !== "")
    let cnt = 0;
    
    // binary를 순회하면서 소수이면 카운트 증가
    for (let num of binary) {
        if (isPrime(Number(num))) cnt++
    }

    return cnt;
}

/* 시간복잡도 
 - n.toString(k).split("0").filter(num => num !== "")[문자열 길이에 비례] : O(logk(n))

 - for (let num of binary) [binary 순회] : O(logk(n))
    - isPrime [소수 판별 함수] : O(sqrt(n))

 => 전체 시간 복잡도 : O(logk(n) * sqrt(n))
*/
