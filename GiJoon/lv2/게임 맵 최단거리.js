function solution(maps) {
    const N = maps.length  
    const M = maps[0].length
    
    if (maps[N-1][M-2] === 0 && maps[N-2][M-1] === 0) return -1 // 진영 양쪽이 막혀있으면 -1 return
    
    const inMaze = (x, y) => 0 <= y && y < N && 0 <= x && x < M //마로 범위 안인지 판별
    const dire = [[1, 0],[-1, 0],[0, 1],[0, -1]] 
    const q = [[0, 0, 1]]
    
    while (q.length > 0) {
        const [x, y, cnt] = q.shift()
    
        if(x === M - 1 && y === N - 1) return cnt
        
        dire.forEach(([dx, dy])=>{
            const tx = x + dx, ty = y + dy
            
            if (inMaze(tx, ty) && maps[ty][tx] === 1) {
                q.push([tx, ty, cnt+1])
                maps[ty][tx] = 0
            }
            
        })

    }
    
    return -1
}

/*
    가장 빠른 길을 찾아야 하기 때문에
    bfs를 사용하면 되는 문제
    
    시작점은 무조건 0,0이며 
    상대 팀 진영에 도착할 수 없는 경우도 존재
    
    간단하게 도착 경로 양쪽이 막혀있으면 도착 못하니까 조건 걸어주고
    bfs를 이용하여 간단하게 풀었습니다.
    
    O(N*M)
*/
