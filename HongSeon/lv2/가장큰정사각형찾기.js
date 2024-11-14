// dp 이용(board 자체가 dp)
function solution(board) {
    let result = 0
    let rowLen = board.length
    let colLen = board[0].length
    
    // board순회(i는 row, j는 col)
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            // 첫 행과 첫 열이 아닌 경우에만 계산
            if (board[i][j] > 0 && i > 0 && j > 0) {
                // 현재 위치에서 만들 수 있는 정사각형의 크기는 왼쪽, 위, 대각선 왼쪽 위 값 중 최솟값에 1을 더해 결정
                // 최솟값에 1을 더하는 이유는 이 세 방향 중 가장 작은 값이 현재 위치에서 확장 가능한 최대 정사각형의 크기를 제한하기 때문
                board[i][j] = Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1
            }
            // 최대 길이 갱신
            result = Math.max(result, board[i][j])  
        }
    }

    return result ** 2
}

/* 시간 복잡도 
 - for (let i = 0; i < rowLen; i++) : O(n)
    - for (let j = 0; j < colLen; j++) : O(m)

=> 전체 시간 복잡도 : O(n*m)
*/