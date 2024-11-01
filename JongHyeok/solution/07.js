// 문제 07 방문 길이
function isValidMove(nx, ny){
    return nx >= -5 && nx <= 5 && ny >= -5 && ny <= 5;
}

function upDateLocation(x, y, dir){
    switch(dir){
        case 'U': return [x, y+1];
        case 'D': return [x, y-1];
        case 'L': return [x-1, y];
        case 'R': return [x+1, y];
    }
}

function solution(dirs) {
    let curPos = [0,0]; // 현재 위치 0으로 초기화
    let visited = new Set(); // 방문한 곳을 set로 겹치는 좌표 처리
    for (const dir of dirs){
        const [nx, ny] = upDateLocation(curPos[0], curPos[1], dir);
        if (!isValidMove(nx, ny)) continue; // 벗어난 좌표는 인정 X
        // 반대로 간 경우도 추가
        visited.add(`${curPos[0]}${curPos[1]}${nx}${ny}`);
        visited.add(`${nx}${nx}${curPos[0]}${curPos[1]}`);
        [curPos[0], curPos[1]] = [nx, ny]; // 좌표 이동했으므로 업데이트
    }
    return visited.size / 2;
}

const dirs = "ULURRDLLU"
console.log(solution(dirs));

/*
권장 시간 복잡도 O(N)
---
*/