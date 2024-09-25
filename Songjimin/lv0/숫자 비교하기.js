function solution(num1, num2) {
    // 두 수가 같으면 1을 반환
    if (num1 === num2) {
        return 1;
    } else {
        // 두 수가 다르면 -1을 반환
        return -1;
    }
}

// 예시 실행
console.log(solution(2, 3));   // 출력: -1
console.log(solution(11, 11)); // 출력: 1
console.log(solution(7, 99));  // 출력: -1

/*
  다른 사람의 문제 풀이
  function solution(num1, num2) {
    var answer = num1 === num2 ? 1 : -1;
    return answer;
  }
  삼항 연산자로도 할 수 있구나!
*/
