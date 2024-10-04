function solution(queue1, queue2) {
  // 각 큐의 합을 계산
  let sum1 = queue1.reduce((a, b) => a + b, 0);
  let sum2 = queue2.reduce((a, b) => a + b, 0);

  // 목표값 계산 (두 큐 합의 절반)
  const target = (sum1 + sum2) / 2;

  // 목표값이 정수가 아니면 불가능한 경우이므로 -1 반환
  if (!Number.isInteger(target)) return -1;

  // 두 큐의 총 길이 계산
  const totalLength = queue1.length + queue2.length;

  // 각 큐의 현재 위치를 가리키는 포인터
  let pointer1 = 0;
  let pointer2 = 0;

  // 작업 횟수를 카운트하는 변수
  let count = 0;

  // 무한 루프 방지를 위해 최대 반복 횟수 설정 (큐 길이의 3배)
  while (count <= totalLength * 3) {
    // 첫 번째 큐의 합이 목표값과 같으면 현재 작업 횟수 반환
    if (sum1 === target) return count;

    if (sum1 > target) {
      // 첫 번째 큐의 합이 더 크면, queue1에서 queue2로 원소 이동
      const value = queue1[pointer1];
      sum1 -= value;
      sum2 += value;
      queue2.push(value);
      pointer1++;
    } else {
      // 두 번째 큐의 합이 더 크면, queue2에서 queue1으로 원소 이동
      const value = queue2[pointer2];
      sum1 += value;
      sum2 -= value;
      queue1.push(value);
      pointer2++;
    }

    // 작업 횟수 증가
    count++;
  }

  // 최대 반복 횟수를 초과하면 불가능한 경우이므로 -1 반환
  return -1;
}

// 시간복잡도
// 초기 합계 계산: O(n)
// 메인 루프: O(n) * O(1) = O(n)
// 총 시간 복잡도: O(n) + O(n) = O(n)
