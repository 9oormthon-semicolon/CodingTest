// 문제 18 두 개의 수로 특정 값 만들기

function countSort(arr, k) {
    const hash = new Array(k + 1).fill(0);
    for(const num of arr) {
        if(num <= k) hash[num] = 1; // 현재 원소의 값을 인덱스로 해시 값 1로 설정
    }
    return hash;
}

function solution(arr, target) {
    const hash = countSort(arr, target);
    for(const num of arr) {
        const val = target - num;
        // 타겟에서 현재 원소를 뺀 값이 해시에 있으면
        if (val !== num && val >= 0 && val <= target && hash[val] === 1) return true;
    }
    return false;
}

const arr = [1,2,3,4,8], target = 6;
console.log(solution(arr, target));

/*
권장 시간 복잡도 O(N+K)
---
해시테이블 초기화 시간복잡도 O(K)
배열 순화할 때 시간복잡도 O(N)
전체 시간복잡도 O(N+K)
*/