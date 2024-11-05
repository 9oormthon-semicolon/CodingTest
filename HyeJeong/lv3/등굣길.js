function solution(m, n, puddles) {
    const MOD = 1000000007;
    const dp = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
    
    // 물웅덩이 표시
    puddles.forEach(([x, y]) => {
        dp[y][x] = -1;
    });
    
    // 시작점 설정
    dp[1][1] = 1;
    
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) continue;
            if (dp[i][j] === -1) {
                dp[i][j] = 0;
                continue;
            }
            
            dp[i][j] = (dp[i - 1][j] + dp[i][j - 1]) % MOD;
        }
    }
    
    return dp[n][m];
}

/*
dp 배열을 생성하고 0으로 초기화. 이 배열은 각 위치까지의 경로 수를 저장
puddles 배열의 좌표에 -1을 할당하여 물웅덩이를 표시
시작점 설정을 집의 위치인 dp[1][1]을 1로 설정
[DP 계산]
모든 격자를 순회하면서 각 위치까지의 경로 수를 계산
현재 위치가 물웅덩이인 경우 0으로 설정하고 다음으로 넘어가고 그렇지 않은 경우, 위쪽과 왼쪽에서 오는 경로 수의 합을 계산
계산 결과를 1,000,000,007로 나눈 나머지를 저장
dp[n][m]에 저장된 값을 반환. 이 값이 학교까지의 최단경로 개수

시간복잡도 - O(m*n)
*/
