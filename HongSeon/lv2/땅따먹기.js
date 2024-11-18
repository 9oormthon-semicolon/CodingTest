// dp 이용 (land 자체가 dp 배열)
function solution(land) {
    // 2번째 행부터 시작하여 각 칸에 가능한 최대 점수를 누적 계산
    // 행 순회
    for (let i = 1; i < land.length; i++) {
        // 열 순회
        for (let j = 0; j < land[i].length; j++) {
            // 현재 위치 (i, j)의 값을 갱신하기 위해 이전 행(i-1)을 참조 : i가 1부터 시작하는 이유
            // 이전 행에서 현재 열(j)을 제외한 값들 중 최대값을 구함
            // land[i - 1].slice(0, j) : 이전 행의 0번째부터 j-1번째까지 부분 배열
            // land[i - 1].slice(j + 1) : 이전 행의 j+1번째부터 끝까지 부분 배열
            // 위 두 배열을 합쳐 현재 열을 제외한 배열을 만듬
            const maxVal = Math.max(...land[i - 1].slice(0, j).concat(land[i - 1].slice(j + 1)))
            land[i][j] += maxVal
        }
    }

    // 마지막 행에서 최대값 반환
    return Math.max(...land[land.length - 1])
}
