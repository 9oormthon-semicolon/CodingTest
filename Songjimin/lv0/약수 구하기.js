function solution(n) {
    const divisors = [];  // 약수를 저장할 배열
    
    // 1부터 n까지 반복하여 약수 찾기
    for (let i = 1; i <= n; i++) {
        // i가 n의 약수인지 확인
        if (n % i === 0) {
            divisors.push(i);  // 약수이면 배열에 추가
        }
    }
    return divisors;  // 약수 배열 반환
}
console.log(solution(24)); // [1, 2, 3, 4, 6, 8, 12, 24]
console.log(solution(29)); // [1, 29]

/*
  다른 사람의 문제 풀이
  function solution(n) {
    return Array(n).fill(0).map((v, index) => v + index + 1).filter((v) => n % v === 0);
  }
*/
