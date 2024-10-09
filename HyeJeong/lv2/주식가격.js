/*
function solution(prices) {
    const length = prices.length;
    const answer = new Array(length).fill(0);
    
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            answer[i]++;
            if (prices[i] > prices[j]) break;
        }
    }
    
    return answer;
}
*/
//스택을 이용한 문제라서 다시 풀어봄

function solution(prices) {
    const n = prices.length;
    const answer = new Array(n).fill(0);
    const stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && prices[i] < prices[stack[stack.length - 1]]) {
            const j = stack.pop();
            answer[j] = i - j;
        }
        stack.push(i);
    }

    while (stack.length > 0) {
        const j = stack.pop();
        answer[j] = n - 1 - j;
    }

    return answer;
}

/*
스택을 사용하여 가격이 떨어지는 시점을 효율적으로 찾음
스택에는 아직 가격이 떨어지지 않은 시점의 인덱스들이 저장됨 
현재 가격이 스택의 top에 있는 인덱스의 가격보다 낮을 때, 가격이 떨어진 것으로 판단하고 기간을 계산

시간복잡도 - O(n)
각 인덱스는 한 번씩만 스택에 push되고 pop되기 때문
이중 반복문을 사용한 O(n^2) 해결책보다 훨씬 효율적
*/
