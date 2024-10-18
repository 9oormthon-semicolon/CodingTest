function solution(numbers, target) {
  let answer = 0; // 타겟 넘버를 만드는 방법의 수를 저장할 변수

  // DFS 함수 정의
  function dfs(index, sum) {
    // 모든 숫자를 사용했을 때 (배열의 끝에 도달했을 때)
    if (index === numbers.length) {
      // 현재 합계가 타겟 넘버와 일치하면 answer 증가
      if (sum === target) {
        answer++;
      }
      return; // 재귀 종료
    }

    // 현재 숫자를 더하는 경우
    dfs(index + 1, sum + numbers[index]);

    // 현재 숫자를 빼는 경우
    dfs(index + 1, sum - numbers[index]);
  }

  // 초기 상태로 DFS 시작 (인덱스 0, 합계 0에서 시작)
  dfs(0, 0);

  // 타겟 넘버를 만드는 방법의 수 반환
  return answer;
}

/**
 * 시간 복잡도 계산:
  모든 가능한 경로를 탐색하므로, 총 노드의 수는 2^n입니다.
  각 노드에서 수행되는 연산(합 계산, 비교 등)은 상수 시간 O(1)입니다.
  최종 시간 복잡도:
  O(2^n)
 */
