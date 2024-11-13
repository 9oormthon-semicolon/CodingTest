function solution(n, left, right) {
    const result = [];
    for (let i = left; i <= right; i++) {
        const row = Math.floor(i / n);
        const col = i % n;
        result.push(Math.max(row, col) + 1);
    }
    return result;
}

//left부터 right까지의 값만 필요하므로, for문을 사용하여 해당 범위의 값만 계산
// 시간복잡도 : O(right - left + 1)