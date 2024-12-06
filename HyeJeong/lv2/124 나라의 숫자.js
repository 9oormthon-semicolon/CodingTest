function solution(n) {
    const digits = [4, 1, 2];
    let answer = '';
    
    while (n > 0) {
        answer = digits[n % 3] + answer;
        n = n % 3 === 0 ? Math.floor(n / 3) - 1 : Math.floor(n / 3);
    }
    
    return answer;
}

/*
digits 배열을 [4, 1, 2]로 초기화 (이는 3진법의 각 자릿수에 대응하는 124 나라의 숫자)
while 루프를 사용하여 n이 0보다 클 때까지 반복
각 반복에서 n % 3을 사용하여 현재 자릿수를 결정하고m해당하는 124 나라의 숫자를 answer 문자열의 앞에 추가
n을 3으로 나눔. 만약 n이 3으로 나누어 떨어지면 (n % 3 === 0), 몫에서 1을 빼줌
루프가 종료되면 변환된 124 나라의 숫자를 반환

시간복잡도 - O(log n)
while 루프는 입력 n이 0이 될 때까지 반복됨
각 반복에서 n은 3으로 나누어짐 (n = Math.floor(n / 3) 또는 n = Math.floor(n / 3) - 1) 3진법 변환 과정과 유사
3진법 변환에서 숫자를 3으로 계속 나누면 로그 시간에 0에 도달
따라서 루프의 반복 횟수는 대략 log₃n에 비례
*/
