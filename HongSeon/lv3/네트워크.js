// DFS 이용
function solution(n, computers) {
    let result = 0
    // 방문 여부 초기화
    let visited = new Array(n).fill(false)

    // 모든 노드 방문할 때 까지 반복
    while (visited.includes(false)) {
        // 스택을 이용하여 방문하지 않은 노드를 찾기
        let stack = [visited.indexOf(false)]
        // 새로운 노드 발견
        result += 1

        // DFS 구간
        while (stack.length > 0) {
            // 방문하고 있는 현재 노드를 스택에서 추출
            let now = stack.pop()
            // 현재 노드를 방문하지 않은 경우
            if (!visited[now]) {
                // 방문 여부를 바꿔줌
                visited[now] = true
                // 우선 자신을 제외, 방문하지 않은 노드만 대상
                // 그 중 연결된 노드가 있다면 스택에 추가
                for (let i = 0; i < n; i++) {
                    if (now !== i && !visited[i] && computers[now][i] === 1) stack.push(i)
                }
            }
        }
    }

    return result
}

/* 시간복잡도 
 - while (visited.includes(false)) : O(n)

 - while (stack.length > 0) [DFS 구간] : O(n^2)

 => 전체 시간 복잡도 : O(n^2)
*/
