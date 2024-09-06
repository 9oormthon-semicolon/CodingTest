function solution(s) {
    let count = 0; // 분리된 문자열의 개수를 셀 변수
    let xCount = 0; // 현재 x(첫 글자)의 등장 횟수
    let otherCount = 0; // x가 아닌 글자의 등장 횟수
    let x = ''; // 첫 글자 저장 변수
    
    for (let i = 0; i < s.length; i++) {
        if (x === '') {
            x = s[i]; // 첫 글자를 x로 설정
        }
        
        if (s[i] === x) {
            xCount++; // x와 같은 글자일 경우 xCount 증가
        } else {
            otherCount++; // x가 아닌 글자일 경우 otherCount 증가
        }
        
        // x와 x가 아닌 글자의 개수가 같아지면 하나의 부분 문자열로 분리
        if (xCount === otherCount) {
            count++; // 분리된 문자열 수 증가
            x = ''; // 새로운 문자열 시작을 위해 x를 초기화
            xCount = 0; // 카운트 초기화
            otherCount = 0; // 카운트 초기화
        }
    }
    
    // 남은 문자열이 있을 경우 그것도 하나의 분리된 문자열로 간주
    if (x !== '') {
        count++;
    }
    
    return count;
}

// 문자열 s의 길이를 n이라고 할 때, 루프는 문자열의 모든 문자를 한 번씩만 처리하고, 
// 각 반복에서 상수 시간의 연산이 이루어지므로 이 알고리즘의 시간 복잡도는 O(n)