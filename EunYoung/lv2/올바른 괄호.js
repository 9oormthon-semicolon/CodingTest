function solution(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length === 0 && char === ")") return false;
    if (stack.length !== 0 && stack[stack.length - 1] === "(" && char === ")") {
      stack.pop();
    } else stack.push(char);
  }

  return !stack.length;
}

// s의 길이가 홀수이면 false 반환
// 짝을 하나씩 찾으면서 결과를 찾음

// 시간복잡도
// if(s.length % 2 === 1) return false -> O(1)
// push, pop 연산 -> O(1)
// 전체 시간복잡도 O(n)
