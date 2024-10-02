function solution(message) {
    // 메시지의 길이에 2를 곱한 값을 반환
    return message.length * 2;
}

console.log(solution("happy birthday!")); // 30
console.log(solution("I love you~")); // 22 -> 공백 포함
