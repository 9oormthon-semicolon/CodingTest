function solution(maps) {
    const n = maps.length;
    const m = maps[0].length; 
    const directions = [
        [1, 0], 
        [0, 1], 
        [-1, 0], 
        [0, -1] 
    ];
    
    const queue = [[0, 0, 1]]; 
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    visited[0][0] = true;

    while (queue.length > 0) {
        const [x, y, distance] = queue.shift();
        if (x === n - 1 && y === m - 1) {
            return distance;
        }
        for (const [dx, dy] of directions) {
            const nx = x + dx;
            const ny = y + dy;
            if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1 && !visited[nx][ny]) {
                visited[nx][ny] = true; 
                queue.push([nx, ny, distance + 1]); 
            }
        }
    }

    return -1; 
}

/*
2D 배열 'maps'를 받음. 1은 이동 가능한 칸, 0은 벽을 나타냄
n과 m은 맵의 세로와 가로 크기 directions 배열은 상하좌우 이동 방향을 정의
queue는 BFS를 위한 큐로, 시작점 [0, 0]과 거리 1로 초기화됨, visited 배열은 각 칸의 방문 여부를 추적
BFS 실행: 큐가 빌 때까지 반복
         현재 위치(x, y)와 거리를 큐에서 꺼내고 목적지(맵의 우하단)에 도달하면 거리를 반환
         네 방향으로 이동을 시도. 새 위치가 맵 내부이고, 이동 가능하며(값이 1), 아직 방문하지 않았다면 해당 위치를 방문 처리하고새 위치와 증가된 거리를 큐에 추가, 경로를 찾지 못한 경우 -1을 반환

시간복잡도 - O(n*m) n과 m은 각각 맵의 세로와 가로 크기
모든 칸을 한번씩 방문하기때문 

알고리즘 수업때 했던 방식과 다르게 짜 보았습니다.
*/
