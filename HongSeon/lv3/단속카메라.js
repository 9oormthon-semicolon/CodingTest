// Greedy 알고리즘
function solution(routes) {
    let cctvCnt = 0
    // 초기값은 (차량의 진입 지점, 진출 지점은 -30,000 이상 30,000 이하) 보다 작아야 함
    let cctv = -100000
    // 나간 지점 기준으로 오름차순
    routes.sort((a,b) => a[1] - b[1])
    
    // 차량 진입 지점이 현재 카메라(cctv)지점 보다 큰 경우만 카메라(cctv) 추가
    routes.forEach((route) => {
        if(cctv < route[0]){
            // 카메라(cctv) 지점을 나간 지점으로 변경
            // 왜? 해당 차량뿐만 아니라 이후 차량들까지 최대한 많이 만날 수 있기 때문
            cctv = route[1]
            cctvCnt++
        }
    })
    
    return cctvCnt
}

/* 시간 복잡도 
 - routes.sort((a,b) => a[1] - b[1]) : O(nlogn)

 - routes.forEach : O(n)

 => 전체 시간 복잡도 : O(nlogn)
*/

// 그림으로 그려보면 아주 단순한 문제가 됩니다