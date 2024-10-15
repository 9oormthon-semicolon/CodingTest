function solution(n, k) {
  // n을 k진수로 변환
  const change = n.toString(k);

  // 0을 기준으로 나누어 배열로 만듦
  const numbers = change.split("0");

  // 소수 개수를 세는 변수
  let count = 0;

  // 각 숫자에 대해 소수 판별
  for (let num of numbers) {
    if (num !== "" && isPrime(Number(num))) {
      count++;
    }
  }

  return count;
}

// 소수 판별 함수
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// 시간복잡도
// n을 k진수로 변환: O(log n)

// 문자열 분할: O(m), m은 k진수로 변환된 문자열의 길이

// 소수 판별:
// 각 숫자에 대해 isPrime 함수를 호출 isPrime 함수의 시간 복잡도는 O(sqrt(num))

// 전체 시간 복잡도:
// O(log n + m + m * sqrt(max_num))
