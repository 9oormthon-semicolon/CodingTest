function solution(n, k) {
    // n을 k진수로 변환하고 '0'으로 split
    const numbers = n.toString(k).split('0');
    
    // 소수 개수 카운트
    return numbers.reduce((count, num) => {
        return count + (isPrime(Number(num)) ? 1 : 0);
    }, 0);
}

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/*
n.toString(k)를 사용하여 n을 k진수 문자열로 변환
split('0')을 사용하여 변환된 문자열을 '0'을 기준으로 나누고 isPrime 함수를 사용하여 각 숫자가 소수인지 확인
2부터 숫자의 제곱근까지 반복하며 나누어 떨어지는지 확인 한 번이라도 나누어 떨어지면 소수 X
reduce 함수를 사용하여 소수의 개수를 카운트

시간복잡도 - O(n) 
*/
