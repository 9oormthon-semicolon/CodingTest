function solution(arr)
{
    let stack = [];
    for(let i = 0; i < arr.length; i++) {
        if(stack.length === 0 || stack[stack.length-1] !== arr[i]){
            stack.push(arr[i]);
        }
    }
    return stack;
}

const arr = [1,1,3,3,0,1,1];
console.log(solution(arr));

/* 
arr 배열을 첫 번째 요소부터 순회하며 스택이 비어있거나,
스택 맨 위에 값이 현재 arr의 요소와 같다면 스택에 넣지 않았습니다.
1개의 반복문 안에 if 조건문과 push 함수가 있습니다.
반복문의 시간 복잡도는 O(n)이며 조건문과 삽입 함수의 시간 복잡도는 둘 다 O(1)이므로
solution 함수의 시간 복잡도는 O(n)입니다. */