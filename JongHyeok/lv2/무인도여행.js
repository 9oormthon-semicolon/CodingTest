function solution(maps) {
    const rowLen = maps.length, colLen = maps[0].length;
    // 방문 여부 확인하기 위한 배열
    const visited = Array.from({ length: rowLen }, () => Array(colLen).fill(false));
    const dir = [[-1, 0], [1, 0], [0, -1], [0, 1]];
    const results = [];
    // bfs
    function bfs(x, y) {
        // 좌표 저장하기 위한 큐
        const coord = [[x, y]];
        // 출발하는 지점 방문 처리
        visited[x][y] = true;
        let food = parseInt(maps[x][y]);

        while (coord.length > 0) {
            const [cx, cy] = coord.shift();
            for (const [dx, dy] of dir) {
                const nx = cx + dx, ny = cy + dy;
                // 갈 수 있는 곳이면
                if (nx >= 0 && nx < rowLen && ny >= 0 && ny < colLen && !visited[nx][ny] && maps[nx][ny] !== 'X') {
                    visited[nx][ny] = true; // 방문 처리
                    food += parseInt(maps[nx][ny]); // 식량 추가
                    coord.push([nx, ny]); // 새로운 좌표 큐에 추가
                }
            }
        }
        return food;
    }
    // 모든 좌표 탐색
    for (let i = 0; i < rowLen; i++) {
        for (let j = 0; j < colLen; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                results.push(bfs(i, j));
            }
        }
    }

    return results.length > 0 ? results.sort((a, b) => a - b) : [-1];
}

const maps1 = ["X591X", "X1X5X", "X231X", "1XXX1"];
console.log(solution(maps1));

/*
시간복잡도 O(N*M)
*/