function solution(n, wires) {
    let answer = Infinity;
    const graph = Array.from({ length: n + 1 }, () => []);
    
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    function dfs(node, parent) {
        let count = 1;
        for (const child of graph[node]) {
            if (child !== parent) {
                count += dfs(child, node);
            }
        }
        return count;
    }
    
    wires.forEach(([v1, v2]) => {
        const idx1 = graph[v1].indexOf(v2);
        const idx2 = graph[v2].indexOf(v1);
        graph[v1].splice(idx1, 1);
        graph[v2].splice(idx2, 1);
        
        const count = dfs(1, 0);
        const diff = Math.abs(n - count - count);
        answer = Math.min(answer, diff);
        
        graph[v1].push(v2);
        graph[v2].push(v1);
    });
    
    return answer;
}
/*
입력으로 주어진 wires 배열을 사용하여 인접 리스트 형태의 그래프를 생성
깊이 우선 탐색을 사용하여 연결된 노드의 수를 계산
각 전선을 하나씩 끊어보며 두 전력망의 송전탑 개수 차이를 계산
계산된 차이 중 가장 작은 값을 answer에 저장

시간복잡도 - O(n^2)
*/
