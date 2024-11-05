// 문제 15 요세푸스 문제

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
    for (let i = 0; i <= N; i++) {
        queue.push(i);
    }
    while (queue.size() > 1){
        for (let i = 0; i < K - 1; i++) {
            queue.push(queue.pop());
        }
        queue.pop();
    }
    return queue.pop();
}

const N = 5, K = 2;
console.log(solution(N,K));

/*
권장 시간 복잡도 O(N*K)
---
*/