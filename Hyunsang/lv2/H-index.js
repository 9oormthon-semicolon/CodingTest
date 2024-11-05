function solution(citations) {
    // 내림차순으로 정렬
    let sortcitations = citations.sort((a, b) => b - a);
    // h-index 초기화
    let hIdx = 0;

    for (let i = 0; i < sortcitations.length; i++) {
        // 현재 논문의 인용 횟수가 현재 h 값 이상인지 확인
        if (sortcitations[i] >= i + 1) {
            hIdx = i + 1;  // h 값 업데이트
        } else {
            break;  // 더 이상 h 값을 만족하지 않으면 중단
        }
    }

    return hIdx;
}

// 시간복잡도 :O(n log n)
// H-index 이해가 잘 안되네요,,