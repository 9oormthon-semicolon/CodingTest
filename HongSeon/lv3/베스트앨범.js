// 해시맵 이용
function solution(genres, plays) {
    let result = []
    let hash = new Map()
    
    genres.forEach((g, idx) => {
        // 해시맵 초기 세팅 (장르, {총 재생된 횟수, [인덱스번호, 재생된 횟수]})
        if(!hash.has(g)) hash.set(g, {total : 0, record: []})
        // 현재 장르의 총 재생 횟수에 현재 곡의 재생 횟수를 추가
        hash.get(g).total += plays[idx]
        // 현재 곡의 인덱스 번호와 재생 횟수를 배열 형태로 저장
        hash.get(g).record.push([idx, plays[idx]])
    })
    
    // 해시맵을 배열로 바꾸고 장르별 총 재생된 횟수 기준으로 내림차순
    const sortArray = [...hash.entries()].sort((a,b) => b[1].total - a[1].total)
    
    sortArray.forEach(([g, info]) => {
        // 각 장르 내에서 재생 횟수가 많은 상위 두 곡
        // 재생 횟수가 같다면 인덱스번호 순으로 오름차순
        const Top2 = info.record.sort((a, b) => b[1] - a[1] || a[0] - b[0]).slice(0, 2)
        
        Top2.forEach(record => result.push(record[0]))
    })
    
    return result
}

/* 시간복잡도
 n은 전체 곡의 수 (genres.length)
 m은 각 장르에 속한 곡의 평균 개수

 - genres.forEach : O(n)
 
 - [...hash.entries()].sort : O(nlogn)

 - sortArray.forEach [모든 장르에 대해 반복] : O(n)
    - info.record.sort [각 장르 내의 곡 리스트를 정렬하여 상위 두 곡을 고름] : O(mlogm)

=> 최종 시간 복잡도: O(nlogn + n * mlogm) => O(nlogn)
   - 최악의 경우 장르 수가 n개, 각 장르에 속한 곡 수가 1개일 때, O(nlogn)에 수렴
*/