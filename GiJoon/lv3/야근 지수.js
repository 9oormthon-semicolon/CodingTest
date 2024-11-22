class MaxHeap {
    constructor() {
        this.heap = [];
    }

    swap(idx1, idx2) {
        [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
    }
    
    add(v) {
        this.heap.push(v);
        this.bubbleup();    
    };
  
    bubbleup(){
        let cur = this.heap.length - 1;
        let parents = (cur - 1) / 2 | 0;
        const heap = this.heap;
        
        while (cur > 0) {
            if (heap[cur] < heap[parents]) break;
            
            this.swap(cur, parents);
            cur = parents;
            parents = (cur - 1) / 2 | 0;
        };
    };

    bubbledown(cur) {
        const heap = this.heap;
        while (cur < heap.length) {
            let max = cur;
            const left = cur * 2 + 1;
            const right = cur * 2 + 2;

            if (left < heap.length && heap[max] < heap[left]) max = left;
            if (right < heap.length && heap[max] < heap[right]) max = right;

            if (cur === max) break;

            this.swap(cur, max);
            cur = max; 
        }
    }
}

function solution(n, works) {
    const WORKS = new MaxHeap();
    
    //원소 추가
    works.forEach(v => WORKS.add(v))

    for (let i = 0; i < n; i++) {
        //제일 큰수가 0이면 계산 필요x
        if (WORKS.heap[0] === 0) break;
        
        //제일 큰 수 -1 뒤 정렬
        WORKS.heap[0] -= 1;
        WORKS.bubbledown(0);
    }

    return WORKS.heap.reduce((acc, v) => acc + v ** 2, 0);
}

/*
    n(피로도)을 소모해서 works의 숫자를 최대한 비슷하게 구성하면 풀 수 있는 문제입니다.
    처음에 sort로 간단하게 로직을 구현했지만, 효율성 테스트를 실패하여 정렬속도가 안정적인 
    최대 힙을 이용해서 풀었습니다. 
    
    js에서 힙 구현이 제일 곤란해용
    O(N)
    
*/