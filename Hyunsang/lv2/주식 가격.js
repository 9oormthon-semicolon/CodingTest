function solution(prices) {
    let result = Array(prices.length).fill(0); // 결과 배열 초기화
    let stack = []; // 인덱스를 저장할 스택

    for (let i = 0; i < prices.length; i++) {
        // 현재 가격이 스택에 있는 가격보다 작으면 하락한 것으로 간주
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            let idx = stack.pop();
            result[idx] = i - idx; // 유지된 시간 계산
        }
        stack.push(i); // 현재 인덱스를 스택에 추가
    }

    // 스택에 남아있는 인덱스에 대해 결과 처리
    while (stack.length > 0) {
        let idx = stack.pop();
        result[idx] = prices.length - 1 - idx;
    }

    return result;
}

// for 루프는 prices 배열을 순회하며, 배열의 길이인 n번 반복
// 내부의 while 루프는 각 요소가 한 번씩만 스택에 추가되고, 한 번씩만 제거되므로 O(n)
// 시간복잡도: O(n)