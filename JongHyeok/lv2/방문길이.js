function solution(dirs) {
    let cur = [0,0]; // 현재 위치 0으로 초기화
    let visited = new Set(); // 방문한 곳을 set로
    for (const dir of dirs) {
        let prev = [...cur]; // 이전 위치를 복사
        
        switch (dir) {
            case "U": cur[1] = Math.min(5, cur[1] + 1); break;
            case "D": cur[1] = Math.max(-5, cur[1] - 1); break;
            case "L": cur[0] = Math.max(-5, cur[0] - 1); break;
            case "R": cur[0] = Math.min(5, cur[0] + 1); break;
        }

        if (prev[0] !== cur[0] || prev[1] !== cur[1]) { 
            // 경로를 문자열로 변환
            const path = `${prev[0]},${prev[1]},${cur[0]},${cur[1]}`; // 이전 위치와 이동한 후의 위치로 경로를 계산
            const reversePath = `${cur[0]},${cur[1]},${prev[0]},${prev[1]}`; // 반대로 이동하는 경우
            
            // 이전에 가지 않은 길이면 Set에 추가
            if (!visited.has(path) && !visited.has(reversePath)) {
                visited.add(path);
            }
        }
    }

    return visited.size;
}

const dirs = "ULURRDLLU";

console.log(solution(dirs));

/*
시간복잡도는 O(N)
요 며칠간 구현 문제만 풀어서 그런가 쓸 게 없어서 편하긴 하네요 ^_^
*/