function solution(numbers) {
    // 배열의 원소의 합 계산
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    // 합을 배열의 길이로 나누어 평균 반환
    return sum / numbers.length;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 5.5
console.log(solution([89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99])); // 94.0
