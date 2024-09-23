function isPrime(num) { // 소수인지 판별하는 함수
    if (num < 2) return false; // 1은 소수가 아님
    
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    // 어떤 수 num을 2,3,... num^1/2로 나눴을 때 모두 나누어 떨어지지 않으면 num은 소수
    return true;
}


function solution(nums) {
    let answer = 0;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                const sum = nums[i] + nums[j] + nums[k];
                if (isPrime(sum)) answer++;
            }
        }
    }
    // 서로 다른 숫자 3개를 선택하여 더한 후 소수인지 판별, 소수면 answer 증가
    
    return answer;
}
/*
3중으로 for문을 사용했기 때문에 시간복잡도는 O(n^3) [3 <= n <= 50]
isPrime 함수의 시간 복잡도는 O(sqrt(m)) [3 <= m < 3000]
전체 시간복잡도는 O(n^3 * sqrt(m))
*/
