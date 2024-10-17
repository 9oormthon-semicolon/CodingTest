function solution(N, road, K) {
  // 그래프 초기화 (마을 번호가 1부터 시작)
  const graph = Array.from({ length: N + 1 }, () => []);

  // a - b 이어진 도로, c 거리
  for (const [a, b, c] of road) {
    // a에서 b로 가는 길 추가
    graph[a].push([b, c]);
    // b에서 a로 가는 길 추가
    graph[b].push([a, c]);
  }
  // 거리 배열 초기화
  const dist = Array(N + 1).fill(Infinity);
  dist[1] = 0;

  // 우선순위 큐 구현
  const pq = [[0, 1]];

  while (pq.length > 0) {
    const [cost, node] = pq.shift();

    if (dist[node] < cost) continue;

    for (const [nextNode, nextCost] of graph[node]) {
      const totalCost = cost + nextCost;
      if (totalCost < dist[nextNode]) {
        dist[nextNode] = totalCost;
        pq.push([totalCost, nextNode]);
      }
    }

    // 거리 기준으로 정렬
    pq.sort((a, b) => a[0] - b[0]);
  }

  // K 이하의 거리에 있는 마을 수 계산
  return dist.filter((d) => d <= K).length;
}

/**
 * const dist = Array(N + 1).fill(Infinity);
 *  초기에는 모든 마을까지의 거리를 무한대로 설정합니다.
    알고리즘이 진행되면서 더 짧은 경로가 발견될 때마다 이 값들이 업데이트됩니다.
    무한대로 초기화하는 이유는 아직 경로를 찾지 못했음을 나타내기 위함
 */

/**
 * 시간복잡도
 * 그래프 초기화: O(E)
 * while 루프: 최대 O(N) 번 반복 (N은 노드/마을의 수)
 * 각 반복에서:
  배열에서 최소값 찾기: O(N)
  인접 노드 탐색: 최악의 경우 O(N)
  배열 정렬: O(N log N)

  전체 시간 복잡도:
  O(E + N^2 log N)
 */
