function solution(s) {
    const stack = []; // 스택을 초기화합니다. 이 스택은 열린 괄호 '('를 저장
    
    // 문자열 s의 각 문자를 순회
    for (let i = 0; i < s.length; i++) {
        const char = s[i]; // 현재 문자를 가져옴
        
        if (char === '(') {
            stack.push(char); // 문자가 '('이면 스택에 추가
        } else if (char === ')') {
            if (stack.length > 0) {
                stack.pop(); // 문자가 ')'이고 스택에 '('가 존재하면 스택에서 하나를 제거
            } else {
                return false; // 스택이 비어있는데 ')'가 나오면 false를 반환.
            }
        } 
    }
    // 모든 문자를 처리한 후 스택이 비어있으면 올바른 괄호, 비어있지 않으면 false를 반환.
    return stack.length === 0; 
}

/*
시간복잡도:
문자열 s를 한 번 순회하면서, 각 문자를 확인
이 때 각 문자에 대해 실행되는 연산들은 상수 시간(O(1))
자열의 길이를 n이라고 할 때, 전체 반복문이 최대 n번 실행되므로, 
전체 시간복잡도는 O(n)
*/