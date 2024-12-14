function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    let start, lever, exit;
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') start = [i, j];
            if (maps[i][j] === 'L') lever = [i, j];
            if (maps[i][j] === 'E') exit = [i, j];
        }
    }
    
    function bfs(start, end) {
        const queue = [[...start, 0]];
        const visited = Array.from({length: n}, () => Array(m).fill(false));
        const dx = [0, 0, 1, -1];
        const dy = [1, -1, 0, 0];
        
        while (queue.length) {
            const [x, y, time] = queue.shift();
            
            if (x === end[0] && y === end[1]) return time;
            
            for (let i = 0; i < 4; i++) {
                const nx = x + dx[i];
                const ny = y + dy[i];
                
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] !== 'X' && !visited[nx][ny]) {
                    visited[nx][ny] = true;
                    queue.push([nx, ny, time + 1]);
                }
            }
        }
        
        return -1;
    }
    
    const timeToLever = bfs(start, lever);
    if (timeToLever === -1) return -1;
    
    const timeToExit = bfs(lever, exit);
    if (timeToExit === -1) return -1;
    
    return timeToLever + timeToExit;
}

/*
먼저 맵에서 시작점(S), 레버(L), 출구(E)의 위치 찾기
BFS 함수를 정의하여 두 지점 사이의 최단 거리를 계산
시작점에서 레버까지의 시간, 레버에서 출구까지의 시간을 각각 계산
두 경로 중 하나라도 도달할 수 없다면 전체 결과로 -1을 반환
두 경로 모두 가능하다면 두 시간의 합을 반환

시간복잡도 - O(N*M) n과 m은 각각 맵의 세로와 가로
*/
