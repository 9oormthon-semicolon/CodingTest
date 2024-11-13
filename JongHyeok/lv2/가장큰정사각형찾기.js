function solution(board) {
    const rows = board.length, cols = board[0].length; // 행렬의 길이
    let max = 0; // 만들 수 있는 가장 큰 정사각형의 한 변의 길이
    // dp 배열 초기화
    const dp = Array.from(Array(rows), () => Array(cols).fill(0));

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (board[i][j] === 1) { // 해당 위치가 1일 때만
                 // 확장할 수 없을때
                if (i === 0 || j === 0) dp[i][j] = board[i][j];
                // 확장할 수 있을 때 / 확장할 수 있는 길이 중 가장 작은 값까지만 확장할 수 있기 때문
                else dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1;
                max = Math.max(max, dp[i][j]);
            }
        }
    }
    return max**2;
}

const board = [[0,1,1,1],[1,1,1,1],[1,1,1,1],[0,0,1,0]];
console.log(solution(board));

/*
행의 길이가 N, 열의 길이가 M이라고 했을 때,
모든 요소를 순회하기 때문에
O(N*M)
*/