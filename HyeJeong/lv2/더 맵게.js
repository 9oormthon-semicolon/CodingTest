class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();
  }

  pop() {
    if (this.size() === 0) return null;
    if (this.size() === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return min;
  }

  bubbleUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[parentIndex] <= this.heap[index]) break;
      [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
      index = parentIndex;
    }
  }

  bubbleDown() {
    let index = 0;
    while (true) {
      const leftChild = 2 * index + 1;
      const rightChild = 2 * index + 2;
      let smallest = index;

      if (leftChild < this.size() && this.heap[leftChild] < this.heap[smallest]) {
        smallest = leftChild;
      }
      if (rightChild < this.size() && this.heap[rightChild] < this.heap[smallest]) {
        smallest = rightChild;
      }

      if (smallest === index) break;

      [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
      index = smallest;
    }
  }

  peek() {
    return this.heap[0];
  }
}

function solution(scoville, K) {
  const minHeap = new MinHeap();

  scoville.forEach(s => minHeap.push(s));
  
  let mixCount = 0;
  
  while (minHeap.size() >= 2 && minHeap.peek() < K) {
    const first = minHeap.pop();
    const second = minHeap.pop();
    const newScoville = first + (second * 2);
    minHeap.push(newScoville);
    mixCount++;
  }
  
  return minHeap.peek() >= K ? mixCount : -1;
}

/*
먼저 최소 힙 자료구조를 구현(항상 가장 작은 값을 루트에 유지)
solution 함수에서는 주어진 스코빌 지수 배열의 모든 요소를 최소 힙에 추가
while 루프를 통해 힙의 크기가 2 이상이고, 가장 작은 스코빌 지수가 K보다 작은 동안 반복
가장 작은 두 스코빌 지수를 꺼내 새로운 스코빌 지수를 계산하고 계산된 새 스코빌 지수를 힙에 다시 추가 그리고 섞은 횟수를 1 증가
루프가 종료된 후, 가장 작은 스코빌 지수가 K 이상이면 섞은 횟수를 반환하고, 그렇지 않으면 -1을 반환

시간복잡도 - O(NlogN)

어렵네요..
*/
