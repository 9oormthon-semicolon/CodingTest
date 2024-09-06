function solution(s) {
    let result = 0;
    let first = 0;
    let other = 0;
    // 첫 번째 문자 설정
    let char = s[0];  
    
    // 문자열 순회
    for (let i = 0; i < s.length; i++) {
        // first와 other가 같아지면 result 증가, 
        // i > 0을 해주는 이유는 초기 first 와 other이 둘다 0이므로 
        // 이를 방지하기 위해서
        if (first === other && i > 0) {
            result++;
            // 첫 번째 문자 재설정
            char = s[i];
            // 문자를 재설정 후 다시 first와 other 초기화
            first = 0;
            other = 0;
        }
        
        char === s[i] ? first++ : other++;
    }
    
    // 마지막 남은 부분도 하나의 문자열로 간주
    if (first !== 0 || other !== 0) result++;
    
    return result;
}

/* 시간 복잡도
    - for문(문자열 길이만큼 순회) : O(n)

    - 나머지는 단순 연산으로 상수시간 : O(1)

    => 전체 시간 복잡도 : O(n)
*/