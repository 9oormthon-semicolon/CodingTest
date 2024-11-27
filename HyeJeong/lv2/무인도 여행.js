function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;
    const visited = Array.from({ length: rows }, () => Array(cols).fill(false));
    const result = [];

    function dfs(x, y) {
        if (x < 0 || x >= rows || y < 0 || y >= cols || maps[x][y] === 'X' || visited[x][y]) {
            return 0;
        }

        visited[x][y] = true;
        let sum = parseInt(maps[x][y]);

        sum += dfs(x + 1, y);
        sum += dfs(x - 1, y);
        sum += dfs(x, y + 1);
        sum += dfs(x, y - 1);

        return sum;
    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (maps[i][j] !== 'X' && !visited[i][j]) {
                const days = dfs(i, j);
                result.push(days);
            }
        }
    }

    return result.length ? result.sort((a, b) => a - b) : [-1];
}

/*
2차원 배열 visited를 생성하여 방문한 칸을 추적
DFS(깊이 우선 탐색) 함수를 정의하여 각 무인도를 탐색
지도의 모든 칸을 순회하면서 숫자인 칸(무인도)을 발견하면 DFS를 시작함
DFS 함수는 현재 위치에서 상, 하, 좌, 우로 이동하며 연결된 모든 땅의 값을 더함
각 무인도에서 머물 수 있는 일수(합계)를 result 배열에 추가
최종적으로 result 배열을 오름차순으로 정렬하여 반환
무인도가 없는 경우 [-1]을 반환

시간복잡도 - O(N * M)
N은 지도의 행 수, M은 열 수
*/
