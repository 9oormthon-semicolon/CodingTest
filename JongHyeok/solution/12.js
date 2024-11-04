// 문제 12 주식 가격
function solution(prices) {
    const answer = [];
    const stack = [];

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            // 현재 가격이 스택의 맨 위에 있는 시점의 가격보다 낮을 때
            const sec = stack.pop(); // 가격이 떨어진 시점
            answer[sec] = i - sec; // 걸린 시간
        }
        stack.push(i);
    }

    while (stack.length > 0) { // 끝까지 가격이 떨어지지 않은 경우
        const sec = stack.pop(); 
        answer[sec] = (prices.length - 1) - sec; // 그 가격이 추가된 시점부터 끝까지 시간
    }

    return answer;
}

const prices = [1,2,3,2,3];
console.log(solution(prices));

/*
권장 시간 복잡도 O(N)
---
'길이를 확정한 주식은 이후 계산에서 제외하기'가 연산 줄이기의 핵심
결국 스택에 남는 원소는 길이를 확정하지 않은, 다시 말해 가격이 끝까지 떨어지지 않은 주식.
*/