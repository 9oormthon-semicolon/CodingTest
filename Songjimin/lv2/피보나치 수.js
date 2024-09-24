function solution(n) {
  // 피보나치 수를 저장할 배열 선언 (n+1 크기로 초기화)
  let fibo = [0, 1];  // F(0) = 0, F(1) = 1

  // 2부터 n까지 피보나치 수를 계산하면서 배열에 저장
  for (let i = 2; i <= n; i++) {
    // F(n) = F(n-1) + F(n-2) 계산
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }

  // n번째 피보나치 수를 1234567로 나눈 나머지를 반환
  return fibo[n];
}
