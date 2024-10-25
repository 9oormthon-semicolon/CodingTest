function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5], // 1번
    [2, 1, 2, 3, 2, 4, 2, 5], // 2번
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5], // 3번
  ];

  const count = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        count[j] += 1;
      }
    }
  }

  const maxCount = Math.max(...count);

  const highestScores = [];

  for (let i = 0; i < count.length; i++) {
    if (count[i] === maxCount) {
      highestScores.push(i + 1);
    }
  }
  return highestScores;
}

// console.log(solution([1, 2, 3, 4, 5])); // [ 1 ]
// console.log(solution([1, 3, 2, 4, 2])); // [ 1, 2, 3 ]

/**
 * N은 answers의 길이
 * 패턴과 정답을 비교하는 부분 O(N).
 *
 * 마지막 for문 순회하면서 가장 높은 점수 받은 수포자 연산 O(1).
 *
 * 최종시간복잡도 -> O(N)
 */
