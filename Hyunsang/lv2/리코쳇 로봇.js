function solution(board) {
    const rows = board.length;
    const cols = board[0].length;
    const directions = [
        [-1, 0], // 상
        [1, 0], // 하
        [0, -1], // 좌
        [0, 1] // 우
    ];
    
    // 시작 위치(R)와 목표 위치(G) 찾기
    let start, goal;
    for (let i = 0; i < rows; i++ ) {
        for (let j = 0; j < cols; j++) {
            if( board[i][j] === 'R') start = [i,j];
            if( board[i][j] === 'G') goal = [i,j];
        }
    }
    
    const queue = [[...start, 0]]; // [x,y, 이동 횟수];
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    visited[start[0]][start[1]] = true;
    
    while(queue.length > 0) {
        console.log(queue);
        const [x,y,moves] = queue.shift();
        
        // 목표 위치에 도달하면 이동 횟수 반환
        if ( x === goal[0] && y === goal[1] ) return moves;
        
        for ( const [dx, dy] of directions) {
            let nx = x;
            let ny = y;
            
            // 장애물이나 벽에 부딪힐때까지 이동
            while (
                nx + dx >= 0 &&
                nx + dx < rows &&
                ny + dy >= 0 &&
                ny + dy < cols &&
                board[nx+dx][ny+dy] !== "D"
            ) {
                nx += dx;
                ny += dy;
            }
            
            // 방문하지 않은 위치라면 큐에 추가
            if (!visited[nx][ny]) {
                visited[nx][ny] = true;
                queue.push([nx,ny,moves+1]);
            }
        }
    }
    
    // 목표 위치 도달할 수 없는 경우
    return -1
    
    
}

// 격자의 크기는 𝑁 × 𝑀 
// 시간복잡도 : O( N x M )