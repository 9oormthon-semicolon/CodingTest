function solution(n) {
    let sum = 0;  // 짝수의 합을 저장할 변수
    
    // 2부터 n까지 2씩 증가하면서 짝수만 더함
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    return sum;
}

/*
  다른 사람의 문제 풀이
  function solution(n) {
    return Array(n)
      .fill()
      .map((_, i) => i + 1)
      .filter((v) => v % 2 === 0)
      .reduce((acc, cur) => acc + cur, 0);
  }
*/
