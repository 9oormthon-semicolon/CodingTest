function solution(x, y, n) {
    if (x === y) return 0;
    
    const dp = new Array(y + 1).fill(Infinity);
    dp[x] = 0;
    
    for (let i = x; i <= y; i++) {
        if (dp[i] === Infinity) continue;
        
        if (i + n <= y) {
            dp[i + n] = Math.min(dp[i + n], dp[i] + 1);
        }
        if (i * 2 <= y) {
            dp[i * 2] = Math.min(dp[i * 2], dp[i] + 1);
        }
        if (i * 3 <= y) {
            dp[i * 3] = Math.min(dp[i * 3], dp[i] + 1);
        }
    }
    
    return dp[y] === Infinity ? -1 : dp[y];
}
/*
 x와 y가 같으면 변환이 필요 없으므로 0을 반환
dp 배열을 생성하여 각 숫자에 도달하는 데 필요한 최소 연산 횟수를 저장. 초기에는 모든 값을 Infinity로 설정
dp[x]를 0으로 설정. 이는 시작점인 x에 도달하는 데 필요한 연산 횟수가 0이라는 의미
x부터 y까지 순회하면서 각 숫자에 대해 세 가지 연산(+n, *2, *3)을 수행
각 연산 후의 결과가 y 이하인 경우, 해당 결과에 도달하는 최소 연산 횟수를 업데이트
모든 순회가 끝난 후, dp[y]가 여전히 Infinity라면 y에 도달할 수 없다는 의미이므로 -1을 반환하고 그렇지 않으면 dp[y]를 반환

시간 복잡도 - O(y-x)
for 루프가 x부터 y까지 순회
*/
