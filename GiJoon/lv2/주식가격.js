function solution(prices) {
    
    const stack = []
    const result = [...prices].fill(0)
    
    prices.forEach((v,i) => {
        while (stack.length && v < prices[stack[stack.length - 1]]) {
            const idx = stack.pop()
            result[idx] = i - idx
        }
        stack.push(i)
    })
    
    stack.forEach(idx => {result[idx] = prices.length - 1 - idx})
    
    return result
}

/*
    스택의 마지막 값이 자신보다 작다면 누적값을 저장하면 됩니다.
    
    근데 인덱스니까 현재 idx - 스택에서 꺼낸 idx로 값을 만들고
    후에 스텍에 있는 인덱스를 정리해줍니다. 
    
    자신이 떨어진 적이 없기 때문에 마지막 인덱스 - 본인을 순서를 해주면
    가격이 떨어지지않는 기간을 구할 수 있습니다.
    
    prices.forEach = O(N)
    while = O(N)
    stack.forEach = O(N)
    
    O(N)
*/