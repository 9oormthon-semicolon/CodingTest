// BFS 이용
function solution(board) {
    const queue = [] 
    // 상 하 좌 우
    const direct = [[-1, 0], [1, 0],  [0, 1], [0, -1]]
    // 행
    const n = board.length
    // 열
    const m = board[0].length 
    // 각 위치 배열 초기화
    const dist = Array.from({ length: n }, () => Array(m).fill(Infinity)) 

    // R의 시작 위치를 찾아 큐에 추가
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (board[i][j] === 'R') { 
                queue.push([i, j, 0]) 
                dist[i][j] = 0 
            }
        }
    }

    // BFS 구간
    while (queue.length) {
        // 큐에서 현재 위치와 이동 횟수 가져오기
        const [x, y, cnt] = queue.shift() 

        // G에 도착한 경우 이동 횟수 반환
        if (board[x][y] === 'G') return cnt

        // 네 방향으로 이동 가능 여부 탐색
        for (const [dx, dy] of direct) {
            let mx = x
            let my = y

            // 해당 방향으로 미끄러지며 이동 가능한 위치 찾기
            while (
                // 행, 열 범위 확인
                mx + dx >= 0 && mx + dx < n && 
                my + dy >= 0 && my + dy < m && 
                // D가 없는 경우
                board[mx + dx][my + dy] !== 'D' 
            ) {
                mx += dx
                my += dy
            }

            // 더 적은 이동 횟수로 도달 가능한 경우만 큐에 추가
            if (dist[mx][my] > cnt + 1) {
                // 이동 횟수 갱신
                dist[mx][my] = cnt + 1 
                // 다음 위치와 이동 횟수 큐에 추가
                queue.push([mx, my, cnt + 1]) 
            }
        }
    }

    // 목표 지점에 도착할 수 없는 경우 -1 반환
    return -1
}

/* 시간 복잡도
 - while (queue.length) : O(n * m) 
    - queue.shift : O(1)

    - for (const [dx, dy] of directions) : O(4)
        - while : O(n + m)

 => 전체 시간 복잡도 : O((n + m) * (n * m))
*/

