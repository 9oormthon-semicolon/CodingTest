function solution(msg) {
    let memo = new Map([...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].map((v, idx) => {return [v, idx + 1]}))
    const len = msg.length - 1
    let prev = ""
    
    return [...msg].reduce((result,cur,idx) => {   
        const sumChar = prev + cur
        
        if(memo.has(sumChar)) prev = sumChar //prev 합친값으로 초기화
        
        else {
            memo.set(sumChar,memo.size + 1) // 사전 등록
            result.push(memo.get(prev)) //prev 사전 번호 push
            prev = cur //prev 초기화
        }
        
        if(idx === len) result.push(memo.get(prev)) //마지막 prev 처리
        
        return result
    },[])
}

/*  
    우선 사전의 길이(size)와 값이 있는지 판별해야하므로(has) obj대신 map을 사용하였습니다.
    
    "사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다."를 구현하기 위해서
    이전 단어를 기억해서 현재 단어와 합쳤을 때 사전에 있을 때 없을 때를 구분했습니다.
    
    현재 합친단어가 존재 한다면 합친 단어를 prev에 넘깁니다.
    
    합친 단어가 존재하지 않는다면 메모한 단어의 사전 번호를 결과에 push하고 합친 단어를 사전에 등록했습니다. (무한 반복)
    
    반복문이 끝난 뒤에 prev에 남아있는 단어가 있기에
    따로 마지막에 처리를 해줘서 해결하였습니다.
    
    O(N)
*/