function solution(n) {
    if (n === 1) return 1
    if (n === 2) return 2
    
    let n1 = 1 
    let n2 = 1
    let result = 0
    
    for (let i = 1; i < n; i++) {
        result = (n1 + n2) % 1000000007
        n1 = n2
        n2 = result
    }
    
    return result
}

