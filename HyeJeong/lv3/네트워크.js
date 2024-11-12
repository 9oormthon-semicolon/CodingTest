function solution(n, computers) {
    let answer = 0;
    const visited = new Array(n).fill(false);
    
    function dfs(index) {
        visited[index] = true;
        
        for (let i = 0; i < n; i++) {
            if (computers[index][i] === 1 && !visited[i]) {
                dfs(i);
            }
        }
    }
    
    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            dfs(i);
            answer++;
        }
    }
    
    return answer;
}

/*
answer 변수를 0으로 초기화 (네트워크의 수를 카운트)
visited 배열을 생성하여 각 컴퓨터의 방문 여부를 추적
[dfs 함수 정의]
현재 컴퓨터를 방문했다고 표시
현재 컴퓨터와 연결된 모든 컴퓨터 확인
연결되어 있고 아직 방문하지 않은 컴퓨터에 대해 재귀적으로 dfs를 호출
모든 컴퓨터에 대해 반복
- 아직 방문하지 않은 컴퓨터를 발견하면, 그 컴퓨터에서 시작하는 dfs를 호출
- dfs 호출 후 answer를 1 증가 (새로운 네트워크를 발견했음을 의미)
최종적으로 answer를 반환 answer는 발견된 총 네트워크의 수

시간복잡도 - O(n^2) n은 컴퓨터의 수
각 컴퓨터에 대해 최대 n번의 연결을 확인해야 하기 때문
*/
