// 문제 09 10진수를 2진수로 변환하기
function solution(decimal) {
    const stack = [];
    while (decimal > 0) {
        const remainder = decimal % 2;
        stack.push(remainder);
        decimal = Math.floor(decimal / 2);
    }
    let binary = "";
    while (stack.length > 0) {
        binary += stack.pop();
    }
    return binary;
}

const decimal = 10;
console.log(solution(decimal));

/*
권장 시간 복잡도 O(logN)
---
*/