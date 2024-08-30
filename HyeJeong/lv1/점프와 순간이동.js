function solution(N, K) {
    let jump = 0;

    while (N > 0) {
        if (N % 2 === 1) {
            jump++;
        }
        N = Math.floor(N / 2);
    }

    return jump;
}

//N이 0이 될 때까지 반복하면서 N을 2로 나누어 순간이동
//N이 홀수이면 점프해야되니깐 jump를 증가시킴
//최종적으로 점프 횟수를 반환

//시간복잡도 - O(\log N)
//while루프는 n이 0이 될 때까지 반복됨. 각 반복에서 N은 2로 나누어지기 때문에 N이 절반으로 줄어듬
//N이 0이 될 때까지의 반복 횟수에 비례함. 즉 N이 커질수록 반복 횟수는 상대적으로 적어짐
