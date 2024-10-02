function solution(cacheSize, cities) {
    // 캐시 크기가 0면 실행시간은 모두 5 
    if (cacheSize === 0) return cities.length * 5; 
    
    let cache = []
    let time = 0;
    
    // cities 순회
    for(let i = 0; i < cities.length; i++){
        // 대문자로 통일
        let city = cities[i].toUpperCase()
        
        // cache에 city가 있다면
        if(cache.includes(city)){
            // 실행시간 1초 추가
            time += 1;
            // splice를 이용하여 cach에서 삭제
            cache.splice(cache.indexOf(city), 1);
            // 그리고 다시 cahs의 끝에 추가
            cache.push(city)
        }
        // cache에 city가 없다면 
        else {
            // 실행시간 5초 추가
            time += 5;
            // 만약 주어진 캐시크기와 현재 캐시길이가 같다면 캐시가 꽉찬 것이므로
            // 맨 왼쪽 제거
            if(cache.length === cacheSize) cache.shift();
            // 캐시에 city추가
            cache.push(city)
        }
    }
    
    return time
}


/* 시간 복잡도
 - for(let i = 0; i < cities.length; i++) [cities 순회] : O(n)
    - cache.includes(city) [cache 순회] : O(30)
        ** 캐시크기 최대 30
    - cache.splice(cache.indexOf(city), 1) [cache 순회] : O(30)
        ** 캐시크기 최대 30

=> 전체 시간 복잡도: O(n)
*/