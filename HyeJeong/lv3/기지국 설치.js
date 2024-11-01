function solution(n, stations, w) {
    let answer = 0; //추가로 설치해야 할 기지국의 수
    const coverage = w * 2 + 1; //하나의 기지국이 커버할 수 있는 범위 (W * 2 + 1)
    let position = 1; //현재 검사 중인 아파트 위치

    for (const station of stations) {
        const start = station - w;
        if (start > position) {
            const length = start - position;
            answer += Math.ceil(length / coverage);
        }
        position = station + w + 1;
    }

    if (position <= n) {
        const length = n - position + 1;
        answer += Math.ceil(length / coverage);
    }

    return answer;
}

/*
기존 기지국 사이의 빈 공간 처리를 각 기지국에 대해 반복문을 실행
현재 기지국의 시작 범위(start)를 계산
start가 position보다 크다면, 그 사이에 새 기지국을 설치해야 함
필요한 기지국 수를 계산하여 answer에 더하고 position을 현재 기지국의 범위 끝으로 업데이트
마지막 기지국 이후에 남은 아파트가 있다면 추가 기지국을 설치하고 총 필요한 추가 기지국 수를 결과로 반환

시간복잡도 - O(stations.length)
*/
