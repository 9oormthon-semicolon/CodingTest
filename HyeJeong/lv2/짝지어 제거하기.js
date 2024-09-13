function solution(s){
    //스택 이용
    //현재 문자와 스택 맨 위의 문자를 비교하여 같으면 없애고, 다르면 스택에 추가
    const stack = [];
    
    for(let sen of s){
        if(stack.length>0 && stack[stack.length -1] === sen){ //스택의 맨 위의 문자가 현재 문자랑 같으면 pop
            stack.pop();
        }
        else //그렇지 않으면 push
            stack.push(sen);
    }
    //모든 문자가 짝지어서 되었다면 1을 반환 그렇지 않다면 0을 반환
    return stack.length === 0 ? 1 : 0;
}

//시간 복잡도
//for문을 돌면서 각 문자를 한번씩 처리
//O(n) n은 s의 길이
