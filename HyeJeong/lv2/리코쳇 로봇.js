function solution(board) {
    const n = board.length;
    const m = board[0].length;
    let start, end;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') start = [i, j];
            if (board[i][j] === 'G') end = [i, j];
        }
    }

    const queue = [[...start, 0]];
    const visited = Array.from({length: n}, () => Array(m).fill(false));
    visited[start[0]][start[1]] = true;

    const dx = [-1, 1, 0, 0];
    const dy = [0, 0, -1, 1];
    
    while (queue.length > 0) {
        const [x, y, moves] = queue.shift();
        
        if (x === end[0] && y === end[1]) return moves;
        
        for (let i = 0; i < 4; i++) {
            let nx = x;
            let ny = y;

            while (nx + dx[i] >= 0 && nx + dx[i] < n && 
                   ny + dy[i] >= 0 && ny + dy[i] < m && 
                   board[nx + dx[i]][ny + dy[i]] !== 'D') {
                nx += dx[i];
                ny += dy[i];
            }

            if (visited[nx][ny]) continue;
            
            visited[nx][ny] = true;
            queue.push([nx, ny, moves + 1]);
        }
    }
    
    return -1; 
}

/*
보드를 순회하여 시작점('R')과 도착점('G')을 찾기
BFS를 사용하여 최단 경로를 찾고 각 방향으로 이동할 때 장애물('D')이나 벽에 부딪힐 때까지 계속 이동
방문한 위치를 기록하여 중복 방문을 방지
도착점에 도달하면 이동 횟수를 반환하고 도달할 수 없으면 -1을 반환

시간복잡도 - O(N*M)  N과 M은 보드의 크기 
각 칸을 최대 한 번씩만 방문하기 때문에 효율적으로 동작
*/
