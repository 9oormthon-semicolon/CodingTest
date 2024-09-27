function solution(priorities, location) {
  // answer는 실행 순서를 추적합니다.
  let answer = 0;

  // queue는 우선순위와 원래 인덱스를 포함하는 객체 배열을 생성합니다.
  const queue = priorities.map((priority, index) => ({ priority, index }));

  //큐가 비어있지 않은 동안 반복합니다.
  // current는 큐의 첫 번째 요소를 제거하고 가져옵니다.
  // highest는 현재 요소보다 우선순위가 높은 요소가 있는지 확인합니다.
  while (queue.length) {
    const current = queue.shift();
    const highest = queue.some((num) => num.priority > current.priority);

    //더 높은 우선순위가 있으면 현재 요소를 큐의 끝으로 보냅니다.
    // 그렇지 않으면 실행 순서를 증가시키고, 찾고자 하는 위치의 프로세스인지 확인합니다.
    if (highest) {
      queue.push(current);
      console.log(current);
    } else {
      answer++;

      if (current.index === location) {
        return answer;
      }
    }
  }
  return answer;
}

// 시간복잡도
// 초기 큐 생성: O(n)
// 메인 루프: O(n) * (내부 연산: O(n)) = O(n^2)
// 전체 시간 복잡도 -> O(n^2)

/**
 * shift() -> 제거된 요소를 반환함
 * unshift() -> 요소를 추가하여 새로운 배열의 길이를 반환함
 *
 * some() -> 조건을 만족하는 요소가 있으면 true, 없으면 false를 반환
 * find() -> 조건을 만족하는 첫 번째 요소를 반환. 없으면 undefined를 반환
 **/
