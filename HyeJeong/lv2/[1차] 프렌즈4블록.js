function solution(m, n, board) {
    // 보드를 2D 배열로 변환
    let boardArr = board.map(row => row.split(''));
    let removedBlocks = 0;

    while (true) {
        // 제거할 블록 위치를 저장할 Set
        let toRemove = new Set();

        // 2x2 블록 찾기
        for (let i = 0; i < m - 1; i++) {
            for (let j = 0; j < n - 1; j++) {
                if (boardArr[i][j] && 
                    boardArr[i][j] === boardArr[i][j+1] && 
                    boardArr[i][j] === boardArr[i+1][j] && 
                    boardArr[i][j] === boardArr[i+1][j+1]) {
                    toRemove.add(`${i},${j}`);
                    toRemove.add(`${i},${j+1}`);
                    toRemove.add(`${i+1},${j}`);
                    toRemove.add(`${i+1},${j+1}`);
                }
            }
        }

        // 더 이상 제거할 블록이 없으면 종료
        if (toRemove.size === 0) break;

        // 블록 제거 및 카운트
        removedBlocks += toRemove.size;
        for (let pos of toRemove) {
            let [i, j] = pos.split(',').map(Number);
            boardArr[i][j] = null;
        }

        // 블록 떨어뜨리기
        for (let j = 0; j < n; j++) {
            let column = boardArr.map(row => row[j]).filter(cell => cell !== null);
            let emptySpaces = m - column.length;
            let newColumn = Array(emptySpaces).fill(null).concat(column);
            for (let i = 0; i < m; i++) {
                boardArr[i][j] = newColumn[i];
            }
        }
    }

    return removedBlocks;
}

/*
초기에 짠 코드를 배열로 생성하여 2x2 블록 찾고 중복 제거하고 카운트 업데이트, 블록 제거 블록 떨어트리기 순서대로 구현하다가 
너무 코드도 길어지고 효율적이지 않아서 Set을 사용해 간소화하게 구현했습니다 
어려워서 구글링 통해 다른 분들의 코드를 참고하여 풀었습니다ㅠ

시간복잡도 - O(m^3 * n^2) (gpt 피셜..)
*/
