// Greedy 알고리즘
function solution(number, k) {
    const stack = [] 

    for (let i = 0; i < number.length; i++) {
        const now = number[i]
        
        // 1.스택이 비어있지 않고 
        // 2.스택의 마지막 값이 현재 숫자보다 작고 
        // 3.제거할 수 있는 횟수가 남아 있는 경우
        while (stack.length > 0 && stack[stack.length - 1] < now && k > 0) {
            // 스택에서 마지막 숫자를 제거
            stack.pop() 
            k-- // 제거 횟수 감소
        }
        // 현재 숫자를 스택에 추가
        stack.push(now) 
    }
    
    // 스택에서 뒤쪽 k개의 숫자를 제거
    if (k > 0) stack.splice(stack.length - k, k) 
    
    return stack.join('') 
}

/* 시간 복잡도 
 - for (let i = 0; i < number.length; i++) : O(n)

 - while (stack.length > 0 && stack[stack.length - 1] < now && k > 0) : O(n)

 - if (k > 0) stack.splice(stack.length - k, k)  : O(n)

 => 전체 시간 복잡도 : O(n)
*/

// 스택이 비어있지 않고, 스택의 마지막 아이템이 현재 들어오는 숫자보다 작다면 계속해서 지워주는 방법