function solution(fees, records) {
    let result = []
    // 주차 시간을 기록할 해시
    let hashT = new Map()
    // 입출차를 기록할 해시
    let hashR = new Map()
    // 요금표 구조 분해 할당
    const [dm, dc, um, uc] = fees
    
    // 기록 순회
    records.forEach((record) => {
        // 기록 구조 분해 할당(시간, 차번호, 입출차)
        const [time, number, inout] = record.split(" ")
        // 시간을 분으로 바꿈
        const [h, m] = time.split(":").map(Number)
        const min = h * 60 + m
        
        // 입차시 입출차 해시에 저장
        if (inout === "IN") hashR.set(number, min)
        // 출차
        else {
            // 입출차 해시에서 입차 시간을 가져옴 
            const intime = hashR.get(number)
            // 주차 시간 = 출차 시간 - 입차 시간
            const parkTime = min - intime
            // 주차 시간 해시에 차번호, 주차 시간 저장
            hashT.set(number, (hashT.get(number) || 0) + parkTime)
            // 출차 했으니까 입출차 해시에서 해당 차 삭제
            hashR.delete(number)
        }
    })
    
    // 출차를 안했을 경우 23:59 기준으로 주차 시간 해시에 주차 시간 저장
    hashR.forEach((Intime, number) => {
        const lastTime = 23 * 60 + 59
        const parkTime = lastTime - Intime
        hashT.set(number, (hashT.get(number) || 0) + parkTime)
    })
    
    // 주차 시간 해시 정렬 (차번호(문자열) 기준이므로 localeCompare 사용)
    hashT = new Map([...hashT.entries()].sort((a, b) => a[0].localeCompare(b[0])))
    
    // 주차 시간 해시 순회
    hashT.forEach((parkTime) => {
        // 기본 시간이 넘지 않았다면 기본 요금
        if(parkTime <= dm) result.push(dc)
        else {
            // 기본시간 넘긴 경우 (기본 요금 + 추가 요금)
            let over = Math.ceil((parkTime - dm) / um)
            result.push(dc + over * uc)
        }
    })
    
    return result
}

/* 시간 복잡도 
 * records : n
 * hashR : m
 * hashT : k

 - records.forEach : O(n)

 - hashR.forEach : O(m)

 - hashT = new Map([...hashT.entries()].sort : O(klogk)

 - hashT.forEach : O(k)

 ** 최악의 경우 **
 m = n
 k = n
 O(n + n + nlogn + n)

 => 전체 시간 복잡도 : O(nlogn)
*/