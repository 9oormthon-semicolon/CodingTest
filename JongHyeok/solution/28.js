// 문제 28 예상 대진표
function solution(n, a, n) {
    let answer = 0;
    while (a != b){
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        answer += 1; 
    }
    return answer;
}

const N = 8, A = 4, B = 7;
console.log(solution(N, A, B));

/*
권장 시간 복잡도 O(logN)
---
*/
