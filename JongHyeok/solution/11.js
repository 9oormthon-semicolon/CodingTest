// 문제 11 짝지어 제거하기
function solution(s) {
    let stack = [];
    for (const char of s) { // 스택에 넣으면서 제거
        if (stack.length > 0 && stack[stack.length - 1] === char) stack.pop()
        else stack.push(char);
    }
    return stack.length === 0? 1 : 0; // 스택에 남아있는 게 있으면 정답 아니면 오답
}

const s = "baabaa"
console.log(solution(s));

/*
권장 시간 복잡도 O(N)
---
*/