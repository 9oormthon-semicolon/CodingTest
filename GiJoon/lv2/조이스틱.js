function solution(name) {
    let answer = 0;
    
    const Alpha = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'].reduce((obj, v, idx) => {
        obj[v] = idx > 13 ? 26 - idx : idx
        return obj
    }, {})
    
    const len = name.length
    let cursorMove = len - 1 
    
    for (let i = 0; i < len; i++) {
        answer += Alpha[name[i]]
        
        //A 건뛰
        let i_ = i + 1
        while (i_ < len && name[i_] === 'A') {
            i_++
        }
        
        //커서 무브 최적화 
        //본인 기준 먼저 시작
        cursorMove = Math.min(
            cursorMove, //기본 순차
            i * 2 + len - i_,  //우측 기준으로 커서를 움직이고 i부터 순차적으로 셈
            (len - i_) * 2 + i  //좌측 기준으로 커서를 움직이고 i 부터 순차적으로 셈
        )
        
    }
    
    return answer + cursorMove
}

/*
    
    알파벳 변경 횟수 + 커서 횟수를 세야하는 문제인데
    알파벳은 그냥 삼항연산자로 쉽게 최적화된 구현이 가능하지만,
    
    커서는 따로 최적화를 해줘야합니다.
    그냥 순차적으로 세는 방법과 
    우측으로 순차적으로 세다가 좌측 끝으로 빠지냐,  ex) JAAAAZZZZZZ J바꾸고 우측으로 빠져서 세는게 빠름
    좌측 기준으로 빠지고 순차적으로 세느냐 ex) JANANANAAAAAAZ Z먼저 세고 좌측으로 빠져서 세는게 빠름

    이 세가지 중에 제일 작은 값을 구해서 알파벳 변경횟수에 더해주는 방식으로 구현했습니다.
    
    뇌가 너무 아파요... 그리디 너무 어렵네요
    
    O(n)

*/