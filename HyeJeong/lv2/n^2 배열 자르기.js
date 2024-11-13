function solution(n, left, right) {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        result.push(Math.max(row, col) + 1);
    }
    
    return result;
}

/*
2차원 배열을 실제로 생성하지 않고, 각 위치의 값을 계산
left부터 right까지의 인덱스에 대해서만 반복
각 인덱스 i에 대해 row (행)는 i / n의 내림값, col (열)은 i % n
각 위치의 값은 Math.max(row, col) + 1
계산된 값을 결과 배열에 추가

시간복잡도 - O(right - left + 1)
루프는 left부터 right까지 실행되므로 총 (right - left + 1)번 반복
각 반복에서 수행되는 연산(나눗셈, 모듈로, Math.max, Math.floor)은 모두 상수 시간 O(1)
*/
