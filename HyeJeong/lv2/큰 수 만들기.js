function solution(number, k) {
    const stack = [];
    let count = 0;
    
    for (let i = 0; i < number.length; i++) {
        const cur = number[i];
        
        while (count < k && stack.length > 0 && stack[stack.length - 1] < cur) {
            stack.pop();
            count++;
        }
        
        if (count < k || stack.length < number.length - k) {
            stack.push(cur);
        }
    }
    
    while (count < k) {
        stack.pop();
        count++;
    }
    
    return stack.join('');
}

/*
빈 스택을 생성
주어진 숫자 문자열을 순회하면서 현재 숫자가 스택의 top에 있는 숫자보다 크다면, k개를 제거하지 않은 한 스택에서 pop
현재 숫자를 스택에 push(이미 충분한 숫자를 제거했거나 스택이 결과 길이에 도달하지 않은 경우에만)
모든 숫자를 순회한 후에도 k개를 모두 제거하지 않았다면, 스택에서 남은 개수만큼 pop
최종적으로 스택에 남아있는 숫자들을 문자열로 합쳐 반환

시간 복잡도 - O(n) n은 주어진 숫자 문자열의 길이 
각 숫자를 최대 한 번씩만 처리하기 때문
*/
