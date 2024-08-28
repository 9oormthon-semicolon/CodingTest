function solution(arr) {
  const stack = [];

  for (const num of arr) {
    if (stack.length === 0 || stack[stack.length - 1] !== num) {
      stack.push(num);
    }
  }

  return stack;
}

function solution(arr) {
  const answer = [];

  for (const num of arr) {
    if (answer.length === 0 || answer[answer.length - 1] !== num) {
      answer.push(num);
    }
  }

  return answer;
}

// 시간복잡도
// if (stack.length === 0 || stack[stack.length - 1] !== num)
// -> O(1)
// stack.push(num) -> O(1)
// 전체 시간 복잡도 -> O(n)
