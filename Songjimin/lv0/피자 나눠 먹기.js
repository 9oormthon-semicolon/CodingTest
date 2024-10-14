function solution(n) {
    // 필요한 피자의 수를 계산
    return Math.ceil(n / 7);
}

console.log(solution(7));  // 1
console.log(solution(1));  // 1
console.log(solution(15)); // 3
