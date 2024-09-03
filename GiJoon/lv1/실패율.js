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