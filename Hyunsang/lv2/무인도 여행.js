function solution(maps) {
    const rows = maps.length; // 맵의 행 개수
    const cols = maps[0].length; // 맵의 열 개수
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false)); // 방문 여부를 기록할 2차원 배열
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1] // 상, 하, 좌, 우 방향 이동
    ];

    // 유효한 위치인지 확인하는 함수
    function isValid(x, y) {
        return x >= 0 && x < rows && y >= 0 && y < cols && !visited[x][y] && maps[x][y] !== 'X';
    }

    // BFS로 섬 탐색 및 식량 합계 계산
    function bfs(startX, startY) {
        const queue = [[startX, startY]]; // BFS 큐
        visited[startX][startY] = true; // 시작 위치 방문 처리
        let foodSum = parseInt(maps[startX][startY], 10); // 현재 위치의 식량 값 추가

        while (queue.length > 0) {
            const [x, y] = queue.shift(); // 큐에서 현재 위치를 꺼냄
            for (const [dx, dy] of directions) {
                const nx = x + dx;
                const ny = y + dy;

                // 유효한 위치인 경우
                if (isValid(nx, ny)) {
                    visited[nx][ny] = true; // 방문 처리
                    foodSum += parseInt(maps[nx][ny], 10); // 식량 값 누적
                    queue.push([nx, ny]); // 큐에 다음 위치 추가
                }
            }
        }
        return foodSum; // 섬의 총 식량 값 반환
    }

    const results = []; // 각 섬의 식량 값을 저장할 배열

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                // 방문하지 않은 육지일 경우 BFS 실행
                results.push(bfs(i, j));
            }
        }
    }

    // 결과 배열을 오름차순으로 정렬하거나, 섬이 없을 경우 [-1] 반환
    return results.length > 0 ? results.sort((a, b) => a - b) : [-1];
}

// 시간 복잡도: O( n x m )