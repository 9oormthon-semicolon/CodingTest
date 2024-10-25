function solution(arr1, arr2) {
  const r1 = arr1.length;
  const c1 = arr1[0].length;

  const r2 = arr2.length;
  const c2 = arr2[0].length;

  const result = [];
  for (let i = 0; i < r1; i++) {
    result.push(new Array(c2).fill(0));
  }

  for (let i = 0; i < r1; i++) {
    for (let j = 0; j < c2; j++) {
      for (let k = 0; k < c1; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }
  return result;
}

// 입출력 예
var arr1 = [
  [1, 4],
  [3, 2],
  [4, 1],
];

var arr2 = [
  [3, 3],
  [3, 3],
];

// console.log(solution(arr1, arr2)); // [ [ 15, 15 ], [ 15, 15 ], [ 15, 15 ] ]

/**
 * N은 행 또는 열의 길이.
 *
 * 3중 반복문
 * 외부 루프: r1번 반복
 * 중간 루프: c2번 반복
 * 내부 루프: c1번 반복
 * 시간 복잡도는 O(r1 * c2 * c1)
 *
 * 최종시간복잡도 ->  O(n^3)
 */
