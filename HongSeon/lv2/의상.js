// 해시맵 이용
function solution(clothes) {
    let hash = new Map()
    
    // 종류별로 의상 개수를 해시맵에 저장
    clothes.forEach(([name, type]) => {
        if(hash.has(type)) hash.set(type, hash.get(type) + 1)
        else hash.set(type, 1)
    })
    
    // 의상 종류가 1개만 있을 때 그냥 의상 개수 반환
    if(hash.size === 1) return clothes.length
    
    let cnt = 1
    // 각 의상 종류별 곱하기 
    // +1 이유 : 해당 종류를 입지 않은 경우도 추가
    hash.forEach((i) => cnt *= i + 1)
    
    // -1 이유 : 각 종류 마다 아무것도 입지 않은경우 제외
    return cnt - 1
}

/* 시간복잡도 
 - clothes.forEach [clothes 순회] : O(n)

 - hash.forEach [hash 순환] : O(n)

 => 전체 시간 복잡도 : O(n)
*/