function solution(n, t, m, p) {
  let answer = "";
  let numbers = "";
  let num = 0;

  // n진법으로 숫자를 변환하고 문자열로 연결
  while (numbers.length < t * m) {
    numbers += num.toString(n).toUpperCase();
    num++;
  }

  // 튜브의 순서에 해당하는 숫자만 추출
  for (let i = p - 1; i < t * m; i += m) {
    answer += numbers[i];
  }

  return answer;
}

// 시간복잡도
// numbers 문자열의 길이가 t * m이 될 때까지 실행
// num.toString(n)의 시간 복잡도는 O(log_n(num))

// 전체 시간 복잡도는 O(t * m * (log_n(num) + k) + t)
