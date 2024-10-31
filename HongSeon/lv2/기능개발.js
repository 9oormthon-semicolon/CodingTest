// 큐방식 이용
function solution(progresses, speeds) {
    let result = [] 
    // 작업 수
    let task = 1

    // 각 작업이 완료되는데 걸리는 일수 계산
    const days = progresses.map((progress, idx) => 
        Math.ceil((100 - progress) / speeds[idx])
    )

    // 일수 배열 순회(마지막 제외)
    for (let i = 0; i < days.length - 1; i++) {        
        // 현재 작업이 다음 작업보다 먼저 완료될 때
        if (days[i] < days[i + 1]) {
            // 작업 수를 result에 추가
            result.push(task)
            // 작업 수 초기화
            task = 1
        } 
        // 반대의 경우 (현재 작업이 다음 작업보다 늦거나 같을 때)
        else {
            // 다음 일수를 현재 일수로 맞춤
            days[i + 1] = days[i]
            // 작업 수 증가 (같은 날 배포 되는 작업)
            task++
        }
    }

    // 마지막 날 작업 수 추가
    result.push(task)
    return result
}

/* 시간복잡도 
 - progresses.map [progresses 순회] : O(n)

 - for (let i = 0; i < days.length - 1; i++) [days 순회]: O(n)

 => 전체 시간 복잡도 : O(n)
*/
