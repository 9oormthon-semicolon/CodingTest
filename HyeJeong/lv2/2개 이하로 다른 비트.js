function solution(numbers) {
  function f(x) {
    if (x % 2 === 0) return x + 1;
    let bit = "0" + x.toString(2);
    let idx = bit.lastIndexOf("0");
    return parseInt(`${bit.slice(0, idx)}10${bit.slice(idx + 2)}`, 2);
  }

  return numbers.map(f);
}

/*
1. 짝수인 경우 - 이진수로 변환하면 마지막 비트가 0이므로 1을 더해줌
2. 홀수인 경우 - 이진수로 변환한 후 앞에 0을 붙임
              뒤에서부터 첫번째 0을 찾음
              찾은 0을 1로 바꾸고 다음 비트를 0으로 바꿈

시간복잡도 - O(n * log M)
n은 입력 배열 numbers의 길이
M은 numbers 배열에서 가장 큰 수
*/
