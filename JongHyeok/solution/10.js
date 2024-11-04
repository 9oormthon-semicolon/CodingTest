// 문제 10 괄호 회전하기
function solution(s) {
    const n = s.length;
    let answer = 0;
    for (let i = 0; i < n; i++) {
        const stack = [];
        let isCorrect = true;
        for (let j = 0; j < n; j++) { 
            const c = s[(i + j) % n]; // 괄호 회전
            if(c === "[" || c === "(" || c === "{") stack.push(c);
            // 열린 괄호는 스택에 push
            else { // 열린 괄호가 존재하지 않으면 false
                if (stack.length === 0){
                    isCorrect = false;
                    break;
                }
                // 짝이 있는지 확인
                const top = stack[stack.length - 1];
                if(c === "]" && top === "[") stack.pop(); 
                else if (c === ")" && top === "(") stack.pop();
                else if (c === "}" && top === "{") stack.pop();
                else {
                    isCorrect = false;
                    break;
                }
            }
        }
        // 모든 조건에 부합하면 방법 1추가
        if (isCorrect && stack.length === 0) answer += 1;
    }
    
    return answer;
}

const s = "[](){}";
console.log(solution(s));

/*
권장 시간 복잡도 O(N²)
---

*/