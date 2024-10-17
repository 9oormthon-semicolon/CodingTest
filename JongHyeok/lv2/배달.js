function solution(N, road, K) {
    const graph = Array.from({ length: N }, () => []); // 그래프 초기화
    for (const [a, b, c] of road) { // 노드들 간의 거리
        graph[a-1].push([b-1, c]);
        graph[b-1].push([a-1, c]);
    }
    
    const dist = Array(N).fill(Infinity); 
    dist[0] = 0; // 시작 노드

    const priorityQueue = [[0, 0]]; // 우선순위 큐 (거리, 노드)

    while(priorityQueue.length){
        const [curDist, curNode] = priorityQueue.shift();

        if(curDist > dist[curNode]) continue; // 현재까지의 거리가 이미 dist 배열에 저장된 거리보다 크면

        for(const [nextNode, weight] of graph[curNode]) {
            const nextDist = curDist + weight;
            if (nextDist < dist[nextNode]){ // 더 짧은 경로를 찾으면
                dist[nextNode] = nextDist; // 최단거리 최신화
                priorityQueue.push([nextDist, nextNode]); // 다음 노드 정보 최신화
            }
        }
        priorityQueue.sort();
    }

    return dist.filter(d => d <= K).length;
}

const N = 5, K = 3;
const road = [[1,2,1],[2,3,3],[5,2,2],[1,4,2],[5,3,1],[5,4,2]];
console.log(solution(N, road, K));

/*
해당 문제는 다익스트라 알고리즘을 이용하며
마을을 이동할 때마다 최단거리를 가진 마을로 이동합니다. (거리를 갱신하며)

while 반복문은 마을의 개수만큼 반복되며
반복문 안에 O(NlogN)의 시간복잡도를 가지는 sort 함수가 있기 때문에
전체 시간복잡도는 O((N+E)logE)
*/