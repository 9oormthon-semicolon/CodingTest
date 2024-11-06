function solution(n) {
    // 원판 이동 순서를 저장할 배열
    const answer = [];
    
    /**
     * 하노이의 탑 재귀 함수
     * @param {number} n - 옮길 원판의 개수
     * @param {number} from - 출발 기둥 번호
     * @param {number} to - 목표 기둥 번호
     * @param {number} via - 중간 기둥 번호
     */
    function hanoi(n, from, to, via) {
        // 기본 케이스: 옮길 원판이 1개일 때
        if (n === 1) {
            // 원판을 직접 옮기고 이동 경로를 기록
            answer.push([from, to]);
            return;
        }
        
        // 재귀 케이스
        // 1. n-1개의 원판을 출발 기둥에서 중간 기둥으로 옮김
        hanoi(n - 1, from, via, to);
        
        // 2. 가장 큰 원판을 출발 기둥에서 목표 기둥으로 옮김
        answer.push([from, to]);
        
        // 3. n-1개의 원판을 중간 기둥에서 목표 기둥으로 옮김
        hanoi(n - 1, via, to, from);
    }
    
    // 초기 호출: n개의 원판을 1번 기둥에서 3번 기둥으로 옮김
    hanoi(n, 1, 3, 2);
    
    // 모든 이동 경로를 담은 배열 반환
    return answer;
}

//시간복잡도 - O(2^n)
