function solution(babbling) {
    const patterns = ["aya", "ye", "woo", "ma"];
    
    let count = 0;
    
    babbling.forEach(word => {
        let previousPattern = "";  // 이전에 사용된 패턴을 저장
        let isValid = true;  // 단어가 유효한지 여부
        
        while (word.length > 0) {
            let foundPattern = false;  // 패턴을 찾았는지 여부
            
            for (let pattern of patterns) {
                // 현재 단어가 해당 패턴으로 시작하고, 이전 패턴이 아니면
                if (word.startsWith(pattern) && pattern !== previousPattern) {
                    word = word.slice(pattern.length);  // 패턴만큼 잘라냄
                    previousPattern = pattern;  // 이전 패턴을 갱신
                    foundPattern = true;  // 패턴을 찾았음을 표시
                    break;  // 더 이상 반복하지 않고 다음으로 넘어감
                }
            }
            
            // 만약 패턴을 찾지 못했다면, 유효하지 않은 단어로 처리
            if (!foundPattern) {
                isValid = false;
                break;
            }
        }
        
        // 단어가 모두 제거되었고 유효한 경우 카운트 증가
        if (isValid && word === '') {
            count++;
        }
    });
    
    return count;
}

/**
 * 시간복잡도:
 * babbling.forEach :배열의 각 단어에 대해 처리를 하므로, 
 * n개의 단어가 있을 경우 배열을 순회하는 데 걸리는 시간은 O(n)
 * 
 * while: 한 번에 패턴이 한 개씩 제거되므로, 단어의 전체 길이만큼 루프가 반복
 * while 루프의 반복 횟수는 최대 O(m)
 * 
 * n: babbling 배열의 단어 수
 * m: 각 단어의 길이
 * 최종 시간 복잡도는 O(n * m)
 */