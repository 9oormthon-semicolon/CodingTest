// 문제 01 배열 정렬하기
function solution(arr) {
    arr.sort();
    return arr;
}

const arr = [1,-5,2,4,3];
console.log(solution(arr));

/*
권장 시간 복잡도 O(NlogN)
---
sort() 함수의 시간복잡도는 기본적으로 O(NlogN)
조건을 전달하지 않으면 데이터가 문자열이라 가정하고 정렬 & 오름차순 정렬
오름차순 => sort((a, b) => a - b)
내림차순 => sort((a, b) => b - a)
*/