function solution(numbers) {
    const answer = [];
    const stack = [];

    for (let i = numbers.length - 1; i >= 0; i--) { // 배열을 뒤에서부터 순회
        while (stack.length && stack[stack.length - 1] <= numbers[i]) {
            // 현재 숫자보다 작거나 큰 수 제거
            stack.pop();
        }
        
        answer[i] = stack.length ? stack[stack.length - 1] : -1; // 뒷 큰수가 없으면 -1
        stack.push(numbers[i]);
    }

    return answer;
}

const numbers = [2, 3, 3, 5];
console.log(solution(numbers));

/*
stack 에 푸시한만큼 pop할 수 있기 때문에 최악의 경우에도
2n(n은 numbers의 길이)만큼의 연산을 합니다.
시간복잡도는 O(n)
*/