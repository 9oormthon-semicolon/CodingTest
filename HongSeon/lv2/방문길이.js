function solution(dirs) {
    let result = 0
    // 해시맵 이용
    const visited = new Map()
    let x = 0, y = 0

    // dir 순회
    for (let d of dirs) {
        let x2 = x
        let y2 = y

        if (d === 'U') {
            y2 = y + 1
        } else if (d === 'D') {
            y2 = y - 1
        } else if (d === 'R') {
            x2 = x + 1
        } else if (d === 'L') {
            x2 = x - 1
        }

        // 좌표가 -5와 5 사이일 때만 이동
        if (x2 < -5 || x2 > 5 || y2 < -5 || y2 > 5) continue

        // 방문한 기록을 양방향으로 생성
        // path1 = "0,0,0,1"
        // path2 = "0,1,0,0"
        const path1 = `${x},${y},${x2},${y2}`
        const path2 = `${x2},${y2},${x},${y}`

        // 해시맵에 경로가 저장되어 있지 않다면 경로를 저장하고 result 증가
        if (!visited.has(path1) && !visited.has(path2)) {
            visited.set(path1, true)
            visited.set(path2, true)
            result++
        }

        // 현재 위치를 이동 후 위치로 변경
        x = x2
        y = y2
    }

    return result;
}

/* 시간복잡도 
 - for (let d of dirs) [dirs 순회] : O(n)

 => 전체 시간 복잡도 : O(n)
*/
