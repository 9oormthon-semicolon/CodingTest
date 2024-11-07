function solution(x, y, n) {
    if (x === y) return 0
    
    //메모리 아낄려고 한 번 빼서 해봄
    let target = y - x
    let dp = Array(target + 1).fill(Infinity)
    
    dp[0] = 0

    for (let i = 0; i <= target; i++) {
        if (dp[i] === Infinity) continue;
        
        if (i + n <= target) dp[i + n] = Math.min(dp[i + n], dp[i] + 1)
        if ((i + x) * 2 - x <= target) dp[(i + x) * 2 - x] = Math.min(dp[(i + x) * 2 - x], dp[i] + 1)
        if ((i + x) * 3 - x <= target) dp[(i + x) * 3 - x] = Math.min(dp[(i + x) * 3 - x], dp[i] + 1)
    }

    return dp[target] === Infinity ? -1 : dp[target]
}



/*
    쉬운 문제인줄 알고 그냥 bfs로 풀었는데,
    동적 계획법으로 최적화 안하면 통과를 안시켜주네요 oOo
    
    O(N - M)
*/