// 해시맵 이용
function solution(k, tangerine) {
    const hash = new Map()
    
    // 각 귤 크기의 개수를 세어 해시맵에 저장
    for (const size of tangerine) {
        hash.set(size, (hash.get(size) || 0) + 1)
    }
    
    // 귤 크기별 개수를 내림차순으로 정렬
    // 왜? 많은 개수를 가진 귤 종류부터 선택하면, 적은 종류의 귤만으로도 k개를 채울 가능성이 높아지기 때문
    const counts = [...hash.values()].sort((a, b) => b - a)
    
    // 선택한 귤 개수
    let total = 0 
    // 선택한 귤 종류 수
    let kinds = 0  

    // k개를 넘을 때까지 귤 종류를 하나씩 선택
    // 왜? k개 이상이 될 때까지 가장 많이 수확된 귤부터 선택해, 최소 종류의 귤만으로도 k개를 채우기 위함
    for (const count of counts) {
        total += count
        kinds++
        if (total >= k) break
    }

    return kinds
}

/* 시간복잡도
 ** m은 귤의 다양한 크기 종류 수로, 최악의 경우 m = n이 될 수 있음

 - for (const size of tangerine) : O(n)

 - [...hash.values()].sort((a, b) => b - a) : O(mlogm)

 - for (const count of counts) : O(m)

 => 전체 시간 복잡도 : O(nlogn)
*/