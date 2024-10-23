function solution(str1, str2) {
    // str1 안에 str2가 포함되어 있는지 확인
    if (str1.includes(str2)) {
        return 1;  // 포함되어 있으면 1 반환
    } else {
        return 2;  // 포함되어 있지 않으면 2 반환
    }
}

console.log(solution("ab6CDE443fgh22iJKlmn1o", "6CD")); // 1
console.log(solution("ppprrrogrammers", "pppp")); // 2
console.log(solution("AbcAbcA", "AAA")); // 2

/*
  다른 사람의 문제 풀이
  function solution(str1, str2) {
		// str2가 str1에 포함되어 있으면 1을 반환, 아니면 2를 반환
    return str1.split(str2).length > 1 ? 1 : 2;
  }
*/
