// 소수를 판별하는 함수
function isPrime(number) {
    if (number < 2) return false; // 2보다 작은 수는 소수가 아님
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false; // 나누어 떨어지면 소수가 아님
        }
    }
    return true; // 소수일 경우 true 반환
}

function solution(nums) {
    let count = 0; // 소수가 되는 경우의 개수를 셀 변수

    // 3개의 숫자를 고르는 모든 경우의 수를 확인
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k]; // 3개의 숫자를 더함
                if (isPrime(sum)) {
                    count++; // 합이 소수일 경우 카운트를 증가
                }
            }
        }
    }

    return count; // 결과 반환
}

// 입출력 예시
console.log(solution([1, 2, 3, 4]));  // 출력: 1
console.log(solution([1, 2, 7, 6, 4]));  // 출력: 4
