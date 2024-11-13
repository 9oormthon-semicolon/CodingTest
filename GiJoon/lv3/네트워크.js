function solution(n, computers) {
    let cnt = 0
 
    //경로 저장
    const MAP = computers.reduce((obj, v, idx) => {
        if (!obj[idx]) obj[idx] = []
        
        v.forEach((v_, i) => {
            if (i !== idx && v_ === 1) obj[idx].push(i)
        })
        return obj
    }, {});
    
    const checked = new Set()
    
    // BFS 
    function bfs(start) {
        checked.add(start)
        const q = [start]
        
        while (q.length > 0) {
            const cur = q.shift()
            
            for (let next of MAP[cur]) {
                if (!checked.has(next)) {
                    checked.add(next)
                    q.push(next)
                }
            }
        }
    }

    //경로 탐색
    for (let i = 0; i < n; i++) {
        if (!checked.has(i)) {
            bfs(i)
            cnt++
        }
    }
    
    return cnt
}

/*
    어제 잘못 올렸네용;;
    O(N ^ 2)
*/