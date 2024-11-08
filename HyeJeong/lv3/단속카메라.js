function solution(routes) {
    routes.sort((a, b) => a[1] - b[1]); //차량의 경로를 진출 지점(route1)을 기준으로 오름차순 정렬
    
    let count = 0;
    let camera = -30001;
    
    for (const route of routes) {
        if (camera < route[0]) {
            count++;
            camera = route[1];
        }
    }
    
    return count;
}

/*
count와 camera 변수를 초기화 
camera는 가장 최근에 설치된 카메라의 위치
정렬된 routes를 순회하면서 현재 카메라의 위치가 차량의 진입 지점보다 작으면, 새 카메라를 설치(count 증가)
새 카메라는 현재 차량의 진출 지점에 설치
최종적으로 설치된 카메라의 수(count)를 반환

시간 복잡도 - O(n log n)
정렬에 O(n log n)이 소요되고, 이후 배열을 한 번 순회하는 데 O(n)이 소요
*/
