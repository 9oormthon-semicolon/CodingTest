class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  size() {
    return this.rear - this.front;
  }

  pop() {
    return this.items[this.front++];
  }
}

function solution(N, K) {
  const queue = new Queue();

  // 1. 1부터 N까지의 번호를 deque에 추가
  for (let i = 1; i <= N; i++) {
    queue.push(i);
  }

  while (queue.size() > 1) {
    // 2. deque에 하나의 요소가 남을 때까지
    for (let i = 0; i < K - 1; i++) {
      queue.push(queue.pop());
    }
    queue.pop(); // 3. K번째 요소 제거
  }
  return queue.pop(); // 4. 마지막으로 남은 요소 반환
}
console.log(solution(5, 2)); // 3

/**
 * 시간복잡도
 *
 * N은 전체 사람수, K는 제거된 사람의 번호.
 * K - 1번 팝하고 1번 푸시하는 동작 N번 반복
 *
 * O(N*K)
 */
