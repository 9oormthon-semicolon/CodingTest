function solution(my_string) {
    let result = '';
    
    for (let i=0; i<my_string.length; i++) {
        let char = my_string[i];
        // 대문자인 경우
        if (char === char.toUpperCase()) {
            // 소문자로 변경
            result += char.toLowerCase();
        }
        // 소문자인 경우 
        else {
            result += char.toUpperCase();  // 대문자로
        }
    }
    return result;
}

console.log(solution("cccCCC")); // "CCCccc"
console.log(solution("abCdEfghIJ")); // "ABcDeFGHij"

/*
다른 사람의 문제풀이
function solution(my_string) {
	var answer = '';
	// c가 소문자인지 확인후 참이면 대문자로 거짓이면 소문자로 체인지
	for (let c of my_string) answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
	return answer;
}
*/
