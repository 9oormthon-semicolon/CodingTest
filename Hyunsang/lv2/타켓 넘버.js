function solution(numbers, target) {
    let answer = 0;

    // DFS 함수: idx는 현재 처리 중인 numbers의 인덱스, sum은 현재까지의 합계
    function dfs(idx, sum) {
        // numbers 배열의 끝에 도달했을 때
        if (idx === numbers.length) {
            // 현재까지의 합이 target과 같으면 경우의 수를 증가시킴
            if (sum === target) answer++;
            return; // 재귀 종료
        }
        
        // 현재 숫자를 더하는 경우
        dfs(idx + 1, sum + numbers[idx]);
        // 현재 숫자를 빼는 경우
        dfs(idx + 1, sum - numbers[idx]);
    }

    // DFS 탐색 시작 (0번째 인덱스에서 합계 0으로 시작)
    dfs(0, 0);

    return answer; // 경우의 수 반환
}


// 시간복잡도 : O(2^n)