function solution(dirs) {
    let visit = new Set();
    let x = 0, y = 0; // 초기 위치
    let prevX, prevY; // 이전 위치

    [...dirs].forEach(dir => {
        prevX = x;
        prevY = y;

        switch (dir) {
            case "U":
                if (y < 5) y++;
                break;
            case "D":
                if (y > -5) y--;
                break;
            case "L":
                if (x > -5) x--;
                break;
            case "R":
                if (x < 5) x++;
                break;
        }

        // 경계 밖으로 벗어난 경우에는 경로 추가하지 않음
        if (prevX === x && prevY === y) return;

        // 현재 경로와 반대 경로를 저장
        let path1 = `${prevX},${prevY} -> ${x},${y}`;
        let path2 = `${x},${y} -> ${prevX},${prevY}`;

        visit.add(path1);
        visit.add(path2);
    });

    return visit.size / 2; // 왕복 경로로 두 번 저장했으므로 절반으로 나눔
}

// 시간복잡도 : O(n)