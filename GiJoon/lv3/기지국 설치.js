//n 아파트 개수
//w 전파의 도달거리
//stations 기지국 보유 아파트

function solution(n, stations, w) {
    let result = 0 //누적겂
    let prev = 1 //이전 마지막 값
    
    stations.forEach(apt => {
        // 앞의 방향 기지국 범위를 구함
        const prevRange = apt - w
        // 범위가 벗어나면 벗어난 범위에 설치할 최소 기지국 개수를 추가
        if (prev < prevRange) result += Math.ceil((prevRange - prev) / (w * 2 + 1))
        
        //마지막 아파트 값 업뎃
        prev = apt + w + 1
    })

    //이전 마지막 영향력이 최종 아파트까지 닿지 않으면 마찬가지로 최소 기지국 개수 추가
    return (prev > n) ? result : result + Math.ceil((n - prev + 1) / (w * 2 + 1))
}


/*
    묘하게 현실적인 문제
    
    완전탐색 같기도 하고 그냥 수학으로 풀 수 있을 것 같기도 하고    
    
    O(stations)
*/

/*
function solution(n, stations, w) {
    let answer = 0
    stations.map(v => v - 1)
    
    const Apt = Array(n).fill(0)
    
    stations.forEach(num => {
        const min = Math.max(num - w - 1, 0)
        const max = Math.min(num + w - 1, n - 1)
    
        for (let i = min; i <= max; i++) {
            Apt[i] = 1
        }
    })
    
    //뭉쳐있는 아파트 개수 구하기
    const wasteApt = Apt.join('')
                        .split(/1+/)
                        .filter(v => v !== "")
                        .map(v => v.length)


    return wasteApt.reduce((acc, v) => acc += Math.ceil(v / (w * 2 + 1)) ,0)
}  //기지국 영향이 닿는 아파트와 개수 구하기를 분리해서 풀었더니 답은 나오는데 효율성 반려당함 아쉬움
*/