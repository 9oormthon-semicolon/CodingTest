function solution(N, stages) {
  // 스테이지별 도전자 수
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }

  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
      continue;
    }

    fails[i] = challenger[i] / total;

    total -= challenger[i];
  }

  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  // console.log(fails);
  return result.map((v) => Number(v[0]));
}

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); //[ 3, 4, 2, 1, 5 ]
// console.log(solution(4, [4, 4, 4, 4, 4])); //[ 4, 1, 2, 3 ]

/**
 * 시간복잡도
 * N은 스테이지의 개수 M은 stages의 길이
 * 스테이지별로 실패율 계산 O(N)
 * 실패율 기준으로 스테이지 정렬 O(NlogN)
 *
 * 전체 시간복잡도
 * O(M + NlogN)
 */
