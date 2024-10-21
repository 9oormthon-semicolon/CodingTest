function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const queue = [[0, 0, 1]];  // 초기 위치와 이동 거리 1
    const directions = [
        [1, 0],  // 아래로 이동
        [-1, 0], // 위로 이동
        [0, 1],  // 오른쪽 이동
        [0, -1], // 왼쪽 이동
    ];

    const visited = Array.from({ length: n }, () => Array(m).fill(false));  // 방문 여부 체크 배열
    visited[0][0] = true;  // 시작 위치는 방문 처리

    let pointer = 0;  // 큐의 포인터

    while (pointer < queue.length) {
        const [x, y, value] = queue[pointer++];  // 현재 위치와 거리

        // 목적지에 도달했을 때, 거리 반환
        if (x === n - 1 && y === m - 1) {
            return value;
        }

        // 네 방향으로 이동
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;

            // 범위 내에 있고, 벽이 아니며 방문하지 않은 경우
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true;  // 방문 처리
                queue.push([nx, ny, value + 1]);  // 큐에 새로운 위치 추가
            }
        }
    }

    // 목적지에 도달할 수 없는 경우 -1 반환
    return -1;
}

// 시간 복잡도: O(n * m)