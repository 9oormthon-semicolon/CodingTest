function solution(land) {
    for (let i = 1; i < land.length; i++) {
        // 현재 행의 각 열을 업데이트하여 이전 행의 최대 점수 경로를 반영
        land[i][0] += Math.max(land[i - 1][1], land[i - 1][2], land[i - 1][3]);
        land[i][1] += Math.max(land[i - 1][0], land[i - 1][2], land[i - 1][3]);
        land[i][2] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][3]);
        land[i][3] += Math.max(land[i - 1][0], land[i - 1][1], land[i - 1][2]);
    }

    // 마지막 행에서 가능한 최대 점수를 반환
    return Math.max(...land[land.length - 1]);
}

// 동적 프로그래밍을 이용하여 각 행의 다른 열들중 가장 큰값을 더하는 식
// i가 1일때 : [ 1, 2, 3, 5 ], [ 10, 11, 12, 11 ], [ 4, 3, 2, 1 ] ] 
// i가 2일때 :  [ 1, 2, 3, 5 ], [ 10, 11, 12, 11 ], [ 16, 15, 13, 13 ] 

// 시간복잡도 : O(N)