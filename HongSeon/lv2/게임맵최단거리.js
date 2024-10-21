// BFS 이용
function solution(maps) {
    let result = 0
    // 행 길이
    let row = maps.length;
    // 열 길이
    let col = maps[0].length;
    // 시작점
    let queue = [[0, 0]];  
    // 하상우좌
    const direct = [[1, 0], [-1, 0], [0, 1], [0, -1]];  
    
    while (queue.length > 0) {
        let [x, y] = queue.shift(); 
        
        // 하상우좌 네 방향으로 탐색
        for (let i = 0; i < direct.length; i++) {
            // x, y 이동
            let mx = x + direct[i][0];
            let my = y + direct[i][1];
            
            // 맵의 범위 벗어나지 않았나 확인
            if(mx >= 0 && my >= 0 && mx < row && my < col){
                // 해당 좌표가 벽이 아니고 탐색했던 좌표가 아닐 경우
                if(maps[mx][my] === 1){
                    // 이동한 좌표 값을 현재 좌표 값 + 1로 갱신 
                    maps[mx][my] = maps[x][y] + 1
                    // 다음 탐색 좌표 추가
                    queue.push([mx, my])
                }
            }

        }
    }
    
    // 목적지 
    result = maps[row - 1][col - 1]

    // 목적지 도착했다면 그 값을 반환, 아니면 -1 반환
    return  result > 1 ? result : -1;
}

/* 시간 복잡도
  맵의 크기가 n*m일 때, BFS는 각 좌표를 최대 한 번만 방문하고
  각 방문마다 4개의 방향을 확인함 :  O(행 * 열) => O(n*m)
  
  => 전체 시간 복잡도 : O(n*m)
*/