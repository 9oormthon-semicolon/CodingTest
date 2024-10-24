function solution(arr) {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr.sort((a, b) => b - a);
}

// console.log(solution([4, 2, 2, 1, 3, 4])); //[ 4, 3, 2, 1 ]
// console.log(solution([2, 1, 1, 3, 2, 5, 4])); //[ 5, 4, 3, 2, 1 ]

// 시간복잡도
/**
 * N은 arr의 길이.
 * arr의 중복 원소를 제거하는 데 걸리는 시간 복잡도는 O(N).
 * 다시 정렬하는데 걸리는 시간복잡도는 O(NlogN)
 * 최종 시간복잡도 -> O(NlogN)
 */
