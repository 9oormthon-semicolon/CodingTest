function solution(numbers) {
  // 뒤에 큰 수가 없는 경우를 대비하기 위해 -1로 초기화
  const answer = new Array(numbers.length).fill(-1);
  const stack = [];

  for (let i = numbers.length - 1; i >= 0; i--) {
    // 현재 숫자보다 작은 숫자들을 제거하는 과정
    while (stack.length > 0 && stack[stack.length - 1] <= numbers[i]) {
      stack.pop();
    }
    // 스택이 비어있지 않다면, 스택의 top에 있는 숫자가 현재 숫자 뒤에 있는 가장 가까운 큰 수
    if (stack.length > 0) {
      answer[i] = stack[stack.length - 1];
    }
    stack.push(numbers[i]);
  }

  return answer;
}

// 시간 복잡도
// 각 숫자는 한 번씩만 스택에 push되고
// 최대 한 번씩만 pop될 수 있기 때문에  O(n)
