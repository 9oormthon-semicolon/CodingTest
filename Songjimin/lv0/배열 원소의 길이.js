function solution(strlist) {
    // 각 문자열의 길이를 담은 배열을 반환
    return strlist.map(str => str.length);
}

console.log(solution(["We", "are", "the", "world!"])); // [2, 3, 3, 6]
