function solution(n, times) {
    // left: 가능한 최소 시간 1분, right: 최대 시간
    let left = 1, right = Math.max(...times) * n;
    let answer = right;
    // 이진탐색
    while (left <= right) {
        const mid = Math.floor((left + right) / 2); // 중간값
        let total = 0; // 처리할 수 있는 사람의 수
        for (let time of times) {
            total += Math.floor(mid / time);
        }
        if (total >= n) { // 처리할 수 있는 사람 수가 더 크다면
            answer = mid;
            right = mid - 1; // 시간을 줄여가며 가능한 최소 시간을 찾음
        } else left = mid + 1; // 시간을 늘림
    }
    return answer;
}

/*
이진탐색
시간복잡도
n의 크기를 N, times의 길이 M, times에서 가장 큰 값 MAX일 때,
O(M log(MAX*N))
*/