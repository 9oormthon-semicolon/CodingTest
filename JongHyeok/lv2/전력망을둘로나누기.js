function solution(n, wires) {
    const graph = Array.from({ length: n + 1 }, () => []);
    
    // 그래프 값 할당
    wires.forEach(([v1, v2]) => {
        graph[v1].push(v2);
        graph[v2].push(v1);
    });

    // 송전탑 개수 차이 최소값
    let min = Infinity;

    // dfs
    function dfs(node, visited) {
        // 방문한 노드 (첫 노드)
        visited[node] = true;
        let count = 1;
        // 그래프 순회
        for (const neighbor of graph[node]) {
            // 방문하지 않았으면
            if (!visited[neighbor]) count += dfs(neighbor, visited);
        }
        return count;
    }

    // 각 wire를 끊어보면서 두 네트워크의 송전탑 개수 차이를 계산
    for (const [v1, v2] of wires) {
        // 와이어 제거
        graph[v1] = graph[v1].filter(v => v !== v2);
        graph[v2] = graph[v2].filter(v => v !== v1);

        // 방문 여부를 기록하기 위한 배열
        const visited = Array(n + 1).fill(false);

        // 와이어 끊고 송전탑 개수 계산
        const count1 = dfs(1, visited);
        const count2 = n - count1;

        // 두 네트워크의 송전탑 개수 차이 계산
        const gap = Math.abs(count1 - count2);

        // 최소값 갱신
        min = Math.min(min, gap);

        // 와이어 복원
        graph[v1].push(v2);
        graph[v2].push(v1);
    }

    return min;
}

const n = 9;
const wires = [[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]];