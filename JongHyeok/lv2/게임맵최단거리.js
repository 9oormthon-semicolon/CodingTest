function solution(maps) {
    let dist = 1; 
    let queue = []; // 이동 가능한 경로
    const dx = [-1, 1, 0, 0], dy = [0, 0, -1 ,1]; //방향 설정
    const n = maps.length, m = maps[0].length; // 행렬 길이

    queue.push([0,0]); // 출발점
    maps[0][0] = 0;

    while(queue.length > 0){ // 더 이상 이동할 곳이 없을 때까지
        for(let i = 0; i < queue.length; i++){
            let [x, y] = queue.shift(); // 큐에서 좌표값을 꺼냄
        
            for (let j = 0; j < 4; j++){ // 4가지 방향으로 이동 시도
            let nx = x + dx[j], ny = y + dy[j]; // 좌표값 갱신

                if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1){
                    // 갈 수 있는 곳이 있고 방문하지 않은 곳인 경우
                    if(nx == n-1 && ny == m -1){ // 목적지에 도착하면 거리 반환
                        return dist + 1;
                    }
                    queue.push([nx,ny]); // 다음 이동 경로 추가
                    maps[nx][ny] = 0; // 방문한 곳(갈 수 없는 곳 0)으로 처리
                }
            }
        }
        dist++;
        console.log(queue);
    }
    return - 1; // 답이 없을 경우
}


const maps = [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]];
console.log(solution(maps));

/* 
n*m 크기인 맵에서 갈 수 있는 경로의 길이 (queue의 길이)는 최악의 경우, n*m 개입니다.
전체 시간복잡도는 O(N*M)입니다.
반복문 안에 shift 연산이 있지만 현재 1칸 이동할 수 있는 좌표 (최대 4)이기 때문에 상수 취급
*/