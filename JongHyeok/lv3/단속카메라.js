function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]); // 나간 지점을 기준으로 
    let cameraPos = -30001, count = 0; // 카메라 위치, 카운트 초기화

    routes.forEach((route) => {
        if (cameraPos < route[0]) { // 카메라가 차량을 만나지 못하는 경우
            cameraPos = route[1]; // 카메라 위치 갱신
            count++;
        }
    })
    return count;
}

const routes = [[-20,-15], [-14,-5], [-18,-13], [-5,-3]];
console.log(solution(routes));

/*
시간복잡도 O(NlogN)
*/