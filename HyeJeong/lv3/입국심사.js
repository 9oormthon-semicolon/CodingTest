function solution(n, times) {
    let left = 1;
    let right = Math.max(...times) * n;
    
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const sum = times.reduce((acc, time) => acc + Math.floor(mid / time), 0);
        
        if (sum >= n) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }
    
    return left;
}

/*
초기 범위 설정을 최소 시간(left)을 1로, 최대 시간(right)을 가장 오래 걸리는 심사관이 모든 사람을 심사하는 경우로 설정
while 루프를 통해 이진 탐색을 수행
현재 범위의 중간값(mid)을 구함
주어진 시간(mid) 동안 각 심사관이 처리할 수 있는 인원을 합산
처리 가능 인원이 n 이상이면 시간을 줄이고, 그렇지 않으면 시간을 늘림
최소 시간을 찾아 반환

시간복잡도 - O(log(max(times) * n) * m)
max(times)는 가장 오래 걸리는 심사관의 심사 시간
n은 입국심사를 기다리는 사람의 수
m은 심사관의 수
*/
