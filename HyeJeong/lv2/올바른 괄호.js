function solution(s){
    const stack = []; //'('괄호를 저장하기 위해 스택을 빈 배열로 초기화
    
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){ //'('일 경우 스택에 추가
            stack.push(s[i]);
        }
        else if(s[i] ===')'){ //')'는 스택에서 '(' 이 괄호를 제거함
            if(stack.length === 0){
                return false; //만약 스택이 비어있으면 false 반환
            }
            stack.pop();
        }
    }

    return stack.length === 0; //for문 다 돌고 난 뒤 스택이 비어있으면 올바른 괄호가 된 것. 그렇지 않으면 올바른 괄호가 아님
}

//시간복잡도
//for문 - O(n) (n은 문자열 길이)
//스택 연산 - O(n) (push와 pop은 각각 O(1)의 시간복잡도를 가짐)
//결과 : O(n) 
