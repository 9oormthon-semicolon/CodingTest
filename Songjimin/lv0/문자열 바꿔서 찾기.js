function solution(myString, pat) {
    // myString에서 "A"는 "B"로, "B"는 "A"로 변환
    let convertedString = myString
        .split("")               // 문자열을 문자 배열로 변환
        .map(char => char === "A" ? "B" : "A")  // "A"는 "B"로, "B"는 "A"로 변환
        .join("");               // 다시 문자열로 변환
    
    // 변환된 문자열에 pat이 포함되어 있는지 확인
    return convertedString.includes(pat) ? 1 : 0;
}

console.log(solution("ABBAA", "AABB")); // 1
console.log(solution("ABAB", "ABAB"));  // 0
