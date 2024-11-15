function solution(land) {
    // 각 칸마다의 최대 점수 계산
    for (let i = 1; i < land.length; i++) {
        for (let j = 0; j < 4; j++) {
            // 첫번째 칸 += 2~4번째 칸 중 최대값 더함
            land[i][j] += Math.max(...land[i-1].filter((_, idx) => idx !== j));
        }
    }
    return Math.max(...land[land.length - 1]); // 최대값 반환
}

/*
시간복잡도 land의 길이 N에 대해 반복문을 반복하기 때문에
O(N)
*/