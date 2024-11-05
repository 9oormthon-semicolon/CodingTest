function solution(board, moves) {
  let stack = [];
  let count = 0;

  // moves 배열을 순회
  for (let i = 0; i < moves.length; i++) {
    let col = moves[i] - 1; // 열 인덱스 계산

    // 해당 열에서 인형 찾기
    for (let j = 0; j < board.length; j++) {
      if (board[j][col] !== 0) {
        let doll = board[j][col];
        board[j][col] = 0; // 인형 제거

        if (stack.length > 0 && stack[stack.length - 1] === doll) {
          stack.pop();
          count += 2;
        } else {
          stack.push(doll);
        }
        break; // 인형을 찾았으면 다음 move로
      }
    }
  }

  return count;
}

// console.log(
//   solution(
//     [
//       [0, 0, 0, 0, 0],
//       [0, 0, 1, 0, 3],
//       [0, 2, 5, 0, 1],
//       [4, 2, 4, 4, 2],
//       [3, 5, 1, 3, 1],
//     ],
//     [1, 5, 3, 5, 1, 2, 1, 4]
//   )
// );
// 4
