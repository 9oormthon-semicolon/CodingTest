function solution(n, computers) {
    let visited = new Map();
    let answer = 0;

    function dfs(i) {
        visited.set(i, true) // i 컴퓨터 방문
        for (let j = 0; j < n; j++) {
            if (computers[i][j] === 1 && !visited.get(j)) {
                // 이어져 있고 방문하지 않은 노드라면
                dfs(j);
            }
        }
    }

    for (let i = 0; i < n; i++) {
        if (!visited.get(i)) {
        // 방문하지 않았다면 함수 실행
            dfs(i);
            answer++;
        }
    }

    return answer;
}

const n = 3, computers = [[1, 1, 0], [1, 1, 0], [0, 0, 1]];
console.log(solution(n, computers));

/*
시간복잡도 O(N²)
*/