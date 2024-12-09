class MaxHeap {
    constructor() {
        this.heap = [];
    }

    // 힙에 값 추가
    push(value) {
        this.heap.push(value);
        let idx = this.heap.length - 1;

        // 부모 노드와 비교해가며 최대 힙 유지
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            if (this.heap[parentIdx] >= this.heap[idx]) break;
            [this.heap[parentIdx], this.heap[idx]] = [this.heap[idx], this.heap[parentIdx]];
            idx = parentIdx;
        }
    }

    // 최대값 제거
    pop() {
        if (this.heap.length === 1) return this.heap.pop();

        const max = this.heap[0];
        this.heap[0] = this.heap.pop();
        let idx = 0;

        // 자식 노드와 비교해가며 최대 힙 유지
        while (true) {
            const leftChildIdx = idx * 2 + 1;
            const rightChildIdx = idx * 2 + 2;
            let largestIdx = idx;

            if (leftChildIdx < this.heap.length && this.heap[leftChildIdx] > this.heap[largestIdx]) {
                largestIdx = leftChildIdx;
            }
            if (rightChildIdx < this.heap.length && this.heap[rightChildIdx] > this.heap[largestIdx]) {
                largestIdx = rightChildIdx;
            }
            if (largestIdx === idx) break;

            [this.heap[idx], this.heap[largestIdx]] = [this.heap[largestIdx], this.heap[idx]];
            idx = largestIdx;
        }

        return max;
    }
}

function solution(n, k, enemy) {
    const maxHeap = new MaxHeap();
    let totalSoldiers = 0;

    for (let i = 0; i < enemy.length; i++) {
        totalSoldiers += enemy[i];
        maxHeap.push(enemy[i]);

        // 병사 초과 시 무적권 사용
        if (totalSoldiers > n) {
            if (k > 0) {
                totalSoldiers -= maxHeap.pop(); // 가장 큰 적을 무적권으로 처리
                k--;
            } else {
                return i; // 게임 종료
            }
        }
    }

    return enemy.length; // 모든 라운드 방어 성공
}
// 힙 연산(push, pop)은 O(log k)
// 시간 복잡도 : O(m × log k)