class MaxHeap {
    constructor() { this.heap = []; }

    size() { return this.heap.length; }

    swap(idx1, idx2) { [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]]; }
    
    add(num) {
        this.heap.push(num);
        this.bubbleUP();
    }
    
    bubbleUP() {
        const heap = this.heap;
        let curIdx = this.size() - 1;
        let parentIdx = Math.floor((curIdx - 1) / 2);
        
        while (curIdx > 0 && heap[curIdx] > heap[parentIdx]) {
            this.swap(curIdx, parentIdx);
            curIdx = parentIdx;
            parentIdx = Math.floor((curIdx - 1) / 2);
        }
    }
    
    del() {
        const max = this.heap[0];
        
        if (this. size() == 0) return null;
        if (this.size() == 1) return this.heap.pop();
        
        this.heap[0] = this.heap.pop();
        this.bubbleDOWN();
        
        return max;  
    }
    
    bubbleDOWN() {
        let curIdx = 0;
        const heap = this.heap;
        const size = this.size();  
        
        while (curIdx < size) {
            let large = curIdx;
            let left = curIdx * 2 + 1;
            let right = curIdx * 2 + 2;
            
            if (left < size && heap[large] < heap[left]) large = left;
            
            if (right < size && heap[large] < heap[right]) large = right;
            
            if (large === curIdx) break;
            
            this.swap(large, curIdx);
            curIdx = large;
        }
    }
}


//병사 수, 무적 횟수, 웨이브 + 적의 수
function solution(n, k, enemy) {
    const heap = new MaxHeap();
    
    for (let i = 0; i < enemy.length; i++) {
        n -= enemy[i];
        heap.add(enemy[i]);
        
        if (n >= 0) continue;
        
        if (k === 0) return i;
    
        k--;
        n += heap.del();
        
    }
    return enemy.length;
}


/*
    적의 수만큼 병사의 수를 희생시켜서 최대한 많은 라운드를 넘기면 되는 게임
    근데 무적 스킬이 있어서 최대한 많은 적이 있을 때 무적 횟수를 소모해야합니다.
    
    가장 큰 수가 배치되는 최대힙을 사용해서 해결했습니다.

    
*/