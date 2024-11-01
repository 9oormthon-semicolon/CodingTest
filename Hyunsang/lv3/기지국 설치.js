// function solution(n, stations, w) {
//     let answer = 0;
//     let buildingLine = Array.from({length: n}).fill(0);
    
//     stations.forEach(station => {
//         let stationIdx = station -1;
        
//         for (let i = stationIdx-w ; i <= stationIdx+w; i++) {
//             buildingLine[i] = 1;
//         }
        
//     })
    
//    // 커버되지 않은 구간에 추가 기지국 설치
//     for (let i = 0; i < n; i++) {
//         if (buildingLine[i] === 0) {
//             answer++; // 새로운 기지국 추가
//             i += 2 * w; // 현재 설치된 기지국의 커버리지 범위만큼 건너뜀
//         }
//     }
//     return answer;
// }

// 효율성테스트에서 실패,,

function solution(n, stations, w) {
    let cnt = 0; // 필요한 기지국 개수
    let start = 1; // 현재 커버되지 않은 구간의 시작 지점

    // 각 기지국 위치를 순회
    for (let i = 0; i < stations.length; i += 1) {
        // 현재 커버되지 않은 구간의 길이를 계산하여 필요한 기지국 개수를 추가
        cnt += Math.ceil((stations[i] - w - start) / (2 * w + 1));

        // stations[i] - w가 start보다 크다면, start부터 stations[i] - w까지의 구간이 커버되지 않은 구간
        // (stations[i] - w - start)는 이 커버되지 않은 구간의 길이
        // 이 길이를 한 기지국이 커버할 수 있는 범위 2 * w + 1로 나누면, 
        // 해당 구간을 채우는 데 필요한 최소 기지국 개수가 나옴
        // 나눗셈의 결과를 올림(Math.ceil)하여 cnt에 추가

        // 현재 기지국이 커버하는 구간 이후로 커버되지 않은 구간 시작 지점을 갱신
        start = stations[i] + w + 1;
    }

    // 마지막 기지국 이후 남은 커버되지 않은 구간에 대해 필요한 기지국 개수를 추가
    cnt += Math.ceil((n + 1 - start) / (2 * w + 1));

    return cnt;
}

// 시간복잡도: O(n);