function solution(board) {
    
    let len = 0
    const Board = board.map(v => [...v])
    const N = board.length, M = board[0].length
    
    if (N <= 1 || M <= 1) return 1
    
    //사각형의 최솟값 추출 
    const getMin = (row, col) => Math.min(Board[row - 1][col - 1],Board[row - 1][col], Board[row][col - 1])
    
    for (let row = 1; row < N; row++) {
        for (let col = 1; col < M; col++) {
            //사각형이 된다면
            if (Board[row][col] > 0) {
                //본인 인덱스 +1, 최대 길이 추출
                Board[row][col] = getMin(row, col) + 1
                len = Math.max(Board[row][col], len)
            }
        }
    }
    
     return len * len
}

/*
    한정된 2차원 배열에서 최댓값을 뽑는 dp문제입니다
    작은 사각형이 만들어지면 우측 하단에 +1을 하여 누적하는 방식으로 구현했습니다
    의도하지는 않았는데 n^2 배열 자르기랑 모양새가 약간 비슷하네용
    
    111 => 111
    111    122 
    111    123
    
    O((n - 1) * (m - 1))
*/