// BFS 이용
function solution(maps) {
    const result = []
    const row = maps.length 
    const col = maps[0].length 
    // 방문 여부를 false로 초기화한 2차원 배열 생성
    const visited = new Array(row).fill(0).map(() => new Array(col).fill(false))
    const direct = [[1, 0], [-1, 0], [0, 1], [0, -1]]

    // 지도 순회
    for (let r = 0; r < row; r++) { 
        for (let c = 0; c < col; c++) { 
            // 방문하지 않았고 바다가 아닌 경우에 BFS 탐색 시작
            if (!visited[r][c] && maps[r][c] !== "X") {
                let queue = [[r, c]]
                // 현재 위치 방문 처리
                visited[r][c] = true
                let total = 0

                // BFS로 연결된 모든 칸 탐색
                while (queue.length > 0) {
                    // 큐에서 현재 좌표를 가져옴
                    const [nowR, nowC] = queue.shift()
                    // 현재 위치의 식량 값을 더함
                    total += Number(maps[nowR][nowC])

                    // 4방향으로 이동
                    for (const [dR, dC] of direct) {
                        const nR = nowR + dR
                        const nC = nowC + dC

                        // 지도 범위를 벗어나지 않는지 확인
                        if (nR >= 0 && nC >= 0) {
                            if (nR < row && nC < col) {
                                // 방문하지 않았고 바다가 아닌 경우 탐색 진행
                                if (!visited[nR][nC] && maps[nR][nC] !== "X") {
                                    // 방문 처리
                                    visited[nR][nC] = true
                                    // 위치를 큐에 추가
                                    queue.push([nR, nC])
                                }
                            }
                        }
                    }
                }
                // 현재 섬의 총 식량 값을 추가
                result.push(total)
            }
        }
    }
    // 오름차순으로 정렬, 섬이 없다면 -1 반환
    return result.length > 0 ? result.sort((a, b) => a - b) : [-1]
}

/* 시간 복잡도 
 - for (let r = 0; r < row; r++) : O(n)
    - for (let c = 0; c < col; c++) : O(m)

 - while (queue.length > 0) : O(n * m)

 - result.length > 0 ? result.sort((a, b) => a - b) : O(klogk)

 => 전체 시간 복잡도 : O(n*m + klogk)
*/
