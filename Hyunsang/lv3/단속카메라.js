function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]); // 도착지 기준으로 오름차순 정렬
    let cameras = 0;
    let lastCamera = -30001; // 초기 값으로 카메라 설치되지 않은 위치 설정
    console.log(routes)
    for (const [start, end] of routes) {
        if (lastCamera < start) { // 현재 카메라가 시작점을 커버하지 못하면
            cameras++; // 카메라 설치
            lastCamera = end; // 해당 차량의 도착지에 카메라 설치
        }
    }

    return cameras;
}

// 시간복잡도 : O(n log n + n)