function solution(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
        }
    }
    return triangle[0][0];
}

const triangle = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(triangle));

/*
하향식으로 풀었을 때 효율성 테스트 1개 통과 못해서
상향식으로 풀었습니다.
맨아래 배열에서부터 각 요소들의 두 대각선 요소 중 큰 값을 더합니다.
맨위에는 최대값이 저장됩니다.
삼각형의 높이(triangle 배열의 길이)가 N일 때,
높이 * 맨아래 배열 길이는 모두 N이기 때문에
시간복잡도 O(N²)
*/