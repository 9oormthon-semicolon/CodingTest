function solution(k, tangerine) {
    // 각 귤 유형별 개수를 저장할 객체 선언
    let gullType = {};
    
    // 귤의 각 유형을 순회하면서 유형별 개수를 기록
    tangerine.forEach(type => {
        if (!gullType.hasOwnProperty(type)) {
            gullType[type] = 1;
        } else {
            gullType[type]++;
        }
    });
    // 유형별 개수만 모아서 배열로 변환
    const sortedGullTypeAmoumt = Object.values(gullType);
    let sum = 0;
    let cnt = 0;

    // 유형별 개수를 내림차순으로 정렬
    sortedGullTypeAmoumt.sort((a, b) => b - a);
   
    // k보다 작은 합이 될 때까지 더해가며 개수 증가
    while (k > sum) {
        sum += sortedGullTypeAmoumt[cnt];
        cnt++;
    }
    return cnt;
}

// 시간복잡도 : O(n + m log m)