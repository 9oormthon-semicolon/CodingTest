function solution(arr)
{
    const answer =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}
//arr[i]가 다음 요소인 arr[i+1]와 다를 경우에만 answer 배열에 추가
//push 메소드를 사용하여 연속된 숫자가 아닐경우 그 숫자를 answer배열에 추가
//시간복잡도 - O(n)

function solution(arr){
    const stack = [];
    for(let i=0; i<arr.length; i++){
        if(stack.length === 0 || stack[stack.length-1] !== arr[i]){
            stack.push(arr[i]);
        }
    }
    return stack;
}
//빈 배열을 스택으로 사용
//스택이 비어있꺼나 현재 요소가 스택의 마지막 숫자와 다를 경우, 현재 요소를 스택에 추가
//스택 특성상 마지막에 추가된 요소가 제일 위에 위치하므로 연속된 숫자는 제거가 됨
//큐를 이용해서 코드를 짜도 방법이 같으므로 생략

//추가!
//스택과 큐의 차이 
//스택 - LIFO
//큐 - FIFO
