function isPrime(num) { // 소수인지 판별하는 함수 시간복잡도 O(√N)
    if (num < 2) return false; // 1은 소수가 아님
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    // 어떤 수 num을 2,3,... num^1/2로 나눴을 때 모두 나누어 떨어지지 않으면 num은 소수
    return true;
}
function solution(n, k) {
    var answer = 0;
    let changed = n.toString(k).split("0"); // k진수로 변환 후 0으로 문자열 나눔
    for (const el of changed) {
        if (el && isPrime(parseInt(el))) answer++; // 0이 반복될 수도 있기 때문에 el 존재할 때만
    }
    return answer;
}

const n = 110011, k = 10;
console.log(solution(n, k));

/*
소수 판별 함수의 시간복잡도 O(√N)
메인 함수의 시간복잡도 변환된 문자열의 길이 logN만큼 시간복잡도 O(logN) 
전체 시간복잡도는 O(logN * √N)
*/