//심사예정인원 , 심사대 걸리는 시간
function solution(n, times) {
    let left = Math.min(...times); //최소 경우의 수
    let right = Math.max(...times) * n; //최대의 경우의 수
    let result = right;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2) 
        const passit = times.reduce((sum, time) => sum + Math.floor(mid / time), 0);

        if (passit >= n) {
            result = mid; 
            right = mid - 1; 
        } else {
            left = mid + 1; 
        }
    }

    return result;
}

/*
    동시간대 검사 할 수 있는 최대 인원 수를 기준으로 이진 탐색을 이용하여 풀었습니다.
    
    O(log((times) * n) * m)
*/