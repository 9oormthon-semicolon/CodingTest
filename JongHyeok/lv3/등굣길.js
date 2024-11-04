function solution(m, n, puddles) {
    const dp = Array(m).fill(0);
    dp[0] = 1;
    const puddleSet = new Set(puddles.map(p => `${p[1] - 1},${p[0] - 1}`));

    for (let i = 0; i < n; i++) { // 모든 칸 검사
        for (let j = 0; j < m; j++) {
            if (puddleSet.has(`${i},${j}`)) dp[j] = 0; // 물에 잠긴 지역이면
            else if (j > 0) dp[j] = (dp[j] + dp[j - 1]) % 1000000007; // 물에 잠기지 않은 경우, 경로 계산
        }
    }
    return dp[m - 1];
}

const m = 4, n = 3;
const puddles = [[2,2]];
console.log(solution(m, n, puddles));

/*
시간복잡도 O(M*N)
오른쪽으로만 이동 가능하기 때문에
특정 칸으로 갈 수 있는 방법은 해당 칸의 위쪽이나 왼쪽으로부터 올 수 있음
> 위쪽에서 오는 경우는 이미 dp 배열에 저장되어 있으므로 기존의 것 사용
> 왼쪽에서 오는 경우는 왼쪽 칸에 저장되어 있으므로 더해줌
*/