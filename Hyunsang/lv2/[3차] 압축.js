function solution(msg) {
    let answer = [];
    let wordDictionary = {
        "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7,
        "H": 8, "I": 9, "J": 10, "K": 11, "L": 12, "M": 13, "N": 14,
        "O": 15, "P": 16, "Q": 17, "R": 18, "S": 19, "T": 20, "U": 21,
        "V": 22, "W": 23, "X": 24, "Y": 25, "Z": 26
    };
    
    let dictSize = 26; // 현재 사전 크기
    let i = 0; // 입력 문자열의 현재 위치
    
    while (i < msg.length) {
        let w = msg[i]; // 현재 단어
        
        // 사전에 등록된 가장 긴 문자열 w를 찾기 위해 반복
        while (i + 1 < msg.length && wordDictionary.hasOwnProperty(w + msg[i + 1])) {
            w += msg[i + 1];
            i++;
        }
        
        // w에 해당하는 사전 인덱스를 출력
        answer.push(wordDictionary[w]);
        
        // w 다음 문자로 새로운 단어를 사전에 등록
        if (i + 1 < msg.length) {
            wordDictionary[w + msg[i + 1]] = ++dictSize;
        }
        
        i++; // 다음 문자로 이동
    }
    
    return answer;
}
// 주 반복문 (while (i < msg.length))
// 이 반복문은 입력 문자열 msg의 각 문자에 대해 한 번씩 실행 
// 따라서, 반복문의 최대 반복 횟수는 msg.length

//내부 반복문 (while (i + 1 < msg.length && wordDictionary.hasOwnProperty(w + msg[i + 1])))
// 이 반복문은 사전에서 가장 긴 문자열을 찾을 때 사용. 
//최악의 경우, 문자열의 모든 문자가 사전에 등록되어 있을 수 있다. 
// 이 경우, 내부 반복문은 한 번 실행될 때마다 최대 n번 반복

// 전체 시간 복잡도는 O(n)