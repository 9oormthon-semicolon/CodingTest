// 스택을 이용하면 되는 문제

function solution(s) {
    let stack = [];
    
    // s문자열 순회
    for (let i = 0; i < s.length; i++) {
        let char = s[i]
        // 현재 문자가 "("이면 스택에 추가
        // 현재 문자가 ")"인데 스택이 비어있으면 false를 스택에 추가 (올바르지 않은 괄호)
        // 현재 문자가 ")"이고 스택에 "("가 있으면 스택에서 "("를 제거
        char === "(" ? stack.push(char) : stack.length === 0 ? stack.push(false) : stack.pop()
    }
    
    // 스택에 false가 존재한다면 짝이 맞지 않으므로 false 리턴
    if(stack.includes(false)) return false

    // 올바르게 짝지어져 있다면 stack의 길이는 0
    // 스택에 false가 없는데 스택의 길이가 존재하는 경우는 
    // "("가 남아 짝이 맞지 않는 경우므로 false 반환
    return stack.length === 0;
}

/* 시간 복잡도 
    - for루프(s의 길이만큼 반복) : O(n)
    - includes(스택의 모든 요소 확인) : O(n)

    => 전체 시간 복잡도 : O(n)
*/