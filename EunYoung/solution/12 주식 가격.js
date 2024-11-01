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

// console.log(solution([1, 2, 3, 2, 3])); //[ 4, 3, 1, 1, 0 ]

/**
 * 시간복잡도
 * N은 prices의 길이
 * 최악의 경우 각 prices의 원소들은 한 번씩 푸시/팝 하므로
 * 시간복잡도는 O(N)
 */
