// 문제 03 두 개 뽑아서 더하기
function solution(number) {
    const arr = [];
    for (let i = 0; i < number.length; i++) {
        for(let j = 0; j < i; j++){
            arr.push(number[i] + number[j]);
        }
    }

    return [...new Set(arr)].sort((a, b) => a - b);
}

const number = [2,1,3,4,1];
console.log(solution(number));

/*
권장 시간 복잡도 O(N²logN²)
---
시간복잡도
arr 배열의 길이는 number 배열의 길이 n에 대하여 n²
arr에 대해 sort 함수 사용했기 때문에
전체 시간복잡도는 O(N²logN²)
*/