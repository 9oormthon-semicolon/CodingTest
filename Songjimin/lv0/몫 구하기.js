function solution(num1, num2) {
    // num1을 num2로 나눈 몫을 반환
    return Math.floor(num1 / num2);
}

console.log(solution(10, 5));  // 출력: 2
console.log(solution(7, 2));  // 출력: 3


/*
  다른 사람의 문제 풀이 1.
  const solution = (num1, num2) => Math.floor(num1 / num2)

  2.
  function solution(num1, num2) {
    return ~~(num1 / num2);
  }
  ~~ 연산자 : JS에서 숫자를 정수로 변환하기 위한 트릭‼
  두 번의 비트 NOT 연산자(~)를 사용하여
  소수점을 제거하고 정수만 반환 🔁
*/
