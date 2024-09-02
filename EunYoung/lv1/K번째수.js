function solution(array, commands) {
  var answer = [];

  for (const command of commands) {
    const [start, end, answerIdx] = command;
    answer.push(
      array.slice(start - 1, end).sort((a, b) => a - b)[answerIdx - 1]
    );
  }

  return answer;
}

// for of로 commands 배열의 각 요소 순회
// 배열은 0인덱스부터 시작함, 1번째부터 시작하기 때문에 -1을 넣어줌

// 시간복잡도
// slice(start - 1, end)는 O(n)
// sort는 평균적으로 O(m log m)입니다. 여기서 m은 slice로 추출한 배열의 크기
// commands 배열을 순회하는 과정이 있으므로, 만약 commands의 크기를 k라고 하면, 전체적으로 O(k)만큼 반복
// 전체 시간복잡도 [ O(k \cdot (n + m \log m)) ]
//명령어 수가 많거나, 선택된 배열의 크기가 클 경우 성능에 큰 영향을 미칠 수 있음
