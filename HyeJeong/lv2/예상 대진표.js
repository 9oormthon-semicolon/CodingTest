function solution(n, a, b) {
    let round = 0;
    
    while (a !== b) {
        a = Math.ceil(a / 2);
        b = Math.ceil(b / 2);
        round++;
    }
    
    return round;
}

/*
round 변수를 0으로 초기화. 이 변수는 라운드 수를 카운트함
while 루프를 사용하여 a와 b가 같아질 때까지 반복
각 라운드마다 a와 b를 2로 나누고 올림(Math.ceil 사용, 다음 라운드에서의 새로운 번호를 계산하는 것)
round를 1 증가시킴
a와 b가 같아지면 (두 참가자가 만나면) 루프를 종료하고 round 반환

시간 복잡도 - O(log n) n은 참가자의 수입
각 라운드마다 참가자 번호가 대략 절반으로 줄어들기 때문에 로그 시간이 걸림
*/
