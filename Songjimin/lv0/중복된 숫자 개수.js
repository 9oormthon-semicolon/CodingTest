function solution(array, n) {
    // 배열에서 n의 개수를 세어 반환
    return array.filter(num => num === n).length;
}
