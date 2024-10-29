function solution(decimal) {
  const stack = [];
  let result = "";
  while (decimal > 0) {
    const num = decimal % 2;
    stack.push(num);
    decimal = Math.floor(decimal / 2);
    // console.log(stack);
  }

  while (stack.length > 0) {
    result += stack.pop();
  }

  return result;
}
// console.log(solution(10)); // 1010
// console.log(solution(27)); // 11011
// console.log(solution(12345)); // 11000000111001

/**
 * 시간복잡도
 * N은 2진수로 변환할 숫자
 * N이 1이 될때까지 2로 계속 나눔
 *
 * 최종시간복잡도 O(logN)
 */
