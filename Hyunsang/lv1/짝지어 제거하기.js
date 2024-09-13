function solution(s) {
    let stack = [];
    
    for (let i = 0; i < s.length; i++) {
        if (stack.length > 0 && stack[stack.length - 1] === s[i]) {
            stack.pop();  // 스택의 마지막 문자와 현재 문자가 같으면 제거
        } else {
            stack.push(s[i]);  // 아니면 스택에 현재 문자 추가
        }
    }
    
    return stack.length === 0 ? 1 : 0;
}

/* 
시간복잡도:
반복문 for: 문자열 s의 길이가 n일 때, 이 반복문은 n번 실행 스택 
연산은 모두 상수 시간(O(1))에 수행

stack.pop()과 stack.push(s[i])는 각각 상수 시간 O(1)에 수행

반복문은 문자열의 길이 n에 대해 한 번씩 순회하며, 
내부의 조건문과 스택 연산은 모두 O(1)입니다.
따라서 전체 시간 복잡도는 O(n)
*/