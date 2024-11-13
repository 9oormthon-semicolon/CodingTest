function solution(board) {
    let maxSide = 0; // 가장 큰 정사각형의 변 길이를 저장할 변수
    const rows = board.length;
    const cols = board[0].length;

    // 모든 셀을 순회하며 dp 값을 업데이트
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // 현재 위치가 1이고, 첫 번째 행이나 첫 번째 열이 아닐 때만 계산
            if (board[i][j] === 1 && i > 0 && j > 0) {
                // 현재 위치에서 만들 수 있는 가장 큰 정사각형 변 길이 계산
                // 왼쪽, 위쪽, 왼쪽 대각선 위 값 중 최솟값에 1을 더함
                board[i][j] = Math.min(board[i - 1][j], board[i][j - 1], board[i - 1][j - 1]) + 1;
            }
            // maxSide에 가장 큰 변 길이 업데이트
            maxSide = Math.max(maxSide, board[i][j]);
        }
    }

    // 가장 큰 정사각형의 넓이 반환
    return maxSide * maxSide;
}

// 시간복잡도: O(n * m)