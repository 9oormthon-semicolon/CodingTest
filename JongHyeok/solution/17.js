// 문제 17 카드 뭉치
class Queue {
    items = [];
    front = 0;
    rear = 0;

    constructor(array) {
        this.items = array;
        this.rear = array.length;
    }

    push(item) {
        this.items.push(item);
        this.rear++;
    }
    pop() { return this.items[this.front++]; }
    first() { return this.items[this.front]; }
    isEmpty() { return this.front === this.rear; }
}

function solution(cards1, cards2, goal) {
    // 모두 큐로 변환
    cards1 = new Queue(cards1);
    cards2 = new Queue(cards2);
    goal = new Queue(goal);

    while(!goal.isEmpty()) { // goal 큐가 빌 때까지
        if(!cards1.isEmpty() && cards1.first() === goal.first()){
        // 순서대로 꺼내야 하기 때문에 card1의 맨 앞과 일치하면
            cards1.pop();
            goal.pop();
        } else if(!cards2.isEmpty() && cards2.first() === goal.first()){
        // card2의 맨 앞과 일치하면
            cards2.pop();
            goal.pop();
        } else break; // 일치하는 게 없으면 중단
    }
    return goal.isEmpty() ? "Yes" : "No";
}

const cards1 = ["i", "drink", "water"], cards2 = ["want", "to"], goal = ["i", "want", "to", "drink", "water"];
console.log(solution(cards1, cards2, goal));

/*
권장 시간 복잡도 O(N+M)
---
goal의 길이 M만큼 시간복잡도 O(M)
*/