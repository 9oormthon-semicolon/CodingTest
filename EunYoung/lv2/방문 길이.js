function solution(dirs) {
  const visited = new Set();
  let x = 0,
    y = 0;

  const move = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let dir of dirs) {
    let nx = x + move[dir][0];
    let ny = y + move[dir][1];

    // 맵의 범위를 벗어나지 않는지 확인
    if (nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5) {
      // 양방향 경로를 저장
      visited.add(`${x},${y},${nx},${ny}`);
      visited.add(`${nx},${ny},${x},${y}`);

      x = nx;
      y = ny;
    }
  }

  // Set의 크기를 2로 나누어 실제 이동한 경로의 수를 계산
  return visited.size / 2;
}

// 시간 복잡도는 O(n)
// 여기서 n은 입력 문자열 dirs의 길이. 각 명령을 한 번씩 처리하기 때문.
