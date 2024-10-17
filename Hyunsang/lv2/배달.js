function solution(N, road, K) {
    const INF = Infinity;
    const graph = Array.from({ length: N + 1 }, () => []); // 인접 리스트
    console.log(graph)
    const dist = Array(N + 1).fill(INF); // 각 마을까지의 최소 이동 시간 저장
   
    // 인접 리스트에 도로 정보 추가
    road.forEach(([a, b, c]) => {
        graph[a].push([b, c]); // 마을 a에서 b로 가는 데 걸리는 시간 c
        graph[b].push([a, c]); // 마을 b에서 a로 가는 데 걸리는 시간 c
    });
    
    // 다익스트라 알고리즘
    const dijkstra = (start) => {
        const pq = [[start, 0]]; // 우선순위 큐 [마을 번호, 현재까지의 거리]
        dist[start] = 0; // 시작점의 거리 0으로 설정
        
        while (pq.length > 0) {
            const [current, currentDist] = pq.shift(); // 우선순위 큐에서 최소 거리 마을 추출
            
            // 이미 처리된 마을이면 건너뜀
            if (currentDist > dist[current]) continue;

            // 인접한 마을들에 대해
            graph[current].forEach(([next, time]) => {
                const nextDist = currentDist + time;
                
                // 더 짧은 경로가 발견되면 갱신
                if (nextDist < dist[next]) {
                    dist[next] = nextDist;
                    pq.push([next, nextDist]);
                    pq.sort((a, b) => a[1] - b[1]); // 최소 거리를 기준으로 정렬
                    
                }
            });
        }
    };

    dijkstra(1); // 마을 1에서 시작하여 다익스트라 실행

    // K시간 이내에 도달할 수 있는 마을의 개수 세기
    return dist.filter(time => time <= K).length;
}

// 다익스트라 알고리즘을 활용
// V는 마을의 수, E는 도로의 수
// 시간 복잡도 : O(V^2 log V + E)