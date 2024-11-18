    

function solution(n, k) {
    const numbers = Array.from({ length: n }, (_, idx) => idx + 1)
    const arr = []
    k--

    const getFacto = (N) => {
        if (N <= 1) return 1
        let acc = 1
        for (let i = 2; i <= N; i++) acc *= i 
        
        return acc
    }
    
    for (let i = n; i > 0; i--) {
        const f = getFacto(i - 1)
        const idx = (k / f) | 0
        arr.push(numbers[idx])
        numbers.splice(idx, 1)
        k %= f
    }
    
    return arr
}

/*
    모둔 순열을 찾아서 return 했으나 	
    실패 (signal: aborted (core dumped)) 메모리가 너무 커서 깨짐
    
    팩토리얼을 사용하는 방향으로 바꿨습니다
    
    숫자 순서는 현재인덱스 / 본인을 제외한 경우의 수로 도출했습니다

    ex) 
    wanna [2 ,3 ,1]
    
    [1, 2 ,3]
    [1, 2 ,3]
    [2, 1 ,3]
    [2, 3 ,1]
    
    [1, 3]
    [3, 1]
    
    [1]
    
    O(n ^ 2)
*/