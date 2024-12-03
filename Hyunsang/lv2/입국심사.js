function solution(n, times) {
    // 최소 시간과 최대 시간 초기화
    let left = 1;
    let right = Math.max(...times) * n;
    let answer = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        let total = 0;

        // 각 심사관이 mid 시간 내에 처리할 수 있는 사람 수 계산
        for (let time of times) {
            total += Math.floor(mid / time);
        }

        // 총 처리 인원이 n명 이상인 경우
        if (total >= n) {
            answer = mid; // 가능한 시간 갱신
            right = mid - 1; // 더 작은 시간에서 가능 여부 탐색
        } else {
            left = mid + 1; // 시간이 부족하므로 더 큰 시간 탐색
        }
    }

    return answer;
}

// 이분 탐색: O(log(maxTime))
// 심사관 순회: O(m) (m은 심사관의 수)
// 총 시간 복잡도: O(m * log(maxTime))