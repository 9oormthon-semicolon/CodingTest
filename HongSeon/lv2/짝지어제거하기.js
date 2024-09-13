// 스택이용
function solution(s) {   
    let stack = [];  
    for (let i of s) {
        // 스택의 마지막 값이 현재 값과 같다면 pop 아니라면 push
        (stack[stack.length - 1] === i) ? stack.pop() : stack.push(i)
    }
    
    return stack.length === 0 ? 1 : 0;
}

/* 시간 복잡도
 - for (let i of s) : 문자열 s순회 => O(n)
 
 - pop(), push(i) : 상수시간이므로 => O(1)

 => 전체 시간 복잡도 : O(n)
*/