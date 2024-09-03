// 실패율(실패한 수 / 스테이지 도달 수)을 구해 정렬 하는 문제
// 단, 각 스테이지의 실패율을 기준으로 정렬하고 스테이지 번호를  
// 출력해야 하기 때문에 index같은 개념을 이용해야함

function solution(N, stages) {
    let result = [];
    
    // 스테이지 1 ~ N만큼 반복
    for (let i = 1; i <= N; i++) {
        // 실패한 수
        let fail = 0;
        // 스테이지에 도달한 수
        let total = 0;
        // 스테이지마다 모든 플레이어의 현재 스테이지 순회
        for (let j = 0; j < stages.length; j++) {
            // 플레이어의 현재 스테이지가 순회하고 있는 스테이지 보다 크다면
            // 스테이지에 도달한 수+
            if (stages[j] >= i) {
                total++;
            }
            // 플레이어의 현재 스테이지가 순회하고 있는 스테이지와 같다면
            // 실패한 수+
            if (stages[j] === i) {
                fail++;
            }
        }
        // 배열을 이용하여 스테이지 번호, 실패율을 함께 저장
        result.push([i, fail / total]); 
    }

    // 실패율을 기준으로 내림차순 정렬
    result.sort((a, b) => b[1] - a[1]);
    
    // 정렬된 스테이지 번호만 반환
    return result.map(e => e[0]);
}

/* 시간 복잡도
    - for 루프 i(N의 길이만큼 순회) : O(n)
    - for 루프 j(stages 길이만큼 순회) : O(m)
    => O(n*m)

    * result와 N의 길이는 동일
    - sort(result의 길이만큼 순회) : O(nlogn)
    - map(result의 길이만큼 순회) : O(n)
    => O(nlogn)

    => 전체 시간 복잡도 : O(n*m)
*/
