function solution(n, k, enemy) {
    // 이분 탐색 범위
    let [left, right] = [0, enemy.length];
    // 중간값
    let mid = Math.floor((left + right) / 2);

    while (left <= right) {
        const cur = enemy.slice(0, mid).sort((a, b) => b - a);
        let noDie = k; // 무적권 개수 초기화
        // 무적권이 있으면 소모 아니면 병사 추가
        const curEnemy = cur.reduce((acc, cur) => {
            if (noDie > 0) {
                noDie--;
                return acc;
            }
            return acc + cur;
        }, 0);
        // 방어할 수 있으면 적이 더 많은 라운드 탐색
        if (n - curEnemy >= 0 && noDie >= 0) left = mid + 1;
        // 방어할 수 없으면 적이 더 적은 라운드 탐색
        else right = mid - 1;
        // 중간값 갱신
        mid = Math.floor((left + right) / 2);
    }
    // 최대 라운드
    return left - 1;
}
const n = 7, k = 3, enemy = [4, 2, 4, 5, 3, 3, 1];
console.log(solution(n, k, enemy));

/*
시간복잡도
적을 절반씩 줄이는 과정 시간복잡도 O(logN)
정렬하는 것 O(NlogN)
전체 시간복잡도 O(NlogN * logN)
시간복잡도만 보면 되게 비효율적인데 일단 통과는 됐네요...
힙으로 풀었을 떄는 시간 초과 나오더니만...
시간복잡도 계산을 잘못한 것일까요
*/