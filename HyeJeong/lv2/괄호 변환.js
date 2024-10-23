function solution(p) {
    if (p === '') return '';

    let u = '', v = '';
    let balance = 0;
    
    for (let i = 0; i < p.length; i++) {
        if (p[i] === '(') balance++;
        else balance--;
        
        u += p[i];
        if (balance === 0) {
            v = p.slice(i + 1);
            break;
        }
    }

    if (isCorrect(u)) {

        return u + solution(v);
    } else {
        let result = '(' + solution(v) + ')';

        for (let i = 1; i < u.length - 1; i++) {
            result += u[i] === '(' ? ')' : '(';
        }
        
        return result;
    }
}

function isCorrect(str) {
    let stack = [];
    for (let char of str) {
        if (char === '(') stack.push(char);
        else {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
}

/*
is_right 함수에서 주어진 문자열이 올바른 괄호 문자열인지 확인
열린 괄호('(')를 만나면 index를 증가시키고, 닫힌 괄호(')')를 만나면 감소시킴
index가 음수가 되면 올바르지 않은 문자열 / index가 0이면 올바른 문자열
solution 함수에서 재귀적으로 문제를 해결
입력 문자열이 이미 올바른 괄호 문자열이면 그대로 반환
문자열을 u와 v로 분리
u가 올바른 괄호 문자열이면 v에 대해 재귀적으로 solution을 호출 / u가 올바르지 않은 경우, 문제에서 제시한 변환 과정 수행

시간 복잡도 - O(n log n)
is_right 함수: O(n), n은 문자열의 길이
solution 함수: 최악의 경우, 문자열을 반으로 나누는 과정을 반복하므로 O(n log n)
*/
