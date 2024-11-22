// Greedy 이용
function solution(n, works) {
    // 모든 작업량을 소진 가능 or n보다 작은지 확인
    if (works.reduce((sum, work) => sum + work, 0) <= n) return 0

    // 내림차순 정렬
    works.sort((a, b) => b - a)

    // 남은시간이 0이 될 때까지 반복
    while (n > 0) {
        // 최대 작업량 감소
        works[0]--

        // 작업량이 감소된 후 배열의 내림차순 상태를 유지
        for (let i = 0; i < works.length - 1; i++) {
            // 현재 작업량이 다음 작업량보다 작아지면 자리 교환
            if (works[i] < works[i + 1]) [works[i], works[i + 1]] = [works[i + 1], works[i]]
            // 이미 정렬된 상태
            else break
        }
        // 시간 감소
        n--
    }

    // 야근 피로도 계산
    return works.reduce((sum, work) => sum + work ** 2, 0)
}

/* 시간복잡도 
 - if (works.reduce) : O(m)

 - works.sort : O(mlogm)

 - while (n > 0) : O(n)
    - for (let i = 0; i < works.length - 1; i++) : O(m)

 - return works.reduce) : O(m)

 => 전체 시간 복잡도 : O(mlogm + (n*m))
*/
