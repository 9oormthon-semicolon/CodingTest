function solution(n) {
    if(n == 0) return 0
    if(n == 1) return 1
    
    let idx = 2
    let prev = 1, pprev = 0, temp
    
    while (n >= idx){
        temp = (prev + pprev) % 1234567
        pprev = prev
        prev = temp
        idx++
        
    }
    
    return prev
}