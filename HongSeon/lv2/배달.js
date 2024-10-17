// 플로이드 워셜 알고리즘(모든 지점에서 다른 모든 지점까지의 최단 경로를 모두 구하는 알고리즘) 이용
// 시간복잡도가 높아 통과 못할 줄 알았는데 다행히 통과
function solution(N, road, K) { 
    // 모든 마을 간 거리 정보를 저장하는 배열
    let dist = []; 
    let cnt = 0;
    
    // 1.모든 요소를 Infinity로 설정하여 배열 초기화
    for (let i = 0; i < N; i++) {
        dist[i] = []; 
        for (let j = 0; j < N; j++) {
            dist[i][j] = Infinity; 
        }
    }
    
    // 2.자기 자신으로 가는 거리는 0으로 설정
    for (let i = 0; i < N; i++) {
        dist[i][i] = 0;
    }

    // 3.양방향 도로 정보로 거리 배열 초기화 (배열 인덱스를 0 기반으로 맞춤)
    road.forEach(([a, b, c]) => {
        dist[a - 1][b - 1] = Math.min(dist[a - 1][b - 1], c); 
        dist[b - 1][a - 1] = Math.min(dist[b - 1][a - 1], c);
    });

    // 4.플로이드 워셜 알고리즘 실행
    for (let k = 0; k < N; k++) {
        for (let i = 0; i < N; i++) {
            for (let j = 0; j < N; j++) {
                dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
            }
        }
    }

    // 5.1번(인덱스는 0) 마을에서 다른 마을까지의 거리가 K 이하인 마을 개수 계산
    for (let i = 0; i < N; i++) {
        if (dist[0][i] <= K) cnt++
    }

    return cnt;
}

/* 시간복잡도
 - 1. 2중 for문 [N을 순회] : O(n^2)

 - 2. for문 [N을 순회] : O(n)

 - 3. forEach [road 순회] : O(road)이지만 전체 시간복잡도에는 영향x

 - 4. 3중 for문 [플로이드 워셜 알고리즘] : O(n^3)

 - 5. for문 [N을 순회] : O(n) 

 => 전체 시간 복잡도 : O(n^3)
*/

//알고리즘 하나 배워갑니다~ 
