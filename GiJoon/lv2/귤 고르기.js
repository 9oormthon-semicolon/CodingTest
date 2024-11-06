function solution(k, tangerine) {
    let acc = 0
    
    const sizeCnt = tangerine.reduce((obj, size) => {
        obj[size] = (obj[size] || 0) + 1
        return obj
    }, {})

    const cnts = Object.values(sizeCnt).sort((a, b) => b - a)
    
    for (let i = 0; i < cnts.length; i++) {
        if (acc + cnts[i] >= k) return ++i
        acc += cnts[i]
    }
    
    return k
}


/*    
    1. tangerine.length 중에서 k개를 선택
    2. 선택한 크기 종류가 최소인 개수 return
    
    그리디 문제...
    
    개수가 가장 많은 것부터 차례대로 개수를 세면 
    최소 개수를 구할 수 있기에 크기별로 정렬한 뒤 개수를 세서 문제를 해결했습니다.
    
    sizeCnt = O(n)
    cnts = O(m log m)
    for(...) = O(m)
    
    O(n + m log m)
*/