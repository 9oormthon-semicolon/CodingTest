// 오늘은 파이썬이 많이 그리운 문제네요...ㅠ
// npm install heap
// const { MinHeap } = require('heap'); 
// 코테일 떄 이거 가능하게 해줘야 한다고 생각합니다
class Heap {
    constructor() {
        // 힙배열 초기화, 
        // null을 넣는 이유 = 인덱스가 1부터 시작해야 하기 때문
        this.Heap = [null]
    }

    // 두 인덱스 스왑하는 메서드
    swap(Idx1, Idx2) {
        [this.Heap[Idx1], this.Heap[Idx2]] = [this.Heap[Idx2], this.Heap[Idx1]]
    }

    // 힙에 값을 추가하는 메서드
    push(value) {
        // 새로운 값을 힙배열의 끝에 추가
        this.Heap.push(value)
        // 현재 인데스
        let curIdx = this.Heap.length - 1
        // 부모 노드 인덱스
        let parentIdx = Math.floor(curIdx / 2)
        
        // 부모 노드가 존재하고 부모의 노드 값이 새로 추가된 값보다 클 때 스왑함
        while(parentIdx && this.Heap[parentIdx] > value){
            // 현재 노드와 부모 노드 스왑
            this.swap(curIdx, parentIdx)
            // 현재 노드를 부모 노드로 업데이트
            curIdx = parentIdx
            // 새로운 부모 노드 인덱스 계산
            parentIdx = Math.floor(curIdx / 2)
        }
    }
    
    // 힙에서 가장 작은 값을 제거하고 반환하는 메서드
    pop() {
        // 힙에 원소 2개(null, 루트)만 남아있을 경우에는 바로 원소를 반환
        if(this.Heap.length === 2) return this.Heap.pop()
        
        // 힙의 최상단(가장 작은 값)을 반환할 값으로 저장
        const returnValue = this.Heap[1]
        // 힙의 마지막 원소를 최상단으로 이동
        this.Heap[1] = this.Heap.pop()

        // 현재 노드 인덱스, 왼쪼 자식 인덱스, 오른쪽 자식 인덱스
        let curIdx = 1
        let leftIdx = 2
        let rightIdx = 3

        // 현재 노드가 자식노드보다 크면 자식 노드와 스왑하는 과정을 반복
        while(this.Heap[leftIdx] && this.Heap[curIdx] > this.Heap[leftIdx] ||
            this.Heap[rightIdx] && this.Heap[curIdx] > this.Heap[rightIdx]
        ){
            // 왼쪽 자식과 오른쪽 자식 중 더 작은 자식과 스왑
            const smallerIdx = this.Heap[rightIdx] && this.Heap[rightIdx] < this.Heap[leftIdx] ? rightIdx : leftIdx
            this.swap(curIdx, smallerIdx)
            // 현재 노드를 스왑한 자식 노드로 업데이트
            curIdx = smallerIdx
            // 새로운 왼쪽 자식 인덱스 계산
            leftIdx = curIdx * 2
            // 새로운 오른쪽 자식 인덱스 계산
            rightIdx = curIdx * 2 + 1
        }
        // 제거된 최상단 노드의 값을 반환
        return returnValue
    }

    // 힙의 최상단 값이 주어진 스코빌 지수 이상인 확인하는 메서드
    isScoville(value) {
        return this.Heap[1] >= value
    }
}

function solution(scoville, K) {
    // 위에 만든 Heap클래스의 인스턴스 생성
    const h = new Heap()
    // 섞는 횟수를 저장하는 변수
    let min = 0

    // 모든 스코빌 지수를 힙에 삽입
    for(let num of scoville) h.push(num)
    
    // 힙의 최상단 값이 목표 스코빌 지수보다 작을 때 반복
    while(!h.isScoville(K)){
        // 힙에 원소가 2개 미만이면 섞을 수 없으므로 -1 리턴
        if(h.Heap.length < 3) return -1

        // 가장 작은 값 추출
        const first = h.pop()
        // 두 번째로 작은 값 추출
        const second = h.pop()
        // 새로운 스코빌 지수 계산
        const newScoville  = first + (second * 2)
        // 새 스코빌 지수를 힙에 삽입
        h.push(newScoville)
        // 횟수 ++
        min++
    }

    return min
}

/* 시간복잡도
 Class 함수
    - push() : O(logn)
    - swap() : O(1)
    - pop() : O(logn)

 Solution 함수
    - for(let num of scoville) : O(n)
        - h.push(num) : O(logn)
    따라서, O(nlogn)

    - while(!h.isScoville(K)) : O(n)
        - pop() : O(logn) 
        - push() : O(logn)
    따라서, O(nlogn)

 => 전체 시간 복잡도 : O(nlogn)
*/