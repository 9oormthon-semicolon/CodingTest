function solution(n) {
    const divideNum = 1000000007; // 결과를 나눌 상수
    // n이 1과 2일 때
    if (n === 1) return 1;
    if (n === 2) return 2;

    // 점화식 n1, n2 와 현재 숫자
    let n1 = 1, n2 = 2, cur = 0;

    for (let i = 3; i <= n; i++) {
        cur = (n2 + n1) % divideNum; // 점화식 적용 및 나머지 연산
        n1 = n2; // 이전 값 갱신
        n2 = cur; // 현재 값 갱신
    }

    return cur;
}

/*
시간복잡도 O(N)
*/