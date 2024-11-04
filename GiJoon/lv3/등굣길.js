function solution(m, n, puddles) {
    const MOD = 1000000007
    const dp = Array.from({ length: n }, () => Array(m).fill(0))
    
    // 시작 위치
    dp[0][0] = 1
    
    // 웅덩이 표시
    puddles.forEach(([x, y]) => { dp[y - 1][x - 1] = -1 })
    
    // 이전 값이 있는지 판별
    const isTrue = (x, y, from) => {
        switch (from) {
            case "DOWN":
                return y > 0 && dp[y - 1][x] !== -1
                
            case "LEFT":
                return x > 0 && dp[y][x - 1] !== -1
                
            default:
                return false
        }
    }
    
    
    for (let y = 0; y < n; y++) {
        for (let x = 0; x < m; x++) {
            
            //ㄴㄴ
            if (dp[y][x] === -1) continue
            
            //한 칸 아래에서 값 누적
            if (isTrue(x, y, "DOWN")) dp[y][x] += dp[y - 1][x] % MOD
            
            //좌측에서 값 
            if (isTrue(x, y, "LEFT")) dp[y][x] += dp[y][x - 1] % MOD
            
            //MOD연산
            dp[y][x] %= MOD
            
        }
    }

    return dp[n - 1][m - 1]
}

/*
    좌,우만 가기 때문에 어쩌피 목표까지 도달하면 최소경로기 때문에,
    최종적으로 도착한 경우의 수만 세주면 됩니다.

    각 칸으로 도달할 때 경로 수를 더해가는 방식으로 풀었구영
    
    근데 isTrue를 사용하면 속도가 느려서 효율성 테스트에 탈락해요
    괄호에 풀어써야 효율성 합격이지만, 이게 더 깔끔해서 이 코드를 올립니다
    
    O(N * M)
*/