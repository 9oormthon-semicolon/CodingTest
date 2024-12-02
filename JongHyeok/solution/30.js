// 문제 30 미로 탈출

class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item){
        this.items.push(item);
        this.rear++;
    }

    pop() {
        return this.items[this.front++];
    }

    isEmpty() {
        return this.front === this.rear;
    }
}
// 이동 가능?
function isValidMove(ny, nx, n, m, maps){
    return 0 <= ny && ny < n && 0 <= nx && nx < m && maps[ny][nx] !== 'X';
}
// 방문한 적 있으면 큐에 넣음
function appendToQueue(ny, nx, k, time, visited, q){
    if(!visited[ny][nx][k]) {
        visited[ny][nx][k] = true;
        q.push([ny, nx, k, time + 1]);
    }
}
function solution(maps) {
    const n = maps.length, m = maps[0].length;
    const visited = Array.from(Array(n), () => Array(m).fill(false).map(() => Array(2).fill(false)));

    const dy = [-1,1,0,0], dx = [0,0,-1,1];
    const q = new Queue();
    let endY = -1, endX = -1;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if(maps[i][j] === 'S') {
                q.push([i, j, 0, 0]);
                visited[i][j][0] = true;
            }
            else if(maps[i][j] === 'E') endY = i, endX = j;
        }
    }

    while(!q.isEmpty()){
        const [y, x, k, time] = q.pop();

        if(y === endY && x === endX && k === 1) return time;

        for(let i = 0; i < 4; i++) {
            const ny = y + dy[i];
            const nx = x + dx[i];

            if (!isValidMove(ny, nx, n, m, maps)) continue;
            if (maps[ny][nx] === 'L') appendToQueue(ny, nx, 1, time, visited, q);
            else appendToQueue(ny, nx, k, time, visited, q);
        }
    }
    return -1;
}

const maps = ["SOOOL","XXXXO","OOOOO","OXXXX","OOOOE"];
console.log(solution(maps));
/*
권장 시간 복잡도 O(N²)
---
*/
