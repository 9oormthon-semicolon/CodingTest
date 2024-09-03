//N은 전체스테이지 개수 멈춰있는 플레이어 스테이지
function solution(N, stages) {
    //누적합
    let acc = 0
    const len = stages.length
    //[플레이어 수 / 실패율 / 스테이지]
    let arr = Array.from({length:N+1}).map((_,idx)=>[0,0,idx+1])
    //플레이어수 추가
    stages.forEach(v=>arr[v-1][0]++)
    
    arr.forEach(([players], idx) => {
        // len - acc = 전체 플레이어 수 - 도달 못한 플레이어 수
        arr[idx][1] = players / (len - acc)
        //플레이어 수 누적
        acc += players
    })
    
    //마지막 레벨 삭제
    arr.pop()
    
    //정렬 뒤 스테이지 추출
    return arr.sort((a,b)=>b[1]-a[1]).map((v)=>v[2])
}

// 스테이지 실패비율 기준으로 내림차순 정렬을 하면 되는 문제입니다.
// [멈춘 플레이어, 실패율, level]로 묶어서 record를 만들었고
// 만들어진 데이터에 반복문을 시행하여 플레이어 값을 누적하고 
// 실패한 비율을 저장하는 구조로 문제를 해결했습니다.

/*-----------------------------------------------------------------*/
// let arr --- O(N)
// stages.forEach --- O(M)
// arr.forEach --- O(N)
//arr.sort().map --- O(log n)*O(N)
// ------------------------------------
// O((N + M) log n) = O(N log n)

//예전에 풀었던거 똑같이 풀어서 양심에 찔렸습니다.
//아래는 객체를 이용한 풀이입니다

//N은 전체스테이지 개수 멈춰있는 플레이어 스테이지
function solution(N, stages) {
    
    const records = stages.reduce((obj,v) => {
       obj[v] = (obj[v]||0) + 1
       return obj
    }, {})
       
    let acc = 0
    let arr = []
    const len = stages.length
    
    for (let i = 1; i <= N; i++) {
        // 현재 스테이지에 머물러 있는 플레이어들
        const players = records[i]||0;
        // 깬 플레이어 수 + 현재 스테이지 머물러
        const total = len - acc;
        // 실패율 계산 토탈이 0 이면 성공률 0
        const failRate = total === 0 ? 0 : players / total;
        arr.push([failRate, i]);
        // 누적 플레이어 수 업데이트
        acc += players
    }
    
    //정렬 같으면 스테이지 오름 차순
    arr.sort((a, b) => b[0] - a[0] || a[1] - b[1])

    return arr.map(([_,idx]) => idx)
}

