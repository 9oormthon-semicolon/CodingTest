function solution(s) {
  let stack = [];
  for (const c of s) {
    if (c === "(") {
      stack.push(s);
    } else if (c === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
// console.log(solution("(())()")); // true
// console.log(solution("((())()")); // false

/**
 * 시간복잡도
 * N은 s의 길이.
 * s를 순회하며 쌍을 확인. 짝이 맞을 경우 stack pop.
 * 전체시간복잡도 O(N)
 *
 * push(), pop()-> 시간복잡도 O(1)
 */
