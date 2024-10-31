function solution(s) {
  let stack = [];

  for (let string of s) {
    if (stack.length === 0 || string !== stack[stack.length - 1]) {
      stack.push(string);
    } else if (string === stack[stack.length - 1]) {
      stack.pop();
    }
  }

  return stack.length === 0 ? 1 : 0;
}

// console.log(solution("baabaa")); // 1
// console.log(solution("cdcd")); // 0

/**
 * 시간복잡도
 * n은 입력 문자열 s의 길이
 *
 * 문자열의 모든 문자를 한 번씩 순회
 * 전체 시간복잡도 -> O(n)
 */
