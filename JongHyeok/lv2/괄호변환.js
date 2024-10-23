function solution(p) {
    function isRightStr(str) { // 올바른 문자열인지 시간복잡도 O(n)
        let total = 0; // '('와 ')'의 차이
        for (const char of str) {
            if (char === '(') total++; 
            else if (char === ')') total--;
            
            if (total < 0) return false;
        }
        return true;
    }

    function splitBalancedStr(str) { // 시간복잡도 O(n)
        let total = 0; // '('와 ')'의 차이
        for (let i = 0; i < str.length; i++) {
            if (str[i] === '(') total++; 
            else if (str[i] === ')') total--;

            if (total === 0) return [str.slice(0, i + 1), str.slice(i + 1)]; // 문자열 분리
        }
    }

    function fixStr(str) { // 시간복잡도 O(n)
        if (str === "") return ""; // 입력이 빈 문자열인 경우, 빈 문자열 반환
        const [u, v] = splitBalancedStr(str); // "균형잡힌 괄호 문자열" u, v로 분리

        if (isRightStr(u)) return u + fixStr(v);
        // u가 "올바른 괄호 문자열"이라면 문자열을 u에 이어 붙인 후 반환
        else return `(${fixStr(v)})` +
                    Array.from(u.slice(1, -1), c => c === '(' ? ')' : '(').join('');
        /* 교정된 v 앞 뒤로 '(' 와 ')' 추가한 새로운 문자열 +
         u의 첫 번째와 마지막 문자 제거(slice), 나머지 문자들을 반대로 바꾼 문자열
        */
    }

    if (isRightStr(p)) return p; // 만약 p가 이미 "올바른 괄호 문자열"이라면 그대로 반환

    return fixStr(p);
}

const p = "()))((()";
console.log(solution(p)); // "()(())()"

/*
재귀를 사용하지만 결과적으로 모든 문자는 1번씩만 처리되기 때문에
시간복잡도는 O(n)
*/