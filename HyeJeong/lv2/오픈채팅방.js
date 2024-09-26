function solution(record) {
    const userMap = {}; 
    const result = [];

    for (let entry of record) {
        const [action, userId, nickname] = entry.split(' '); 

        if (action === 'Enter' || action === 'Change') {
            userMap[userId] = nickname;
        }
    }
    for (let entry of record) {
        const [action, userId] = entry.split(' ');

        if (action === 'Enter') {
            result.push(`${userMap[userId]}님이 들어왔습니다.`); 
        } else if (action === 'Leave') {
            result.push(`${userMap[userId]}님이 나갔습니다.`); 
        }
    }
    return result;
}

/*
생각한 로직은 사용자의 최종 닉네임을 저장하기 위해 객체를 하나 만들고
배열은 순회하면서 각 사용자의 입장, 퇴장, 닉네임 변경에 따라 객체를 업데이트 한 뒤
사용자의 변경에 따라 해당 메시지를 반환

시간복잡도 - record 배열 for문 돌렸으므로 O(n)
*/
