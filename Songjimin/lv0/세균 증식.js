function solution(n, t) {
    return n * Math.pow(2, t);  // 2의 t제곱을 계산
}

console.log(solution(2, 10)); // 2048
console.log(solution(7, 15)); // 229376

/*
  다른사람의 문제 풀이
  function solution(n, t) {
    return n << t;
  }
  비트 시프트 연산자
*/
