function solution(n) {
    const number = 1234567;
    const num = new Array(n+1).fill(0);
    num[0] = 0;
    num[1] = 1;
    
    for(let i=2; i<=n; i++){
        num[i] = (num[i-1] + num[i-2]) % number;
    }
    return num[n];
}

//시간복잡도
//반복문이 2부터 n까지 반복되므로 n-1번 즉, 상수시간 수행됨
