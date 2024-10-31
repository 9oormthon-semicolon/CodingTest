function solution(s) {
  const sLeng = s.length;
  let count = 0;

  for (let rotation = 0; rotation < sLeng; rotation++) {
    if (isValid(s)) {
      count++;
    }
    s = s.slice(1) + s[0];
  }
  return count;
}

function isValid(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "[" || s[i] === "{" || s[i] === "(") {
      stack.push(s[i]);
    } else if (stack.length === 0) {
      return false;
    } else if (s[i] === "]" || s[i] === "}" || s[i] === ")") {
      if (
        (s[i] === "]" && stack[stack.length - 1] !== "[") ||
        (s[i] === "}" && stack[stack.length - 1] !== "{") ||
        (s[i] === ")" && stack[stack.length - 1] !== "(")
      ) {
        return false;
      }
      stack.pop();
    }
  }
  return stack.length === 0;
}

// console.log(solution("[](){}")); // 3
// console.log(solution("}]()[{")); // 2
// console.log(solution("[)(]")); // 0
// console.log(solution("}}}")); // 0

/**
 * 시간복잡도
 *
 * 문자열 s의 길이만큼 반복 O(n) n은 문자열 s의 길이
 *
 * 전체 시간복잡도
 * O(n^2)
 */
