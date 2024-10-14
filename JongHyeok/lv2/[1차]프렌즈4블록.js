function solution(m, n, board) {
    let boardMap = new Map(); // board를 맵으로
    let removedTotal = 0;

    board.forEach((row, i) => { // 맵 초기화
        [...row].forEach((char, j) => {
            boardMap.set(`${i},${j}`, char);
        });
    });
    
    function removeBlock(i, j) { // 블록 제거
        let key = `${i},${j}`;
        if (i + 1 < m && j + 1 < n &&
            boardMap.get(key) === boardMap.get(`${i},${j+1}`) &&
            boardMap.get(key) === boardMap.get(`${i+1},${j}`) &&
            boardMap.get(key) === boardMap.get(`${i+1},${j+1}`) &&
            boardMap.get(key) !== ' ') {
            return [`${i},${j}`, `${i},${j+1}`, `${i+1},${j}`, `${i+1},${j+1}`];
        }
        return [];
    }
    
    function dropBlock() { // 블록 내리기
        for (let j = 0; j < n; j++) {
            let queue = [];
            for (let i = m - 1; i >= 0; i--) {
                let key = `${i},${j}`;
                if (boardMap.get(key) !== ' ') {
                    queue.push(boardMap.get(key));  // 큐에 현재 있는 블록들을 넣음
                }
            }
            for (let i = m - 1; i >= 0; i--) { // 블록 위치 갱신
                boardMap.set(`${i},${j}`, queue.length > 0 ? queue.shift() : ' ');
            }
        }
    }
    
    
    
    while (true) {
        let blockToRemove = new Set(); // 제거해야 할 블록
        
        for (let i = 0; i < m; i++) { // 블록제거
            for (let j = 0; j < n; j++) {
                removeBlock(i, j).forEach(pos => blockToRemove.add(pos));
            }
        }
        
        if (blockToRemove.size === 0) break;
        
        removedTotal += blockToRemove.size;
        
        blockToRemove.forEach(pos => {  // 보드 갱신
            boardMap.set(pos, ' ');
        });
        
        dropBlock();
    }
    
    return removedTotal;
}

/*
블록이 더 이상 합쳐지지 않을 때까지 블록을 내립니다.
블록을 합칠 때는 주변 블록들이 해당 블록과 일치하는 지 검사하고 일치하면 해당 map들의 value 값을 비우고,
블록을 내릴 때는 블록들의 위치를 queue로 위치를 확인하고 갱신합니다.

removeBlock의 시간복잡도 O(1)
dropBlock의 시간복잡도 O(N)
메인 루프 최대 M*N번 반복 
removeBlock 호출은 O(M*N)
dropBlock 호출도 O(M*N)
전체 시간복잡도는 O(M^2*N*2)
*/