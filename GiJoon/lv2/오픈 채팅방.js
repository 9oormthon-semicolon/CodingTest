function solution(record) {
    const idDto = {} //아이디 저장 객체
    const actLogs = [] //행동 로그 arr
    
    const printf = (act,id) => idDto[id] + "님이 " 
    + (act === "Enter" ? "들어왔습니다." : "나갔습니다.")
    
    record.forEach(rec => { 
        const [action, id, name] = rec.split(' ')
        
        if (action !== 'Change') actLogs.push([action, id])
        if (action !== 'Leave') idDto[id] = name 
    })
    
    return actLogs.map(v => printf(...v))
}

/*
  문제를 푼 방법은 id를 기억했다가 바뀐 닉네임으로 한 번에 출력하는 것
  닉네임 체인지는 result에 안뜨고 또 번거로운점은 나갈 때 닉네임을 주지 않는다는 점이다.

  테스트 케이스 1과 16만 통과하길래 뭐가 문제인가 보니까
  나갈 때 닉네임을 주는 줄 알았는데 보니까 leave는 닉네임을 제공하지 않는다.
  때문에 ""로 닉네임이 들어가서 틀린 것 왜 프로그래머스는 틀린 테스트케이스를 제공하지 않는가
  
  Leave가 아닐 때만 닉네임이 바뀌게 개선해서 풀었다.
  
  record = N actions = M
  O(N + M) 
*/