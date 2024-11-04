// DP 알고리즘
function solution(m, n, puddles) {
    // dp 테이블 초기화
    let dp = new Array(n).fill(0).map(() => new Array(m).fill(0))
    // 시작점을 1로 초기화
    dp[0][0] = 1
    
    // 웅덩이가 있는 곳은 -1로 표시
    for (let [x, y] of puddles) { 
        dp[y - 1][x - 1] = -1
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            // 웅덩이면 0으로 바꾸고 건너뜀
            if (dp[i][j] === -1) { 
                dp[i][j] = 0
                continue
            }
            
            // 아래로 이동
            if (i > 0) dp[i][j] += dp[i - 1][j]
            // 오른쪽으로 이동
            if (j > 0) dp[i][j] += dp[i][j - 1]
            
            // 경로 수를 1000000007로 나눈 나머지로 바꿈
            dp[i][j] %= 1000000007
        }
    }
    
    return dp[n - 1][m - 1]
}

/* 시간 복잡도 
 - 이중 for문 : O(n*m)

 => 전체 시간 복잡도 : O(n*m)
*/

// 결국 웅덩이를 피해 각 구간에서 목적지까지 도달할 수 있는 경로의 수를 누적해가는 방식
