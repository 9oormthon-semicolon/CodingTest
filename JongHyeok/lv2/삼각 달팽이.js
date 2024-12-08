function solution(n) {
    // 삼각형 배열
    const triangle = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0));
    const dir = [[1, 0], [0, 1], [-1, -1]];
    let x = 0, y = 0, direction = 0; // 초기 위치, 방향
    let num = 1;
    // 숫자 채우기
    while (num <= (n * (n + 1)) / 2) {
        triangle[x][y] = num;
        num++;
        // 위치 갱신
        const [dx, dy] = dir[direction];
        const nx = x + dx, ny = y + dy;
        // 이동할 수 없다면
        if (nx < 0 || nx >= n || ny < 0 || ny > nx || triangle[nx][ny] !== 0) {
            direction = (direction + 1) % 3; // 방향 바꾸기
        }
        x += dir[direction][0];
        y += dir[direction][1];
    }
    // 2차원 배열 > 1차원 배열
    return triangle.flat();
}
const n = 4;
console.log(solution(n));

/*
만들어지는 삼각형의 개수는 n*(n+1)/2이기 때문에
시간복잡도는 O(N²)
*/