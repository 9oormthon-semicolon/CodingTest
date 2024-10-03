function solution(numbers) {
    const result = new Array(numbers.length).fill(-1);
    const stack = [];

    for (let i = 0; i < numbers.length; i++) {
        while (stack.length > 0 && numbers[stack[stack.length - 1]] < numbers[i]) {
            result[stack.pop()] = numbers[i];
        }
        stack.push(i);
    }

    return result;
}

/*
result 배열을 생성하고 모든 원소를 -1로 초기화 (뒷 큰수가 없는 경우를 대비)
빈 스택 stack을 생성하고 스택은 인덱스를 저장하기 위함
numbers 배열을 순회하면서 스택이 비어있지 않고, 스택의 top에 있는 인덱스의 값이 현재 숫자보다 작다면 스택에서 pop한 인덱스의 뒷 큰수를 현재 숫자로 설정
현재 인덱스를 스택에 push
모든 순회가 끝나면 result 배열을 반환

시간복잡도 - O(n)
각 요소를 한번씩만 처리하므로 
*/
