function solution(numbers) {
  let answer = [];
  // 배열에서 두 수를 선택하는 모든 경우의 수를 구한다.
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }
  // 과정 1에서 구한 수를 새로운 배열에 저장하고 중복값을 제거합니다.
  // let uniqueArr = [...new Set(answer)];

  // // 배열을 오름차순으로 정렬하고 반환합니다.
  // let newArr = uniqueArr.sort((a, b) => a - b)
  // return newArr;
  return [...new Set(answer)].sort((a, b) => a - b);
}

// console.log(solution([2, 1, 3, 4, 1])); //[ 2, 3, 4, 5, 6, 7 ]
// console.log(solution([5, 0, 2, 7])); //[ 2, 5, 7, 9, 12 ]

/**
 * 시간복잡도
 * N은 numbers의 길이
 * 중복을 체크하는데 O(N2)가 걸린다
 *
 * 정렬하는데 O(N2logN2)걸리므로
 * 최종 시간복잡도 O(N2logN2)
 */
