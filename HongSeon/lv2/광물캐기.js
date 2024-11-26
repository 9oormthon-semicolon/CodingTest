// Greedy 이용
function solution(picks, minerals) {
    let result = 0

    // 미네랄을 5개씩 묶기
    let mList = []
    for (let i = 0; i < minerals.length; i += 5) {
        mList.push(minerals.slice(i, i + 5))
    }

    // 각 미네랄 묶음의 채굴 비용 계산
    let costs = []
    for (let mineral of mList) {
        // 다이아, 철, 돌 곡괭이 사용 시 비용
        let cost = [0, 0, 0] 
        for (let m of mineral) {
            if (m === 'diamond') {
                cost[0] += 1
                cost[1] += 5
                cost[2] += 25
            } else if (m === 'iron') {
                cost[0] += 1
                cost[1] += 1
                cost[2] += 5
            } else if (m === 'stone') {
                cost[0] += 1
                cost[1] += 1
                cost[2] += 1
            }
        }
        costs.push(cost)
    }

    // 곡괭이 수보다 많은 광물 묶음 제거
    let total = 0
    for (let i = 0; i < picks.length; i++) {
        total += picks[i]
    }
    // 사용 가능한 곡괭이 수까지만 묶음 유지
    while (costs.length > total) costs.pop()

    // 돌 곡괭이 사용 비용(cost[2]) 기준으로 정렬
    // 돌 곡괭이의 비용이 높은 묶음을 먼저 처리하여 피로도를 최소화
    costs.sort((a, b) => b[2] - a[2])

    // 주어진 곡괭이 개수 내에서 최소 비용으로 채굴
    for (let cost of costs) {
        // 다이아 곡괭이 사용
        // 다이아 곡괭이로 채굴한 피로도 추가
        if (picks[0] > 0) {
            picks[0] -= 1
            result += cost[0]
            continue
        }
        // 철 곡괭이 사용
        // 철 곡괭이로 채굴한 피로도 추가
        if (picks[1] > 0) {
            picks[1] -= 1
            result += cost[1]
            continue
        }
        // 돌 곡괭이 사용
        // 돌 곡괭이로 채굴한 피로도 추가
        if (picks[2] > 0) {
            picks[2] -= 1
            result += cost[2]
            continue
        }
    }

    return result
}

/* 시간 복잡도 
 - for (let i = 0; i < minerals.length; i += 5) : O(n)

 - for (let mineral of mList) : O(n)
    - for (let m of mineral) : O(1)

 - while (costs.length > total) costs.pop() : O(n)

 - costs.sort((a, b) => b[2] - a[2]) : O(nlogn)

 - for (let cost of costs) : O(n)

 => 전체 시간 복잡도 : O(nlogn)
*/