function solution(nums) {
    let count = 0;
    let sums = [];

    // 세 수의 합을 배열에 저장
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];
                sums.push(sum);
            }
        }
    }

    // 소수 판별 함수
    function isPrime(num) {
        if (num < 2) return false;  // 2보다 작은 숫자는 소수 X
        for (let i = 2; i * i <= num; i++) {
            if (num % i === 0) return false;  // 나누어 떨어지면 소수 X
        }
        return true;  // 소수
    }

    // 배열에서 소수인지 확인
    sums.forEach(sum => {
        if (isPrime(sum)) {
            count++;
        }
    });

    return count;
}

/**
 * 시간복잡도 :
 * 세 숫자를 선택하는 과정: O(n^3)
 *  숫자에 대해 소수 판별: O(√m)
 * 최종 O(n^3 * √m)
 */
