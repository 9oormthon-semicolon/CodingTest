// 지워지는 블록이 있는지 확인 -> 블록 지움 -> 블록 아래로 내림
// 이 과정을 반복하는 문제인데 매우 어렵다...
function solution(m, n, board) {
    let result = 0; 
    // 각 문자열을 배열로 변환하여 2차원 배열로 변경
    board = board.map(row => row.split(''));
    // 블록이 더 이상 지워지지 않을 때까지 반복
    while (true) {
        let remove = []; // 2x2 형태로 지워질 블록의 좌표를 저장할 배열
        
        // 1.지워지는 블록이 있는지 확인하는 과정
        // 모든 블록을 검사하여 2x2 블록이 있는지 확인
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                // 현재 위치의 
                let temp = board[i][j]; 
                // 만약 현재 블록이 공백(지워진 블록)이면 패스
                if (temp === ' ') continue;
                // 현재 블록이 2x2로 다른 블록과 같은지 검사
                // 오른쪽, 아래, 대각선 아래의 블록과 같은지 비교하여 2x2를 만족하면 remove 배열에 추가
                if (temp === board[i + 1][j + 1] && temp === board[i + 1][j] && temp === board[i][j + 1]) {
                    remove.push([i, j]); 
                }
            }
        }

        // 지워질 블록이 없다면 반복 종료
        if (remove.length === 0) {
            // 최종적으로 지워진 블록의 수를 계산
            // 각 행에서 공백 개수를 센 후 반환
            for (let k = 0; k < m; k++) {
                result += board[k].filter(c => c === ' ').length; 
            }
            return result; 
        }
        
        // 2.블록 지우는 과정
        // 2x2로 모인 블록을 공백(' ')으로 변경
        for (let [y, x] of remove) {
            // 좌상단을 기준으로 2x2 블록 모두를 공백으로 처리
            board[y][x] = ' ';
            board[y][x + 1] = ' ';
            board[y + 1][x] = ' ';
            board[y + 1][x + 1] = ' ';
        }
        
        // 3.블록 아래로 내리는 과정
        // 블록을 아래로 떨어뜨리기 위해 각 열별로 위에서 부터 아래로 블록을 채우는 과정
        for (let i = 0; i < n; i++) {
            // 현재 열에서 남아 있는 블록을 임시 저장할 곳
            let temp = []; 
            for (let j = 0; j < m; j++) {
                // 공백이 아닌 블록만 temp 배열에 추가 (즉, 남아 있는 블록을 추출)
                if (board[j][i] !== ' ') temp.push(board[j][i]);
            }
            
            // 먼저 위쪽부터 공백을 채움 
            for (let j = 0; j < m; j++) {
                // 윗부분 공백 채우기 (전체 행 - 남아 있는 블록 수를 제외한 만큼)
                if (j < m - temp.length) board[j][i] = ' ';  
                // 아랫 부분에 남아 있는 블록 채우기
                else  board[j][i] = temp[j - (m - temp.length)];
            }
        }
        
    }
}

/* 시간복잡도
1. 지워지는 블록이 있는지 확인 (2x2 블록 확인) 
    - 이중 for문 : O(m*n)

2. 블록 지우는 과정
    - 최악의 경우 모든 블록이 2x2 블록으로 지워지면 : O(m*n) 

3. 블록 아래로 내리는 과정
    - 이중 for문 : O(m*n)

* 루프는 블록이 더 이상 지워지지 않을 때까지 반복
* 이 반복 횟수는 최대 m * n / 4번으로 예상
O((m * n) * (m * n / 4))

=> 전체 시간 복잡도 : O((m * n) * (m * n / 4)) => O((m * n)^2)
*/