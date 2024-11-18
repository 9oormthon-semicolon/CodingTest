function solution(n, k) {
    
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    const result = [];
    k -= 1;
    
     const factorial = (num) => {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    };

    for (let i = n; i > 0; i--) {
        const fact = factorial(i - 1); // 현재 자리에서 만들 수 있는 경우의 수
        const index = Math.floor(k / fact); // 현재 자리에서 선택할 숫자의 인덱스
        result.push(nums[index]); // 선택한 숫자를 결과에 추가
        nums.splice(index, 1); // 선택된 숫자를 제거
        k %= fact; // 다음 자리를 위해 k 업데이트
    }

    return result;

}

// 시간복잡도 : O(n^2)