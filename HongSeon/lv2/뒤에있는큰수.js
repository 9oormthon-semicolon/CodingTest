function solution(numbers) {
    // -1로 초기화하여 "다음 큰 수"가 없는 경우를 대비
    let result = new Array(numbers.length).fill(-1);
    // 스택 (인덱스 저장)
    let stack = []; 

    for (let i = 0; i < numbers.length; i++) {
        // 스택에 저장된 인덱스가 있다면 반복 
        while (stack.length) {
            // numbers [i]번째 숫자 > numbers [stack의 마지막 요소(인덱스)]번째 숫자보다 크면
            if (numbers[i] > numbers[stack[stack.length - 1]]) {
                // result [stack의 마지막 요소(인덱스)]번째 = numbers [i]번째 숫자
                result[stack.pop()] = numbers[i];
            } else {
                // 스택에 현재 인덱스 저장 후 종료
                stack.push(i);
                break;
            }
        }
        // 스택에 현재 인덱스 저장
        stack.push(i);
    }

    return result;
}

/* 시간복잡도
 - for (let i = 0; i < numbers.length; i++) [numbers 순회]: O(n)
   - while (stack.length) [스택 처리]: O(1) 
     - 이 부분이 헷갈릴 수 있는데, 이중 반복문처럼 보일 수 있지만 스택에 있는 각 요소는 최대 한 번만 추가(push)되고 한 번만 제거(pop)된다.

 => 전체 시간 복잡도 : O(n)
*/
