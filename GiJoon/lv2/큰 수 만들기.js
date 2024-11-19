function solution(number, k) {
    const s = []
    
    for (const num of number) {
        //스택에 남아있는 마지막 값이 cur보다 작으면 pop
        while(0 < s.length && s[s.length - 1] < num && 0 < k) {
            k--
            s.pop()
            
        }
        s.push(num)
        
    }
    
    //k가 남았을 떄
    while (k > 0) {
        s.pop()
        k--
    }
    
    return s.join('')
}

/*
    앞에서만 k만큼 원소를 제거 가능한 순?열 
    스택을 이용해서 cur보다 작은 숫자가 남아있지 않게 구현함
    
    ex) 
    [1]
    [1] 9
    [] 9
    [9]
    [9] 2
    [9, 2] 4
    [9] 4
    [9, 4]
    
    O(2N) -> O(N)
*/