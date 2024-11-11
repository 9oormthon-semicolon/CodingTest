// 해시맵 이용
function solution(weights) {
    let result = 0
    const hash = new Map()
    // 비율
    const ratio = [2, 3/2, 4/3]

    // 무게 수 저장
    weights.forEach(w => {
        hash.set(w, (hash.get(w) || 0) + 1)
    })

    // 무게 순회
    hash.forEach((count, w) => {
        // 같은 무게끼리 조합할 수 있는 경우의 수
        if (count > 1) result += (count * (count - 1)) / 2

        // 현재 무게에 비율들을 곱하여 순회
        // 곱한 무게가 해시에 존재한다면 짝꿍이 될 수 있음
        ratio.forEach(r => {
            const ratio_w = w * r
            if (hash.has(ratio_w)) result += count * hash.get(ratio_w)
        })
    })

    return result
}


/* 시간 복잡도 
 - weights.forEach : O(n)

 - hash.forEach((count, w) : O(m)
    - ratio.forEach(r : O(1)
 
 => 전체 시간 복잡도 : O(n + m)인데 m이 최대 901이므로 O(n)으로 봐도 무방
*/

// 같은 무게끼리 조합할 수 있는 경우의 수에서 같은 무게가 3이상일 때 생각을 안해서 한 번 막혔습니다..
