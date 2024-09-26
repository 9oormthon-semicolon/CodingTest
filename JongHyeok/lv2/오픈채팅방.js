function solution(record) {
    let pairedIdNickname = new Map(); // 아이디와 닉네임을 페어링
    let message = [];
    

    function handleLog(record) { // 시간 복잡도 O(n)
        for (let log of record){
            const [action, id, nickname] = log.split(" ");
            if (action !== 'Leave') {
            // 들어오거나 닉네임을 변경했을 때 닉네임 업데이트
                pairedIdNickname.set(id, nickname);
            }
        }
        
    }

    function setMessage(record) { // 시간복잡도 record의 길이만큼 O(n)
        // 닉네임 변경사항을 모두 적용하여 메시지로 변경
        for (let log of record) {
            let [action, id] = log.split(" ");
            let nickname = pairedIdNickname.get(id);
            
            if (action === 'Enter') {
                message.push(`${nickname}님이 들어왔습니다.`);
            } else if (action === 'Leave') {
                message.push(`${nickname}님이 나갔습니다.`);
            }
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
구현 문제 짱
*/