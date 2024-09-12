function solution(babbling) {
    const wordSet = new Set(["aya", "ye", "woo", "ma"]);  // 허용된 단어 패턴들을 Set으로 저장
    let answer = 0;  // 유효한 단어의 개수를 저장할 변수

    // 주어진 단어 배열에서 각 단어를 순회
    for (const word of babbling) {
        let remainWord = '';  // 현재까지의 부분 문자열을 저장
        let prevWord = '';  // 이전에 매칭된 단어를 저장 (중복 방지용)
        
        // 단어의 각 문자를 순차적으로 확인
        for (const char of word) {
            remainWord += char;  // 하나씩 문자를 추가해 부분 문자열을 생성
            
            // 만약 부분 문자열이 허용된 단어 중 하나라면
            if (wordSet.has(remainWord)) {
                // 직전에 매칭된 단어와 같은 단어가 연속되면 유효하지 않으므로 중단
                if (remainWord === prevWord) break;

                prevWord = remainWord;  // 현재 매칭된 단어를 prevWord에 저장
                remainWord = '';  // 부분 문자열을 초기화하여 다음 매칭을 찾음
            }
        }

        // 모든 문자를 처리했을 때 remainWord가 빈 문자열이면 유효한 단어로 간주
        if (remainWord === '') result++;  
    }
    return answer;  // 유효한 단어의 개수를 반환
}
/**
 * 시간복잡도:
 * for (const word of babbling)는 babbling 배열의 각 단어에 대해 한 번씩 순회
 * O(n)
 * 
 * for (const char of word)는 각 단어의 길이만큼 순회. 
 * 각 단어의 길이를 m이라고 하면, 
 * 이 루프는 최악의 경우 각 문자를 한 번씩 확인하므로 시간 복잡도는 O(m)
 * 
 * wordSet.has(remainWord)는 Set 자료 구조에서 특정 값이 존재하는지 확인하는 작업이며, 
 * 이 작업은 O(1) 
 * 
 * 전체 시간 복잡도는 O(n * m)
 */