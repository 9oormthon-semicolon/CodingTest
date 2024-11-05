function solution(m, n, puddles) {
    // n+1 x m+1 크기의 2차원 배열 생성 및 0으로 초기화
    let arr = Array.from(Array(n+1), () => Array(m+1).fill(0));
    
    // 물웅덩이 좌표를 -1로 표시하여 이동 불가한 구역으로 설정
    if(puddles.length > 0) 
        puddles.forEach(([col, row]) => arr[row][col] = -1);
    
    // 재귀 함수로 경로 수 계산
    const getRoute = (row, col) => {
        // 범위를 벗어나거나 물웅덩이인 경우 0을 반환
        if(row > n || col > m || arr[row][col] === -1) return 0;
        
        // 도착 지점에 도달하면 1을 반환 (경로 하나 발견)
        if(row === n && col === m) return 1;
        
        // 이미 계산된 경로 수가 있다면 해당 값 반환
        if(arr[row][col] !== 0) return arr[row][col];
        
        // 경로 수를 계산하고 모듈로 연산 후 배열에 저장
        else return arr[row][col] = (getRoute(row+1, col) + getRoute(row, col+1)) % 1000000007;
    };
    
    // 시작 지점에서 호출하여 결과 반환
    return getRoute(1,1);
}

// 시간 복잡도는 격자의 각 위치에 대해 한 번씩 연산을 수행하므로 O(m * n)
// 너무 어려워요,,,