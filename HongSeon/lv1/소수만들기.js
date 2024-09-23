// 소수란? 1과 자신 이외의 어떤 수로도 나누어지지 않는 수
// n의 약수는 무조건 1 ~ sqrt(n)사이에 존재한다 (최적화에 이용)
const prime = (num) => {
    if(num < 2) return false
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}

function solution(nums) {
    let count = 0
    // [Lv1 삼총사 문제 참조]
    // 최적화를 위해서는 i는 굳이 배열 끝까지 순회할 이유가 없음
    // 마지막 2개의 요소를 남겨줘야 i가 증가해도 j,k가 배열길이 범위안에 있음
    // 마찬가지로 j는 마지막 1개의 요소를 남기고 순회하면 됨
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                // 합한 숫자가 소수일 시 count증가
                const sum = nums[i] + nums[j] + nums[k]; 
                if (prime(sum)) count++
            }
        }
    }
    return count;
}

/* 시간 복잡도
 - 3중 for문 : O(n^3)

 - 소수판별 함수 : O(sqrt(m))

 => 전체 시간 복잡도 : O(n^3 * sqrt(m))
*/