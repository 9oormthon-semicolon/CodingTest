// dp 이용
function solution(x, y, n) {
    // 이미 같으면 0 반환
    if (x === y) return 0
     // dp 배열 생성 (길이는 y+1로 설정하여 인덱스가 y까지 도달할 수 있도록)
    const dp = new Array(y + 1).fill(Infinity)
    // 초기 연산횟수
    dp[x] = 0

    for (let i = x; i <= y; i++) {
        // 해당 배열이 무한대값이면 어떤식으로든 못 만들기 때문에 넘어감
        if (dp[i] === Infinity) continue
        
        // cx = changed x
        // 세 가지 연산 수행
        [i+n, i*2, i*3].forEach(cx => {
            // 변환된 x값이 y값을 넘지 않을 때만
            // 이미 다른 경로로 도달한 경우와 현재 경로로 도달하는 경우 중 더 적은 연산 횟수를 선택
            if(cx <= y) dp[cx] = Math.min(dp[cx], dp[i] + 1)
        })
    } 
    
    // dp 마지막 값이 Infinity 변환 x
    return dp[y] === Infinity ? -1 : dp[y]
}

/* 시간 복잡도 
 - new Array(y + 1).fill(Infinity) : O(y)

 - for (let i = x; i <= y; i++) : O(y)

 => 전체 시간 복잡도 : O(y) -> O(n)
*/

// 제한사항보고 bfs, dfs는 안되겠다라고 생각이 들긴 했습니다만
// 혹시 몰라서 해봤는데 역시 안되네요... 
// 제한사항을 보고 어떤 방식으로 풀지 빨리 정하는 게 중요한 문제 같습니다.