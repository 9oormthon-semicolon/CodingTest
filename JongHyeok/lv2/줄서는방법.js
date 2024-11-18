function solution(n, k) {
    const answer = [];
    // n번째 인덱스까지 값을 채움
    const factorial = [1];
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }
    // 1부터 n까지의 배열
    const arr = Array.from({ length: n }, (_, i) => i + 1);
    // -1 빼줌 (인덱스)
    let answerIdx = k-1;
    
    for (let i = n; i > 0; i--) {
        // 인덱스 계산
        const idx = Math.floor(answerIdx / factorial[i - 1]);
        answer.push(arr[idx]);
        // 사용 숫자 제거
        arr.splice(idx, 1);
        // k값 갱신
        answerIdx %= factorial[i - 1];
    }

    return answer;
}

const n = 3, k = 5;
console.log(solution(n, k));

/*
순열로 풀어야 하기 때문에 팩토리얼 사용

숫자 제거하는 연산 n번
길이가 n인 배열의 요소를 제거하는 데 필요한 시간복잡도 O(N)이기 때문에
O(N²)
*/