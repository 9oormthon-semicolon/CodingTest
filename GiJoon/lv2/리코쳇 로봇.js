function solution(board) {
    
    let RED = [0, 0], GREEN = [0, 0];
    const dire = [[0, 1],[0, -1], [1, 0], [-1, 0]];
    
    const visited = board.map((_, col) => {
        const arr = [];
        for (let row = 0; row < board[0].length; row++) {
            if (board[col][row] === "R") [RED[0],RED[1]] = [col, row];
            if (board[col][row] === "G") [GREEN[0],GREEN[1]] = [col, row];
            arr.push(false)
        }
        return arr;
    })
    
    let p = 0;
    const q = [[...RED, 0]];
    visited[RED[0]][RED[1]] = true;
    const InRange = (col, row) => (0 <= col && col < board.length) && (0 <= row && row < board[0].length);
    
    while (q[p]) {
        const [col, row, cnt] = q[p++];

        if (col === GREEN[0] && row === GREEN[1]) return cnt;
        
        for (const [dCOL, dROW] of dire) {
            let tCOL = col, tROW = row;
            
            //이동 조건 벽이 나올때까지 ++
            while (InRange(tCOL + dCOL, tROW + dROW) && board[tCOL + dCOL][tROW + dROW] !== "D") {
                tCOL += dCOL;
                tROW += dROW;
            }
            
            if (visited[tCOL][tROW] === true) continue;
   
            q.push([tCOL, tROW, cnt + 1]);
            visited[tCOL][tROW] = true;
        }
}

    return -1;
}

/*  
    미로 문제랑 같은데, 이동 조건이 추가됨 
    4방향으로 움직일 수 있되, 벽이 나올때까지 방향 전환을 몬함
    
    O(N * M)
*/



