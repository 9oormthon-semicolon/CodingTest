function solution(n, left, right) {
    const arr = []
    
    for (let i = left; i <= right; i++) {
        const num = i % n
        const col = i / n | 0
        
        arr.push(num > col ? num + 1 : col + 1)
        
    }
    return arr
}

/*
    gif 없었으면 이해가 쉽지 않을 것 같은 문제
    
    1234
    2234
    3334
    4444
    
    의 정사각형을 하나의 arr로 만둔 뒤 left right에 해당하는 값만 뽑아서 리턴하면 되는 문제
    
    O(right − left + 1)
*/