function solution(x, y, n) {
    const dp = new Array(y + 1).fill(Infinity);
    // 동적 프로그래밍을 위한 배열: 각 숫자에 도달하는데 필요한 최소 연산 횟수를 저장하는 배열
    // 최소 연산 횟수를 도출해내야 하기 때문에 Infinity로 채움
    dp[x] = 0; // 시작 숫자의 연산 횟수는 0

    for (let i = x; i <= y; i++) { // 숫자 x부터 y까지
        // 이미 최소 연산 횟수가 계산된 숫자가 아니면 건너뜀 (만들 수 없음)
        if (dp[i] === Infinity) continue;
        // x에 n을 더합니다
        if (i + n <= y) dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        // x에 2를 곱합니다
        if (i * 2 <= y) dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        // x에 3을 곱합니다
        if (i * 3 <= y) dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
    }
    
    return dp[y] === Infinity ? -1 : dp[y]; // 만들 수 없으면 -1 반환
}
const x = 10, y = 40, n = 5;
console.log(solution(x,y,n));
/*
숫자 x부터 y까지 반목문을 실행하기 때문에 시간복잡도는 O(y-x)
*/