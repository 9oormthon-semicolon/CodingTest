function solution(n) {
    const answer = [0, 1];
    for (let i = 2; i <= n; i++) {
        answer[i] = (answer[i-1] + answer[i-2]) % 1234567;
    }
    return answer[n];
}
/*
시간복잡도 O(n)
*/