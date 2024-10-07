class MinHeap {
    constructor(arr = []) {
        this.heap = []
        arr.forEach(v => this.insert(v))
    }
    
    insert(v) {
        this.heap.push(v)
        this.heapUp()
    }
    
    extractMin() {
        if (this.heap.length === 0) return null
        if (this.heap.length === 1) return this.heap.pop()
        
        const minValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapDown()
        return minValue
    }

    minValue() {
        return this.heap[0]
    }
    
    getLength() {
        return this.heap.length
    }
    
    heapUp() {
        let idx = this.heap.length - 1
        
        while (idx > 0) {
            const parentIdx = (idx - 1) / 2 | 0 // 부모 idx
            
            if (this.heap[parentIdx] > this.heap[idx]) {  // 부모 값이 자식보다 크면 교환
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                idx = parentIdx
            } 
            
            else break
            
        }
    }
    
    heapDown() {
        let idx = 0
        const length = this.heap.length

        while ((2 * idx + 1) < length) {
            const leftChildIdx = 2 * idx + 1
            const rightChildIdx = 2 * idx + 2
            let smallerChildIdx = leftChildIdx

            // 오른쪽 자식이 존재하고, 오른쪽 자식이 왼쪽 자식보다 작을 경우
            if (rightChildIdx < length && this.heap[rightChildIdx] < this.heap[leftChildIdx]) 
                smallerChildIdx = rightChildIdx
            

            // 부모와 더 작은 자식 노드를 비교
            if (this.heap[idx] > this.heap[smallerChildIdx]) {
                [this.heap[idx], this.heap[smallerChildIdx]] = [this.heap[smallerChildIdx], this.heap[idx]]
                idx = smallerChildIdx
            } 
            
            else break
        }
    }

    scovilleCompute() {
        const min1 = this.extractMin()
        const min2 = this.extractMin()
        const mixFood = min1 + (min2 * 2)
        this.insert(mixFood)
    }
}

function solution(scoville, K) {
    let heap = new MinHeap(scoville)
    let cnt = 0
    
    while (heap.getLength() > 1) {    
        if (heap.minValue() >= K) return cnt
        
        heap.scovilleCompute()
        cnt++
    }
    
    return heap.minValue() >= K ? cnt : -1
}

/*
    문제만 간단합니다. 
    배열안의 최소 스코빌 지수가 K보다 작으면 두 번째로 작은 스코빌 지수와 특별 계산 방법으로
    매운맛을 섞어서 다시 배열에 집어넣습니다. 이 과정을 반복하여 K보다 작은 스코빌 지수가 없으면 횟수 리턴하고
    없으면 -1을 리턴하는 간단한 문제 입니다. 
    
    이를 구현하기에는 heap이 가장 좋은 방법 같습니다. 
    안하면 일일히 sort 해줘야하기도 하고 그러면 n^2 log n이 됩니다.
    또 목차에 heap이 써있기에 heap을 구현했는데
    
    초기에 최소힙 + 힙업 + 스코빌 연산 섞어서 삽입 + 정렬까지는 구현했는데,
    최솟값 추출하면서 힙구조 깨지는 것을 간과하고 문제를 푸는 바람에 문제를 풀지 못했습니다.
    
    때문에 다름 사람의 풀이를 보고 힙다운을 새로 구현해서 최솟값을 추출한 뒤, 다시 힙형태로 만들어주는 힙 다운을 구현하여
    다시 풀었습니다.
    
    extractMin => O(log n) 
    insert => O(log n)
    
    for (heap.length) => O(N)
    
    O(N log N)
*/
