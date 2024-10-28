function solution(genres, plays) {
    const cnt = {}
    
    //장르별 음악 추출
    const numberOfStreaming = genres.reduce((check, v, idx) => {
        //장르별 추출
        if (!cnt[v]) cnt[v] = [[idx,plays[idx]]] 
        
        else cnt[v].push([idx, plays[idx]])
        
        //장르별 스트리밍 횟수 누적
        return check.set(v, check.get(v) ? check.get(v) + plays[idx] : plays[idx])
        
    },new Map());
    
    //장르 별 총 재생 횟수 순위 정렬
    return [...numberOfStreaming]
        .sort((a, b) => b[1] - a[1])
        .reduce((result, [genre, num]) => {
        
        //장르곡이 한개 일때
        if (cnt[genre].length === 1) return [...result, cnt[genre][0][0]]
            
        
        //장르 내 상위 2곡 idx추출 
        const mostPlays = cnt[genre]
            .sort((a, b) => b[1] - a[1] || a[0] - b[0])
            .slice(0,2)
            .map(([idx,_]) => idx)
        
        //상위 곡 2개 삽입
        return [...result, ...mostPlays]
        
    },[])
}

/*
    1.속한 노래가 많이 재생된 장르를 먼저 수록
    2.장르 내에서 많이 재생된 노래를 먼저 수록
    3.장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록
    
    - 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다
    
    [장르][장르]
    장르:[많이 재생된] 같으면 빨리 등록한 노래 우선
    
    음 일단 genres에서 장르별 음악을 나누고 총 스트리밍 수를 MAP데이터에 저장합니다.  
    장르별 횟수 기준으로 정렬 뒤 장르 내부의 음악 순서대로 정렬한 뒤 상위 노래 2곡만 추출 하여 문제를 풀었습니다.
    
    const numberOfStreaming = genres.reduce((check, v, idx) => {... = O(N)
    
    return [...numberOfStreaming].sort((a, b) => b[1] - a[1]) ... 장르 개수(100 미만) = O(1)
        
    reduce.... = O(N log (N))
    
    O(N log (N))
        
*/
