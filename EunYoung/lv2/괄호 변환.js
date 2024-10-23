function solution(p) {
  // 1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
  if (p === "") return "";

  // 2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다.
  const [u, v] = separate(p);

  // 3. 문자열 u가 "올바른 괄호 문자열"이라면 v에 대해 1단계부터 다시 수행합니다.
  if (isCorrect(u)) {
    return u + solution(v);
  } else {
    // 4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
    let result = "(" + solution(v) + ")";

    // u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
    for (let i = 1; i < u.length - 1; i++) {
      result += u[i] === "(" ? ")" : "(";
    }

    return result;
  }
}

// 문자열을 u와 v로 분리하는 함수
function separate(w) {
  let balance = 0;
  let u = "";

  for (let i = 0; i < w.length; i++) {
    u += w[i];
    balance += w[i] === "(" ? 1 : -1;
    if (balance === 0) {
      return [u, w.slice(i + 1)];
    }
  }
}

// 올바른 괄호 문자열인지 확인하는 함수
function isCorrect(s) {
  let stack = [];
  for (let char of s) {
    if (char === "(") {
      stack.push(char);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }
  return stack.length === 0;
}

/**
 * separate 함수:
문자열을 한 번 순회합니다.
시간 복잡도: O(n), 여기서 n은 입력 문자열의 길이입니다.

isCorrect 함수:
문자열을 한 번 순회합니다.
시간 복잡도: O(n)

solution 함수:
재귀적으로 호출됩니다.

각 재귀 호출에서:
separate 함수 호출: O(n)
isCorrect 함수 호출: O(n)
문자열 조작 (최악의 경우): O(n)


전체 시간 복잡도는 O(n log n)
 */
