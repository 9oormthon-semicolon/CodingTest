// 문제 13 크레인 인형 뽑기 게임
function solution(board, moves) {
    let answer = 0;
    // 각 열에 스택 0으로 초기화
    const lanes = [...Array(board[0].length)].map(() => []);
    // 보드 배열로 인형들 스택에 채워 놓음
    for (let i = board.length - 1; i >= 0; i--) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j]) lanes[j].push(board[i][j]);
        }
    }
    const bucket = [];
    // 커맨드 처리 > 인형 뽑은 것이 있다면 bucket에 추가
    for (const move of moves) {
        if (lanes[move-1].length > 0) { // 인형이 있으면
            const doll = lanes[move-1].pop();
            if(bucket.length > 0 && bucket[bucket.length-1] === doll){
            // bucket에 인형이 있고, 스택의 맨 위에 있는 인형과 같은 경우
                bucket.pop();
                answer += 2;
            } else bucket.push(doll); // 아닌 경우
        }
    }
    return answer;
}

const board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
const moves = [1,5,3,5,1,2,1,4];
console.log(solution(board, moves));

/*
권장 시간 복잡도 O(N²+M)
---
보드를 모두 순회하며 인형을 채워놓는 과정 O(N²)
커맨드를 처리하는 과정 O(M)
총 시간복잡도 O(N²+M)
제한사항이 권장 시간 복잡도에 영향을 끼치지 못하기 때문에
구현 문제에 더 가까움
*/