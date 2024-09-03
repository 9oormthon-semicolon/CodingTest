function solution(s) {
		// 여는 괄호 '('의 수를 추적하는 변수
    let count = 0;  

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            count++;  // 여는 괄호가 나오면 count를 1 증가
        } else {
            count--;  // 닫는 괄호가 나오면 count를 1 감소
        }

        if (count < 0) {
            return false;  // 닫는 괄호가 여는 괄호보다 많아지면 false 반환
        }
    }

    return count === 0;  // 모든 괄호가 짝지어졌다면 count가 0이어야 함
}

// 테스트 케이스
console.log(solution("()()"));   // true
console.log(solution("(())()")); // true
console.log(solution(")()("));   // false
console.log(solution("(()("));   // false

/*
	문자열 s 한 번만 순회하기에 시간 복잡도=> 0(n)
	여기서 n은 문자열의 길이
*/
