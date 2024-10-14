function solution(array) {
    // 배열을 오름차순으로 정렬
    array.sort((a, b) => a - b);
    // 중앙값의 인덱스
    const midIndex = Math.floor(array.length / 2);
    // 중앙값 반환
    return array[midIndex];
}

console.log(solution([1, 2, 7, 10, 11])); // 7
console.log(solution([9, -1, 0])); // 0
