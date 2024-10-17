function solution(N, road, K) {
    let dist = new Array(N + 1);
    let graph = new Array(N + 1);
    let i, j, a, b, c;
    let count = 0;

    // 그래프 초기화
    for (i = 1; i <= N; i++) {
        dist[i] = Infinity;
        graph[i] = [];
    }
    dist[1] = 0;

    // 그래프 구성
    for (i = 0; i < road.length; i++) {
        a = road[i][0];
        b = road[i][1];
        c = road[i][2];
        graph[a].push([b, c]);
        graph[b].push([a, c]);
    }

    // 다익스트라 알고리즘
    let queue = [[1, 0]];
    while (queue.length > 0) {
        let current = queue.shift();
        let node = current[0];
        let cost = current[1];

        if (dist[node] < cost) continue;

        for (i = 0; i < graph[node].length; i++) {
            let next = graph[node][i][0];
            let nextCost = cost + graph[node][i][1];
            if (nextCost < dist[next]) {
                dist[next] = nextCost;
                queue.push([next, nextCost]);
            }
        }

        // 간단한 정렬 (삽입 정렬 방식)
        for (i = 1; i < queue.length; i++) {
            let temp = queue[i];
            for (j = i - 1; j >= 0 && queue[j][1] > temp[1]; j--) {
                queue[j + 1] = queue[j];
            }
            queue[j + 1] = temp;
        }
    }

    // K 이하의 거리에 있는 마을 수 계산
    for (i = 1; i <= N; i++) {
        if (dist[i] <= K) {
            count++;
        }
    }

    return count;
}

/*
변수 선언을 함수 시작 부분에 모아두고 for 루프를 사용하여 배열을 초기화하고 순회
2차원 배열(그래프)을 사용하여 도로 정보를 저장
큐(queue)를 배열로 구현하고, shift() 메서드를 사용하여 첫 번째 요소 제거
간단한 삽입 정렬을 구현하여 큐를 정렬

시간복잡도 - O(n^2)

더 좋은 방법이 있을 것 같다. 코드가 효율성이 너무 떨어져 보인다. 
*/
