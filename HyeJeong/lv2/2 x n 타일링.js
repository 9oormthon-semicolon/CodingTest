function solution(n) {
    const MOD = 1000000007;
    let dp = new Array(n + 1).fill(0);
    
    dp[1] = 1;
    dp[2] = 2;
    
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
    }
    
    return dp[n];
}

/*
동적 프로그래밍(DP) 사용 - 각 단계의 결과를 저장하고 재사용함
모듈로 연산으로 각 단계에서 MOD로 나눈 나머지를 계산하여 오버플로우를 방지함
2 x n 타일링 문제의 점화식을 정확히 구현

시간복잡도 - O(n)
*/
