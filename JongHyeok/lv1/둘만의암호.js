function solution(s, skip, index) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let answer = "";

    for (let i = 0; i < skip.length; i++) {
        alphabet = alphabet.replace(skip[i], ""); // skip 문자 제거
    }
  
    for (let i = 0; i < s.length; i++) { // 문자 변환
        let a = s[i];
        let newIndex = (alphabet.indexOf(a) + index) % alphabet.length;
        answer += alphabet[newIndex];
    }
  
    return answer;
}
  
console.log(solution("aukks", "wbqd", 5));

/*
skip할 알파벳(n)을 제거하는 과정 시간복잡도 O(n)
문자열s(m)를 변환하는 과정 시간복잡도 O(m)
전체 시간복잡도 O(n+m)
*/