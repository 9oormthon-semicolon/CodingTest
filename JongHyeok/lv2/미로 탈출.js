function solution(maps) {
    const dir = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    const n = maps.length, m = maps[0].length;

    // bfs
    function bfs(startX, startY, target) {
        const queue = [[startX, startY, 0]]; // 큐 초기화
        const visited = Array.from({ length: n }, () => Array(m).fill(false));
        visited[startX][startY] = true; // 시작점 방문 처리

        while (queue.length > 0) {
            const [x, y, dist] = queue.shift();
            // 목표 지점(target)에 도달하면 거리 반환
            if (maps[x][y] === target) return dist;
            // 상하좌우로 탐색
            for (const [dx, dy] of dir) {
                const nx = x + dx;
                const ny = y + dy;
                // 이동할 수 있으면 이동
                if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] !== 'X' && !visited[nx][ny]) {
                    visited[nx][ny] = true; // 방문 처리
                    queue.push([nx, ny, dist + 1]); // 큐에 추가
                }
            }
        }
        return -1; // 목표 지점에 도달할 수 없는 경우 -1 반환
    }

    let startX, startY, leverX, leverY;

    // 시작점(S), 레버(L), 출구(E)의 좌표를 찾기
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (maps[i][j] === 'S') [startX, startY] = [i, j];
            if (maps[i][j] === 'L') [leverX, leverY] = [i, j];
        }
    }
    // 시작점에서 레버까지의 최단 거리
    const startToLever = bfs(startX, startY, 'L');
    if (startToLever === -1) return -1;
    // 레버에서 출구까지의 최단 거리
    const leverToExit = bfs(leverX, leverY, 'E');
    if (leverToExit === -1) return -1; //

    return startToLever + leverToExit;
}