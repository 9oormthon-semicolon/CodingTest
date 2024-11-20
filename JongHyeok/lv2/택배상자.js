function solution(order) {
    let result = 0;
    const stack = [];

    for (let i = 1; i <= order.length; i++) {
        stack.push(i); // 스택 채우기
    
        // 스택의 상자 번호가 주어진 순서와 일치하는지 확인
        while (stack.length !== 0 && stack[stack.length - 1] === order[result]) {
            stack.pop(); // 일치하는 상자 번호는 스택에서 제거
            result++;
        }
    }
    return result;
}

const order = [4,3,1,2,5];
console.log(solution(order));

/*
스택을 채우고 제거하는 횟수는 각각 N번으로,
총 2N번이기 때문에
시간복잡도는 O(N)
*/