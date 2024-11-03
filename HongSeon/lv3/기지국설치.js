// 그리디 알고리즘 이용
function solution(n, stations, w) {
    let cnt = 0
    // 기지국 커버 범위
    const coverage = 2 * w + 1
    // 시작 위치
    let start = 1

    // stations 순회
    stations.forEach((st) => {
        // 현재 기지국 범위의 왼쪽 위치(범위 안)
        let left = st - w
        
        // 전파가 닿지 않는 구간이 있는 경우
        if (start < left) {
            // 전파가 닿지 않는 개수
            let uncoverCnt = left - start
            // 필요한 기지국 개수 = (전파가 닿지 않는 개수 / 기지국 커버 범위)
            cnt += Math.ceil(uncoverCnt / coverage)
        }
        
        // start를 현재 기지국 범위의 오른쪽 위치로 변경(범위 밖)
        start = st + w + 1
    })
    
    // 마지막 기지국 이후에 전파가 닿지 않는 구간 확인
    if (start <= n) {
        // 개수를 세야하기 때문에 +1을 해줌 (위와 차이는 범위 안이냐 밖이냐 차이)
        let uncoverCnt = n - start + 1
        // 필요한 기지국 개수 = (전파가 닿지 않는 개수 / 기지국 커버 범위)
        cnt += Math.ceil(uncoverCnt / coverage)
    }

    return cnt
}

/* 시간 복잡도 
 - stations.forEach [stations 배열 순회] : O(n)

 => 전체 시간 복잡도 : O(n)
*/

// 첫 접근 방법 : let apt = new Array(n).fill(0)를 했지만 제한사항이 빡세서 포기