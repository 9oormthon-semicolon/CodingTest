function solution(order) {
    let stack = []
    // 현재 실어야 하는 상자의 인덱스
    let idx = 0

    for (let i = 1; i <= order.length; i++) {
        // 상자를 stack에 추가 (1부터 시작)
        stack.push(i)

        // 스택이 존재하고, 스택의 마지막 원소가 현재 실어야하는 상자와 같다면
        // 스택에서 제거 후 idx 이동
        while (stack.length > 0 && stack[stack.length - 1] === order[idx]) {
            stack.pop()
            idx++
        }
    }
    
    // 최종 idx값은 실을 수 있는 상자의 수
    return idx
}

/* 시간 복잡도 
 - for (let i = 1; i <= order.length; i++) : O(n)
    - while (stack.length > 0 && stack[stack.length - 1] === order[idx]) : O(n)

 => 전체 시간 복잡도 : O(2n) => O(n)
 ** O(n^2)가 아닌 이유? 
 ** 각 상자는 정확히 한 번만 스택에 추가되고 한 번만 제거되기 때문에 while 루프는 모든 상자에 대해 최대 n번 실행
*/

// 뭔가 greedy 같은데 또 아닌 것 같기도....