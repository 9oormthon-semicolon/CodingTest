// 연속적인 중복 숫자만 제거하는 문제, 단 배열 순서는 유지해야함
// 배열의 이전 원소를 따로 저장 하는 방식으로 접근
function solution(arr)
{   
    // 정답 배열
    let result = []
    
    // 이전 원소 저장 변수
    let prev = arr[0]
    // 첫 원소는 중복 x이므로 정답 배열에 추가
    result.push(prev)
    
    // arr 배열의 2번째 부터 순회
    for(let i = 1; i < arr.length; i++){
        // 현재 원소가 이전 원소(prev)와 같지 않다면 중복x
        // 현재 원소를 정답 배열에 추가 후 이전 원소를 현재 원소로 갱신
        if (arr[i] !== prev){
            result.push(arr[i])
            prev = arr[i]
        }
    }
    
    return result
}

function solution2(arr) {
    // 스택
    let stack = [];
    
    // 배열 순회
    for (let i = 0; i < arr.length; i++) {
        // 스택이 비어있거나 스택의 최상단 원소와 현재 원소가 다를 경우에만
        // 스택에 현재 원소를 추가
        if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
        }
    }
    
    return stack;
}


/* 시간 복잡도
1.
    let prev = arr[0]
    result.push(prev)
    - 상수시간 => O(1)

2.
    for(let i = 1; i < arr.length; i++){
        if (arr[i] !== prev){
            result.push(arr[i])
            prev = arr[i]
        }
    }
    - 배열길이 n에 비례하여 n-1번 반복 => O(n-1), 차수제거 => O(n)
    - 원소 추가와 갱신은 상수시간 => O(1)

코드 전체 시간 복잡도 => O(n)

3. 스택을 이용한 코드 시간 복잡도
    for (let i = 0; i < arr.length; i++) {
        if (stack.length === 0 || stack[stack.length - 1] !== arr[i]) {
            stack.push(arr[i]);
        }
    }
    - 배열길이 n이므로 n번 반복 => O(n)
    
코드 전체 시간 복잡도 => O(n)
*/