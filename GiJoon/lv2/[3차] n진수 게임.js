function solution(n, t, m, p) {
    let i = 0
    let answer = ''
    const lastOrder = t * m + (p - 1)
    
    while (answer.length < lastOrder) { // 튜브가 t횟수만큼 말할 때까지 모든 문자열 추출 
        answer += i.toString(n).toUpperCase() //10진수를 초과하면 소문자로 반환 함 때문에 대문자로 변경
        i++
    }
    
    //튜브 차레 추출 및 합치기
    return [...answer.slice(p - 1, lastOrder)]
        .filter((v, idx)=> idx % m === 0)
        .join('')
}

//n N 진수
//t 튜브가 외치는 횟수
//m 참가하는 인원
//p 튜브의 순서

/*
    1부터 n까지 369
    근데 n진수로 바꾸고 한 글자씩만 말하기
    
    튜브가 마지막으로 외치는 값까지만 필요하니까 
    튜브의 마지막 순서를 리밋으로 
    인원 수 * 외치는 횟수 + (튜브의 순서 - 1) 인덱스니까 - 1
    
    모든 외치는 숫자를 answer에 담은 뒤 튜브가 해당하는 순서의 값만 추출해서 문자열로 만들어서
    풀었습니다.
    
    while = O(t * m + p log N(t * m + p) 인가보네용) 라는데 이해가 안됨 N진수 변환 + uppercase가 log N(t * m + p) 인가보네용
    slice, filter, join = O(t * m)
    
    O(t * m * log N(t * m))
    
    처음 보면 문제 조건 이해하기 나름 난해한 문제인데 
    한 번 풀었던 문제라 쉽게 풀었습니다.
    
*/ 
