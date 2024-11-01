function solution(my_string) {
    // 공백 하나 이상을 기준으로 문자열 분리
    const words = my_string.trim().split(/\s+/);
    return words;
}
