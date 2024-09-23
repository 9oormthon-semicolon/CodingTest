function isPrime(num) {
    if (num < 2) return false
    if (num === 2) return true
    if (num % 2 === 0) return false
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false
    }
    return true
}

function solution(nums) {
    let cnt = 0
    let len = nums.length
    
    for(let i = 0; i < len - 2; i++){
        for(let j = i + 1; j < len - 1; j++){
            for(let k = j + 1 ; k < len; k++){
                if (isPrime(nums[i] + nums[j] + nums[k])) 
                    cnt++
            }
        }
    }
    
    return cnt
    
}

//배열에서 3가지의 수를 골라 순서없는 집합을 만들고
//그 합이 소수라면 개수를 세는 문제입니다.

//1. 소수 판별 함수 만들기
//2. 조합 만들어서 더하기
//3. 더한 수가 소수로 판별되면 횟수 세기

//O(N^3)