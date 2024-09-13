function solution(s) {
  const stack = [];

  for (let char of s) {
    if (stack.length > 0 && stack[stack.length - 1] === char) {
      stack.pop(); // 연속된 같은 문자 제거
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// 시간복잡도
// 문자열 s의 각 문자를 정확히 한 번씩 순회함.
// 각 문자에 대해 수행하는 연산(스택에 추가하거나 제거하는 작업)은 상수 시간 O(1)이 소요.
// 전체 시간 복잡도는 O(n * 1) = O(n)
