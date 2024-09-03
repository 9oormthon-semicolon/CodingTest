function solution(N, stages) {
    // 각 스테이지에 도달한 사람 수를 저장할 배열 초기화
    let stageCounts = Array(N + 1).fill(0);
    // 각 스테이지에 도달한 사람 수를 카운팅
    stages.forEach(stage => {
        if (stage <= N) {
            stageCounts[stage]++;
        }
    });

    // 총 도전한 사람 수
    let totalPlayers = stages.length;
    let failureRates = [];

    // 각 스테이지의 실패율을 계산
    for (let i = 1; i <= N; i++) {
        if (totalPlayers === 0) {
            failureRates.push({ stage: i, failureRate: 0 });
        } else {
            let failureRate = stageCounts[i] / totalPlayers;
            failureRates.push({ stage: i, failureRate: failureRate });
            totalPlayers -= stageCounts[i];
        }
    }

    // 실패율을 기준으로 내림차순 정렬, 실패율이 같다면 스테이지 번호 오름차순 정렬
    failureRates.sort((a, b) => b.failureRate - a.failureRate || a.stage - b.stage);

    // 정렬된 스테이지 번호 배열 반환
    return failureRates.map(entry => entry.stage);
}

/*
시간 복잡도: 이 문제에서 각 스테이지에 대해 실패율을 계산하고 정렬해야 하므로
시간 복잡도는 O(N×M)입니다.
여기서 
N은 스테이지의 개수, M은 플레이어 수를 나타냅니다.
정렬 과정이 𝑂(𝑁 log 𝑁)이므로 실제 복잡도는 𝑂(𝑁𝑀 + 𝑁 log 𝑁)입니다.
*/
