// 문제 08 괄호 짝 맞추기
function solution(s) {
    const stack = [];
    for (const c of s){
        if(c === '(') stack.push(c);
        else if(c === ")"){
            if(stack.length === 0) return false;
            else stack.pop();
        }
    }
    return stack.length === 0;
}

const s = "(())()"
console.log(solution(s));

/*
권장 시간 복잡도 O(N)
---
*/