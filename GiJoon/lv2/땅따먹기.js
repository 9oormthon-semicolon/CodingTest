function solution(topping) {
    const len = topping.length
    
    if(len == 1) return 0
    
    //결과 저장
    const check = Array.from({ length: len + 1}, () => [0, 0])
    const left = new Set()
    const right = new Set()
    
    //좌우 한 번에 계산
    for (let i = 0; i < len; i++) {
        const j = len - i - 1
        
        left.add(topping[i])
        right.add(topping[j])
        
        check[i + 1][0] = left.size
        check[j][1] = right.size
    }
    
    //left랑 right의 값이 같은 값만 카운트
    return check.reduce((cnt, [a, b]) => {
        if(a === b) cnt++
        return cnt
    },0)
}

/*
    반복문 하나로 할려고 set을 두 개나 사용해서 그런지 엄청 무겁네요...

    O(N)
    
*/