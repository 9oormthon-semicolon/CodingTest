function solution(dirs) {
    let move = {L: [-1, 0], R: [1, 0], U: [0, 1], D: [0, -1]};
    let cur = [0, 0];
    let road = new Set();
    
    for(let dir of dirs){
        let x = cur[0] + move[dir][0];
        let y = cur[1] + move[dir][1];
        
        if(x > 5 || x < -5 || y > 5 || y < -5)
            continue;
    
        road.add(""+ cur[0] + cur[1] + x + y);
        road.add(""+ x + y + cur[0] + cur[1]);
        
        cur = [x, y];
    }
    return road.size/2;
}

/*
move로 각 방향에 대한 x,y 좌표 변화를 정의
Set 객체를 이용하여 지나간 경로를 저장함
문자열의 각 문자에 대해서 반복하면서 새로운 위치를 계산하고 
새 위치가 -5에서 5 사이의 범위를 벗어나면 해당 이동을 무시하고 진행
현재 위치에서 새 위치의 경로를 road Set에 추가
새 위치에서 현재 위치로의 경로도 추가(양방향을 고려하기 위함)
현재 위치를 새 위치로 업데이트
결과는 각 경로를 양방향으로 저장했기 때문에 실제 경로 수는 절반을 반환함

시간복잡도 - O(n) n은 dirs의 길이
*/
