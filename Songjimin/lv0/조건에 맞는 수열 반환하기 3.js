function solution(arr, k) {
    // k가 홀수인 경우: 모든 원소에 k를 곱함
    if (k % 2 === 1) {
        return arr.map(num => num * k);
    } else {  // k가 짝수인 경우: 모든 원소에 k를 더함
        return arr.map(num => num + k);
    }
}

/*
  다른 사람의 문제 풀이
  const solution = (arr, k) => arr.map(v => k % 2 ? v * k : v + k);
*/
