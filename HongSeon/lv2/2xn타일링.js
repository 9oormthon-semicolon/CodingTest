// dp 이용
function solution(n) {
    const MOD = 1000000007 

    // 가로 길이가 1인 경우, 타일을 채우는 방법은 1가지
    if (n === 1) return 1 
    // 가로 길이가 2인 경우, 타일을 채우는 방법은 2가지 (세로 2개 또는 가로 1개)
    if (n === 2) return 2 

    // dp2는 두 칸 전 값 (dp[1])
    let dp2 = 1 
    // dp1은 한 칸 전 값 (dp[2])
    let dp1 = 2 

    // 점화식 : dp[i] = dp[i-1] + dp[i-2]
    for (let i = 3; i <= n; i++) {
        // 현재 값 (dp[i]) = 바로 직전 값과 두 칸 전 값의 합
        const current = (dp1 + dp2) % MOD 
        // dp2를 dp1으로 갱신 
        dp2 = dp1 
        // dp1을 현재 값으로 갱신
        dp1 = current 
    }

    return dp1 
}

/* 시간 복잡도 
 - for (let i = 3; i <= n; i++) : O(n)

 => 전체 시간 복잡도 : O(n)
*/