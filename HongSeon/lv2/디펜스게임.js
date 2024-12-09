// 이진탐색 이용
function solution(n, k, enemy) {
    // 최소 라운드
    let left = 0
    // 최대 라운드
    let right = enemy.length
    
    // 특정 라운드까지 버틸 수 있는지 확인하는 함수
    const canSurvive = (round) => {
        // 해당 라운드까지 적의 병력을 배열로 가져오고
        // 0부터 round-1까지 적을 슬라이스
        const selected = enemy.slice(0, round) 
        // 내림차순 정렬 (강한 적부터 우선 제거하기 위해)
        selected.sort((a, b) => b - a)
    
        // k명을 제거한 나머지 병력의 합 계산
        let sum = 0
        for (let i = k; i < selected.length; i++) {
            sum += selected[i]
        }
    
        // 병력의 합이 n 이하라면 해당 라운드를 버틸 수 있음
        return sum <= n
    }

    // 이진 탐색
    while (left < right) {
        // 중간값
        const mid = Math.floor((left + right) / 2)
        // mid + 1 라운드를 버틸 수 있다면 더 높은 라운드를 탐색
        if (canSurvive(mid + 1)) left = mid + 1 
        // 버틸 수 없다면 탐색 범위를 낮춤
        else right = mid
    }

    // left는 버틸 수 있는 최대 라운드를 나타냄
    return left
}


/* 시간 복잡도
 n = enemy, m = round
 - const canSurvive 
    - enemy.slice(0, m) : O(m)
    - selected.sort((a, b) => b - a) : O(mlogm)
    - for (let i = k; i < selected.length; i++) : O(m - k)
 
 - while (left < right) : O(logn)
   - canSurvive 호출 : O(mlogm) => O(nlogn)

 ** 최악의 경우 m은 n이 됨 ** 
 => 전체 시간 복잡도 : O(logn * nlogn)
*/
