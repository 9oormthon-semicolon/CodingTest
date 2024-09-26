// 이게 뭔소리요..?
// 결국엔 입퇴장 기록에 최종 ID를 대입하는 문제

function solution(record) {
    // 해시테이블 이용
    let userInfo = new Map();
    let result = [];
    
    // record 순회1 (id 기록용)
    for(let i = 0; i < record.length; i++){
        // temp에 띄어쓰기 기준으로 split
        let temp = record[i].split(" ")
        // Leave는 닉네임에 영향을 주지 않고 혼자만 길이가 2임
        // 그래서 길이가 3일때만 userInfo 기록 및 갱신 ([유저 아이디]는 불변)
        if(temp.length === 3) userInfo.set(temp[1], temp[2])
    }
    
    // record 순회2 (입퇴장 기록 출력용)
    for(let i = 0; i < record.length; i++){
        // 똑같이 split
        let temp = record[i].split(" ")
        // userInfo에서 [유저아이디]를 통해 [닉네임] 출력
        if(temp[0] === "Enter"){
            result.push(`${userInfo.get(temp[1])}님이 들어왔습니다.`)
        }
        else if(temp[0] === "Leave"){
            result.push(`${userInfo.get(temp[1])}님이 나갔습니다.`)
        }
    }
    
    return result
}

/* 시간 복잡도
 - for(let i = 0; i < record.length; i++) : id 기록용 : O(n)

 - for(let i = 0; i < record.length; i++) : 입퇴장 기록 출력용 : O(n)

 => 전체 시간 복잡도 : O(n) 
*/