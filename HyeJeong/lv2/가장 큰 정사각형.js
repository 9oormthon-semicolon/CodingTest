function solution(board) {
    let maxSize = 0;
    const rows = board.length;
    const cols = board[0].length;

    if (rows === 1 || cols === 1) {
        return board.some(row => row.includes(1)) ? 1 : 0;
    }

    for (let i = 1; i < rows; i++) {
        for (let j = 1; j < cols; j++) {
            if (board[i][j] !== 0) {
                board[i][j] = Math.min(
                    board[i-1][j-1],
                    board[i-1][j],
                    board[i][j-1]
                ) + 1;
                maxSize = Math.max(maxSize, board[i][j]);
            }
        }
    }

    return maxSize * maxSize;
}

/*
각 셀에서 해당 셀을 우하단 모서리로 하는 가장 큰 정사각형의 크기 저장
현재 셀(i, j)의 값이 1일 때, 왼쪽 상단, 위쪽, 왼쪽셀의 값 중 최소값에 1을 더한 값을 현재 셀에 저장
이 과정을 통해 각 셀에는 그 위치에서 만들 수 있는 가장 큰 정사각형의 한 변의 길이가 저장됨
최종적으로 가장 큰 값을 찾아 그 값을 제곱하면 가장 큰 정사각형의 넓이를 얻을 수 있음

시간 복잡도 - O(rows * cols)
모든 셀을 한 번씩 순회하면서 상수 시간 연산을 수행하기 때문
*/
