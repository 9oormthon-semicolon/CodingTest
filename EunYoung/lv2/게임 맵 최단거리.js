function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  // 상, 하, 좌, 우 이동을 위한 배열
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  // BFS를 위한 큐
  const queue = [[0, 0, 1]];

  while (queue.length > 0) {
    const [x, y, count] = queue.shift();

    if (x === n - 1 && y === m - 1) {
      return count;
    }

    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (nx >= 0 && nx < n && ny >= 0 && ny < m && maps[nx][ny] === 1) {
        queue.push([nx, ny, count + 1]);
        maps[nx][ny] = 0; // 방문한 곳은 0으로 표시
      }
    }
  }

  return -1; // 도착점에 도달할 수 없는 경우
}

// 시간복잡도
// 각 칸은 최대 한 번만 방문(방문한 곳을 0으로 표시하기 때문).
// 전체 루프의 복잡도는 O(n * m).
