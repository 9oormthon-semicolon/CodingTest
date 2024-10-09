function solution(prices) {
  const n = prices.length;
  const answer = new Array(n).fill(0); // 결과를 저장할 배열
  const stack = []; // 인덱스를 저장할 스택

  for (let i = 0; i < n; i++) {
    // 현재 가격이 스택의 top에 있는 가격보다 작다면
    while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop(); // 스택에서 인덱스를 꺼냄
      answer[j] = i - j; // 가격이 떨어지지 않은 기간 계산
    }
    stack.push(i); // 현재 인덱스를 스택에 push
  }

  // 스택에 남아있는 인덱스들 처리
  while (stack.length > 0) {
    const j = stack.pop();
    answer[j] = n - 1 - j; // 끝까지 가격이 떨어지지 않은 경우
  }

  return answer;
}

// 시간복잡도
// O(n)
// 전체 배열을 한 번 순회하므로, 전체 연산 횟수는 배열의 길이에 비례.
