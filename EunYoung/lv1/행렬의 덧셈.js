function solution(arr1, arr2) {
  const result = arr1.map((arr1, i) => arr1.map((val, j) => val + arr2[i][j]));
  return result;
}

// 시간복잡도
// 외부 map 함수: arr1의 각 행을 순회합니다.
// 내부 map 함수: 각 행의 모든 요소를 순회합니다.

// arr1의 행의 수를 n이라고 가정합니다.
// arr1의 각 행의 열의 수를 m이라고 가정합니다.

// 외부 map: n번 실행됩니다.
// 내부 map: 각 행마다 m번 실행됩니다.
// 총 연산 횟수: n * m

// -> O(n * m)
