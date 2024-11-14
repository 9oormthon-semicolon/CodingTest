// 문제 22 오픈 채팅방

function solution(record) {
    let pairedIdNickname = new Map(); // 아이디와 닉네임을 페어링
    let message = [];
    
    function handleLog(record) {
        for (let log of record){
            const [action, id, nickname] = log.split(" ");
            // 들어오거나 닉네임을 변경했을 때 닉네임 업데이트
            if (action !== 'Leave') pairedIdNickname.set(id, nickname);
        }
    }
    
    function setMessage(record) { 
        // 닉네임 변경사항을 모두 적용하여 메시지로 변경
        for (let log of record) {
            let [action, id] = log.split(" ");
            let nickname = pairedIdNickname.get(id);
            
            if (action === 'Enter') message.push(`${nickname}님이 들어왔습니다.`);
            else if (action === 'Leave') message.push(`${nickname}님이 나갔습니다.`);
        }
    }

    handleLog(record);
    setMessage(record);

    return message;
}

const record = [
    "Enter uid1234 Muzi", 
    "Enter uid4567 Prodo",
    "Leave uid1234",
    "Enter uid1234 Prodo",
    "Change uid4567 Ryan"
];
console.log(solution(record));

/*
권장 시간 복잡도 O(N)
---
*/