function solution(number) {
    let count = 0; // 셋이 0이 되는 경우의 수
    const n = number.length;
    
    for (let i = 0; i < n - 2; i++) {
        for (let j = i + 1; j < n - 1; j++) {
            for (let k = j + 1; k < n; k++) {
                if (number[i] + number[j] + number[k] === 0) {
                    count++;
                }
            }
        }
    }
    
    return count;
}

/*
3명으로 가능한 조합을 모두 확인봅니다.
중복이 되지 않게 반복문에서 서로 다른 세 개의 숫자를 선택하여 순회합니다.
삼중 for 문이기 때문에 시간복잡도는 O(n^3) 입니다.
*/
