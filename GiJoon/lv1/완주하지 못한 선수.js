function solution(players, completes) {
    //통과자 리스트 추출
    //동명 이인이 있기 때문에 객체사용 {ChulSu:2,Yunghye}
    let complete_players = completes.reduce((obj,player,idx)=>{
        obj[player] = (obj[player] || 0) + 1
        return obj
    },{})
    
    //players 탐색 만약에 이름이 없으면 완주 못한거임 이름 return
    for(const name of players){
        if(complete_players[name] && complete_players[name] > 0) 
            complete_players[name]--
        else return name
    }
}
//참여한 선수 중 완주자 목록에 없으면
//이름을 리턴하는 문제입니다.
//곤란한 부분은 동명이인이 있다는 점
//이를 해결하기 위해서 객체를 사용했고
//참가한 참여자 중 완주자 명단에 없거나 완주자 명단이 있지만 값이 0이하일 경우
//이름을 리턴하도록 해결했습니다.

// completes.reduce O(n)
// for(const name of players){} O(n)
// 2 * O(n) = O(n)