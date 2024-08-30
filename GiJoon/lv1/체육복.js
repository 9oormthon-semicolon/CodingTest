function solution(n, lost, reserve) {
    //캐비넷
    const cabinet = {}
    //체육 가능한 사람 수
    let cnt = 0
    
    //1부터 n까지 모든 체육복 추가
    for (let i = 0; i < n; i++) {
        let idx = i + 1
        cabinet[idx] = 1  // 기본적으로 체육복 1개
        // 여분의 체육복 있
        if (reserve.includes(idx)) cabinet[idx]++
        // 체육복 훔쳐가긔
        if (lost.includes(idx)) cabinet[idx]--
    }
        
    for(let i = 1; i<=n; i++){
        //나는 체육복이 두 갠데 전 번호 친구가 체육복이 없을 때
        if(cabinet[i] === 2 && cabinet[i-1] === 0){
            cabinet[i]--
            cabinet[i-1]++
        }
        //나는 체육복이 두 갠데 다음 번호 친구가 체육복이 없을 때
        else if(cabinet[i] === 2 && cabinet[i+1] === 0){
            cabinet[i]--
            cabinet[i+1]++
        }
        //체육 가능하면 ++
        if(cabinet[i-1] > 0) cnt ++
    }
    //마지막 인덱스 처리
    return cabinet[n] > 0 ? cnt + 1 : cnt
}

// ** 수정 **

// 모든 체육복 캐비넷에 추가하는 시간 + 여분 체육복 + 훔쳐간 체육복 계산  
// O(n * (reserve + lost))
// 체육복을 빌려주는 계산 시간 O(n)

// O(n * (reserve + lost)) + O(n) 
// O(2n * (m + l))
// O(n * (m + l))