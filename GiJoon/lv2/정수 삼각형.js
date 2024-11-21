function solution(triangle) {
    const dp = triangle.map(v => v);
    let levels = triangle.length - 2;
    
    //역순
    for (let level = levels; level >= 0; level--) {
        //탐색 및 누적합
        for (let i = 0; i < dp[level].length; i++) {
            dp[level][i] += Math.max(dp[level + 1][i], dp[level + 1][i + 1]);
            
        };
    };

    return dp[0][0];
}

/*
    유사 누적 합이여서 dp를 이용하여 풀었습니다.
    삼각형 바닥을 기준 부터 좌우 비교해 큰 값을 다음 인덱스에 더해주는 식으로 풀었습니다
    
    O(N ^ 2)
*/