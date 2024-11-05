function solution(name) {
    let answer = 0; 
    let charCodeArr = [...name].map(char => {
        return char.charCodeAt();
    })
   let minMove = charCodeArr.length-1 // 오른쪽으로 이동하는 경우로 초기화
   
    // 위아래 기준으로만 했을 때,
    charCodeArr.forEach( (asc,idx) => {
        if ( asc <= 78) answer += asc - 65;  
        else answer += 90 - asc + 1;
    })

    // 좌우 기준만 최적 계산
    for ( let i = 0; i < charCodeArr.length ; i++) {
        let nextIdx = i+1;
        
        // 연속된 'A' 가 끝나는 지점 찾기
        while( nextIdx < charCodeArr.length && charCodeArr[nextIdx] === 65 ) {
            nextIdx ++
        }  
        // i 위치에서 nextIdx로 이동하는 경로와 끝까지 갔다가 돌아오는 경로 중 최소값 선택
        minMove = Math.min(minMove, i + charCodeArr.length - nextIdx + Math.min(i, charCodeArr. length - nextIdx));
    }
   
            
    return answer + minMove;
}

// 시간복잡도 : O(n)