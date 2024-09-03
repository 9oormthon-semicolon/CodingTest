function solution(N, stages) {
    let failArr = [];
    
    let playerLength = stages.length; // 게임 도전한 총 사용자 수.
    
    //각 스테이지의 실패율 계산
    for ( let i = 1 ; i <= N ; i++) {
        // 해당 스테이지에 머물러 있는 사용자 수를 계산합니다.
        let stuckPlayers = stages.filter(stage => stage === i).length;
      
        //실패율 계산
        let failRate = 0;
        if ( playerLength > 0 ) {
            failRate = stuckPlayers / playerLength;
        }
        
        // 계산된 실패율과 스테이지 번호 배열에 저장
        failArr.push({ stage: i ,rate: failRate})
        
        playerLength -= stuckPlayers; // 다음 스테이지 계산을 위해 남은 사용자 수 
    }
    
    // 실패율을 기준으로 스테이지 내림차순 정렬
    // 실패율이 같을 경우 스테이지 번호가 작은 것 우선.
    failArr.sort((a,b) => {
        if (b.rate === a.rate) {
            return a.stage - b.stage;
        } else {
            return b.rate - a.rate;
        }
    })
    
    // 번호만 추출
    return failArr.map(num => num.stage);
}

/* 
첫 번째 루프 (실패율 계산): O(N * M)
정렬: O(N log N)
Mapping: O(N)
총 시간 복잡도 : O(N * M)
*/