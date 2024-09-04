function solution(participant, completion) {

    const participantMap = new Map();
    
    // 모든 참가자를 해시맵에 저장 O(n)
    participant.forEach( person => {
        participantMap.set(person , (participantMap.get(person) || 0) + 1) 
    });
    console.log(participant)
    
    // 완주한 사람 해시맵에서 제거 O(m)
    completion.forEach(person => {
         if (participantMap.has(person)) {
            participantMap.set(person, participantMap.get(person) - 1);
        }
    });
    console.log("완주한 사람 제거" , participantMap)
    
    // 남은 참가자 중 완주하지 못한 사람 찾기 O(n)
    for ( let [key, value] of participantMap ) {
        if ( value > 0) {
            return key
        }
    }   
}

// has(),set() 메서드가 각각 O(n) 의 시간 복잡도
//  get() - O(m)
// 최종 시간복잡도 : O(n + m), 여기서 m은 completion 배열의 길이