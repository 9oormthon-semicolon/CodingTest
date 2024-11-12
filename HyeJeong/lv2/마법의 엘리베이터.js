function solution(storey) {
    let answer = 0;
    
    while (storey > 0) {
        let digit = storey % 10;
        let nextDigit = Math.floor((storey % 100) / 10);
        
        if (digit > 5 || (digit === 5 && nextDigit >= 5)) {
            answer += (10 - digit);
            storey += 10;
        } else {
            answer += digit;
        }
        
        storey = Math.floor(storey / 10);
    }
    
    return answer;
}

/*
while 루프를 사용하여 storey가 0이 될 때까지 반복
현재 자릿수(digit)와 다음 자릿수(nextDigit)를 계산
현재 자릿수가 5보다 크거나, 5이면서 다음 자릿수가 5 이상인 경우 (10 - digit)만큼 버튼을 누르고 윗자리에 1을 올림
그 외의 경우는 현재 자릿수만큼 버튼을 누름
storey를 10으로 나누어 다음 자릿수로 이동
모든 자릿수를 처리한 후 총 버튼 클릭 횟수를 반환

시간복잡도 - O(log n)

어제 병결로 수업을 못들어서 오늘 올리게 되었습니다. 죄송합니다ㅜㅠ
*/
