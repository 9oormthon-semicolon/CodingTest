function solution(n, a, b) {
    let answer = 1;
    
    while (n !== 1) {
        // 토너먼트 진행할 때마다 번호 반으로 나눔
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
         // 같은 번호가 되면
        if (a === b) break;
        // 토너먼트 진행
        n = Math.sqrt(n); 
        answer += 1;
    }
    
    return answer;
}
const N = 8, A = 4, B = 7;
console.log(solution(N, A, B));
/*
반씩 줄여나가기 때문에
시간복잡도 O(logN)
*/