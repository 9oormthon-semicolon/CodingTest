function solution(record) {
    let userDict = {}; // UserID와 닉네임을 매칭하는 딕셔너리
    let result = [];   // 최종 결과를 저장하는 배열
    
    // 1. 기록을 모두 처리하면서 유저 정보 관리
    record.forEach((currRecord) => {
        let splitRecord = currRecord.split(' ');
        let command = splitRecord[0];  // 명령어: Enter, Leave, Change
        let userId = splitRecord[1];   // 유저 ID
        
        if (command === "Enter") {
            let nickname = splitRecord[2]; // 새로운 닉네임
            userDict[userId] = nickname;   // 유저 닉네임 업데이트
            result.push([userId, "님이 들어왔습니다."]); // 입장 기록

        } else if (command === "Leave") {
            result.push([userId, "님이 나갔습니다."]); // 퇴장 기록

        } else if (command === "Change") {
            let nickname = splitRecord[2]; // 닉네임 변경
            userDict[userId] = nickname;   // 유저 닉네임 업데이트
        }
    });

    // 2. 저장된 기록을 닉네임을 기반으로 메시지로 변환
    return result.map(log => {
        let userId = log[0];
        let action = log[1];
        return userDict[userId] + action;  // 닉네임 + 행동 메시지
    });
}

/**
 * record 반복문으로 O(n)
 */