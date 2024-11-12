function solution(n, computers) {
    const visited = new Array(n).fill(false); // 각 컴퓨터의 방문 여부를 추적하는 배열
    let networkCount = 0;
  
    // DFS 함수 정의
    function dfs(computer) {
      visited[computer] = true; // 현재 컴퓨터를 방문 처리
  
      for (let i = 0; i < n; i++) {
        if (computers[computer][i] === 1 && !visited[i]) { 
          dfs(i); // 연결된 컴퓨터로 DFS 탐색
        }
      }
    }
  
    // 각 컴퓨터에 대해 DFS 시작
    for (let i = 0; i < n; i++) {
      if (!visited[i]) { // 방문하지 않은 컴퓨터를 찾으면
        dfs(i);          // 새로운 네트워크로 간주하고 DFS 수행
        networkCount++;  // 네트워크 수 증가
      }
    }
  
    return networkCount; // 총 네트워크 수 반환
  }
  
// 시간복잡도 O(n^2)