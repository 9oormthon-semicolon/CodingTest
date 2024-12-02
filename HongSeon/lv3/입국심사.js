// 이진 탐색
function solution(n, times) {
    let result = 0
    // 가장 짧은 심사 시간
    let left = Math.min(...times)
    // 가장 긴 심사관이 모든 사람을 심사하는 데 걸리는 시간
    let right = Math.max(...times) * n

    // 이진 탐색 시작
    while (left <= right) {
        // 중간 시간
        let mid = Math.floor((left + right) / 2)
        let checked = 0

        // 각 심사관이 mid 시간 동안 심사할 수 있는 사람의 수를 계산
        for (let time of times) {
            checked += Math.floor(mid / time)

            // 이미 필요한 인원 이상 심사했다면 더 이상 계산할 필요가 없음
            if (checked >= n) break
        }

        // 심사한 사람의 수가 n명 이상이면, 더 짧은 시간으로 심사가 가능한지 확인하기 위해 시간을 줄임
        if (checked >= n) {
            result = mid
            // 더 적은 시간으로도 가능한지 확인하기 위해 탐색 범위를 줄임
            right = mid - 1
        }
        // 심사한 사람의 수가 n명보다 부족하면, 탐색 범위를 늘림
        else left = mid + 1
    }

    return result
}

/* 시간 복잡도
 - Math.min(...times), Math.max(...times): O(m) 
 * m은 times 배열의 길이

 - while (left <= right): O(log(max(times) * n))
    - for (let time of times): O(m) 
 
 => 전체 시간 복잡도 : O(m * log(max(times) * n))
*/
