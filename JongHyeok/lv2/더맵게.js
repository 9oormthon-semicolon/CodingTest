class MinHeap { // 최소 힙 구현
    constructor() {
        this.heap = [];
    }
    size() {return this.heap.length;} // 힙 크기 반환
    peek() {return this.heap[0];} // 루트 노드의 값을 반환

    push(value) { // 삽입 시간복잡도 O(logn)
        this.heap.push(value); // 삽입할 값을 마지막에 추가하고
        let index = this.heap.length - 1; // 현재 인덱스 마지막

        while (index > 0 && this.heap[index] < this.heap[Math.floor((index - 1) / 2)]) {
            // 루트 노드가 아니고 && 현재 노드가 부모 노드보다 작은지 (더 이상 교환할 수 없을 때)
            const tmp = this.heap[index]; // 교환
            this.heap[index] = this.heap[Math.floor((index - 1) / 2)];
            this.heap[Math.floor((index - 1) / 2)] = tmp;
            index = Math.floor((index - 1) / 2);
        }
    }

    pop() { // 삭제 시간복잡도 O(logn)
        if (this.heap.length === 0) return null; // 빈 힙일 때
        if (this.heap.length === 1) return this.heap.pop(); // 루트 노드를 pop할 시

        const minValue = this.heap[0]; // 루트
        this.heap[0] = this.heap.pop(); // 마지막 노드를 루트로 이동
        let index = 0; // 현재 인덱스 0

        while (index * 2 + 1 < this.heap.length) { // 왼쪽 자식이 존재하면
            let minChildIndex =
                (index * 2 + 2 < this.heap.length && this.heap[index * 2 + 2] < this.heap[index * 2 + 1])
                ? index * 2 + 2 : index * 2 + 1; // 왼쪽 자식과 오른 쪽 자식 중 더 작은 값을 가진 인덱스 찾기
            if (this.heap[index] < this.heap[minChildIndex]) break; // 현재 노드가 자식 노드보다 작으면 종료
            
            const tmp = this.heap[index]; // 교환
            this.heap[index] = this.heap[minChildIndex];
            this.heap[minChildIndex] = tmp;
            index = minChildIndex;
        }
        return minValue; // 루트 노드 값 반환
    }
}


function solution(scoville, K) {
    const heap = new MinHeap();
    for (const eachSco of scoville) {
        heap.push(eachSco);
    }
    let mixCount = 0;
    
    while (heap.size() >= 2 && heap.peek() < K) { // 모든 음식의 스코빌 지수가 k이상일 때까지
        const first = heap.pop();
        const second = heap.pop();
        const mixedSco = first + second * 2; // 섞은 음식의 스코빌 지수 = 가장 맵지 않은 음식의 스코빌 지수 + (두 번째로 맵지 않은 음식의 스코빌 지수 * 2)
        heap.push(mixedSco); 
        mixCount++;
    }
    return heap.peek() >= K ? mixCount : -1;
}

const scoville = [1,2,3,9,10,12];
const K = 7;
console.log(solution(scoville, K));

/*
힙을 사용하지 않고 문제를 풀어보려고 했지만 
sort 함수 사용이 불가피해서 시간복잡도가 O(nlogn * n)이 나옵니다...
효율성 테스트 통과에 실패해서 힙을 구현해서 풀어보았습니다.
힙의 삽입이나 삭제의 경우 O(logn) 갖습니다.

힙을 생성하고 구성하는데 O(nlogn)의 시간복잡도를 갖고,
새로운 음식을 만들어 힙에 push 하는 과정도
최악의 경우 scoville 배열의 크기 n만큼 반복하기에 마찬가지로 O(nlogn)의 시간복잡도를 가집니다.

전체 시간복잡도는 O(nlogn)
*/