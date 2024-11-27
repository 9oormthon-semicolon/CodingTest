function solution(maps) {
    const answer = [];    
    const N = maps.length;
    const M = maps[0].length;
    const MAPS = maps.map(v => v.split(''));
    const d = [[1,0], [0,1], [0,-1], [-1,0]];
    
    //범위와 값이 옳은가?
    const RangeIn = (x, y) => (0 <= x && x < N) && (0 <= y && y < M) && MAPS[x][y] !== "X";

    //이어져있는 섬 탐색
    const bfs = (sx, sy) => {
        let cnt = 0 + Number(MAPS[sx][sy]);
        const q = [[sx, sy]];
        MAPS[sx][sy] = "X";
        
        while(q.length > 0) { 
            const [x, y] = q.shift(); 
            
            d.forEach(([dx, dy]) => {
                const tx = x + dx, ty = y + dy;
                
                if(RangeIn(tx, ty)) {
                    q.push([tx, ty]);
                    cnt += Number(MAPS[tx][ty]);
                    MAPS[tx][ty] = "X";
                    
                }
            })  
        }       
        return cnt;
    }
    
    //탐색
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            if (MAPS[i][j] !== "X") answer.push(bfs(i, j));
        }
    }
    
    return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

/*
    bfs/dfs에서 가장 흔한 유형인 섬의 개수 찾기 문제와 유사합니다.
    bfs를 구현해서 섬의 누적값을 구하고, 결과 값을 오름차순으로 정렬하여 문제를 해결했습니다.
    
    O(N * M)
*/