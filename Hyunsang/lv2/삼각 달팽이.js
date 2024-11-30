function solution(n) {
    
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    let num = 1;
    let row = 0, col = 0; // 시작 위치
    let direction = 0; // 방향: 0(아래), 1(오른쪽), 2(위쪽 대각선)

    while (num <= (n * (n + 1)) / 2) { // 숫자 최대 범위는 1부터 n(n+1)/2까지
        triangle[row][col] = num++; // 현재 위치에 숫자 채우기

        // 다음 위치 결정
        if (direction === 0) { // 아래로 이동
            if (row + 1 < n && triangle[row + 1][col] === 0) {
                row++;
            } else {
                direction = 1; // 방향 전환: 오른쪽
                col++;
            }
        } else if (direction === 1) { // 오른쪽으로 이동
            if (col + 1 < triangle[row].length && triangle[row][col + 1] === 0) {
                col++;
            } else {
                direction = 2; // 위쪽 대각선
                row--;
                col--;
            }
        } else if (direction === 2) { // 위쪽 대각선으로 이동
            if (row - 1 >= 0 && col - 1 >= 0 && triangle[row - 1][col - 1] === 0) {
                row--;
                col--;
            } else {
                direction = 0; 아래로
                row++;
            }
        }
    }

    // 결과를 1차원 배열로 변환
    return triangle.flat();
}

// 시간복잡도 : 시간 복잡도: O(n^2)