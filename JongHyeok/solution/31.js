// 문제 31 양과 늑대
class Queue {
    items = [];
    front = 0;
    rear = 0;

    push(item) {
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

function buildTree(info, edges) {
    const tree = Array.from({ length: info.length }, () => []);
    for (const [from, to] of edges) {
        tree[from].push(to);
    }
    return tree;
}
function solution(info, edges) {
    const tree = buildTree(info, edges);
    let maxSheep = 0;

    const q = new Queue();
    q.push([0, 1, 0, new Set()]);
    // bfs
    while (!q.isEmpty()) {
        // 큐에서 상태 가져오기
        const [cur, sheepCount, wolfCount, visited] = q.pop();
        // 최대 양의 수 갱신
        maxSheep = Math.max(maxSheep, sheepCount);
        // 방문한 노드 집합에 현재 노드의 이웃 노드 추가
        for (const next of tree[cur]){
            visited.add(next);
        }
        // 인접 노드 탐색
        for (const next of visited){
            if (info[next]){
                if(sheepCount !== wolfCount + 1){
                    const newVisited = new Set(visited);
                    newVisited.delete(next);
                    q.push([next, sheepCount, wolfCount + 1, newVisited])
                }
            } else {
                const newVisited = new Set(visited);
                newVisited.delete(next);
                q.push([next, sheepCount + 1, wolfCount, newVisited])
            }
        }
    }
    return maxSheep;
}

const info = [0,0,1,1,1,0,1,0,1,0,1,1];
const edges = [[0,1],[1,2],[1,4],[0,8],[8,7],[9,10],[9,11],[4,3],[6,5],[4,6],[8,9]];

console.log(solution(info, edges));
/*
권장 시간 복잡도 O(N²)
---
*/
