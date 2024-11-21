function solution(triangle) {
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length; j++) {
            triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1]);
        }
    }
    return triangle[0][0];
}

/*
삼각형의 맨 아래 줄 바로 위부터 시작하여 위로 올라감
각 위치에서, 바로 아래의 두 숫자 중 더 큰 값을 현재 위치의 숫자에 더함
이 과정을 반복하면 꼭대기에 도달했을 때 최대 합이 나옴
최종적으로 꼭대기의 값을 반환

시간복잡도 - O(n^2)
*/
