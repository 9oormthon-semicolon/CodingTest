function solution(board) {
    const rowLen = board.length, colLen = board[0].length;
    const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]]; // 상하좌우
    
    let startX, startY, targetX, targetY;
    
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (board[i][j] === 'R') { // 처음 위치
                startX = i;
                startY = j;
            } else if (board[i][j] === 'G') { // 목표 지점
                targetX = i;
                targetY = j;
            }
        }
    }
    
    // 위치, 이동횟수
    const queue = [[startX, startY, 0]];
    const visited = new Set(); // 방문한 곳
    visited.add(`${startX},${startY}`);
    
    while (queue.length > 0) {
        const [x, y, moves] = queue.shift();
        
        // 목표 위치에 도달하면 이동 횟수를 반환
        if (x === targetX && y === targetY) return moves;
        
        // 탐색
        for (const [dx, dy] of directions) {
            let nx = x, ny = y;
            
            // 더이상 이동하지 못할 때까지
            while (
                nx + dx >= 0 && nx + dx < rowLen &&
                ny + dy >= 0 && ny + dy < colLen &&
                board[nx + dx][ny + dy] !== 'D'
            ) {
                nx += dx;
                ny += dy;
            }
            
            // 방문하지 않은 곳 큐에 추가
            if (!visited.has(`${nx},${ny}`)) {
                visited.add(`${nx},${ny}`);
                queue.push([nx, ny, moves + 1]);
            }
        }
    }
    // 큐가 비어도 목표에 도달하지 못하면 -1을 반환합니다.
    return -1;
}