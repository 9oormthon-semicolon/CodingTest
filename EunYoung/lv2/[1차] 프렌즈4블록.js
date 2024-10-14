function solution(m, n, board) {
  // 문자열 배열을 2차원 배열로 변환
  board = board.map((row) => row.split(""));

  let answer = 0; // 제거된 블록의 총 개수
  let hasMatched = true; // 매치된 블록이 있는지 확인하는 플래그

  // 매치되는 블록이 없을 때까지 반복
  while (hasMatched) {
    hasMatched = false; // 새로운 라운드 시작, 매치 여부 초기화

    // 매치된 블록을 표시할 2차원 배열 생성 (모두 false로 초기화)
    let matchedBlocks = Array.from({ length: m }, () =>
      new Array(n).fill(false)
    );

    // 2x2 블록 찾기
    for (let i = 0; i < m - 1; i++) {
      for (let j = 0; j < n - 1; j++) {
        // 현재 위치에서 2x2 블록이 모두 같은 문자인지 확인
        // board[i][j]가 null이 아니고(즉, 블록이 존재하고),
        // 현재 블록과 오른쪽, 아래, 오른쪽 아래 블록이 모두 같은 경우
        if (
          board[i][j] &&
          board[i][j] === board[i][j + 1] &&
          board[i][j] === board[i + 1][j] &&
          board[i][j] === board[i + 1][j + 1]
        ) {
          // 매치된 2x2 블록의 위치를 matchedBlocks에 표시
          matchedBlocks[i][j] =
            matchedBlocks[i][j + 1] =
            matchedBlocks[i + 1][j] =
            matchedBlocks[i + 1][j + 1] =
              true;
          hasMatched = true; // 매치된 블록이 있음을 표시
        }
      }
    }

    // 매치된 블록 제거 및 카운트
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (matchedBlocks[i][j]) {
          board[i][j] = null; // 블록 제거
          answer++; // 제거된 블록 카운트 증가
        }
      }
    }

    // 블록 떨어뜨리기
    for (let j = 0; j < n; j++) {
      // 각 열에 대해
      let emptyIndex = m - 1; // 가장 아래쪽 빈 공간의 인덱스
      for (let i = m - 1; i >= 0; i--) {
        // 아래에서부터 위로 검사
        if (board[i][j]) {
          // 블록이 존재하면
          // 현재 블록을 가장 아래쪽 빈 공간으로 이동
          [board[emptyIndex][j], board[i][j]] = [
            board[i][j],
            board[emptyIndex][j],
          ];
          emptyIndex--; // 다음 빈 공간 인덱스 갱신
        }
      }
    }
  }

  return answer; // 제거된 총 블록 수 반환
}

// 시간복잡도
// 2x2 블록 찾기: O(m*n)
// 블록 제거 및 카운트: O(m*n)
// 블록 떨어뜨리기: O(m*n)

// 전체 시간 복잡도:
// O(mn * (mn)) = O((m*n)^2)
// 여기서 m은 보드의 높이, n은 보드의 너비
