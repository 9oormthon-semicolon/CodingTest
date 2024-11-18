function solution(land) {
    const n = land.length;
    
    for (let i = 1; i < n; i++) {
        land[i][0] += Math.max(land[i-1][1], land[i-1][2], land[i-1][3]);
        land[i][1] += Math.max(land[i-1][0], land[i-1][2], land[i-1][3]);
        land[i][2] += Math.max(land[i-1][0], land[i-1][1], land[i-1][3]);
        land[i][3] += Math.max(land[i-1][0], land[i-1][1], land[i-1][2]);
    }
    
    return Math.max(...land[n-1]);
}

/*
이 문제는 동적 프로그래밍(Dynamic Programming)을 사용하여 효율적으로 해결할 수 있음

입력으로 주어진 land 배열을 직접 수정하면서 각 위치에서의 최대 점수 계산
두 번째 행부터 시작하여 각 열의 값을 이전 행에서 선택할 수 있는 최대값과 더함
마지막 행에 도달하면, 그 행의 값들 중 최대값이 전체 경로의 최대 점수가 됨
Math.max(...land[n-1])를 사용하여 마지막 행에서 가장 큰 값을 반환

시간 복잡도 - O(n) n은 행의 수 
각 행을 한 번씩 순회하면서 상수 시간의 연산을 수행하기 때문
*/
