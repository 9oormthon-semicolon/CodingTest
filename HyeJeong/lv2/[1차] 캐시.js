function solution(cacheSize, cities) {
    let answer = 0;
    const cache = [];

    if (cacheSize === 0) 
        return cities.length * 5;

    cities.forEach(city => {
        city = city.toLowerCase();
        
        if (cache.includes(city)) {
            cache.splice(cache.indexOf(city), 1);
            cache.push(city);
            answer += 1;
        } else {
            if (cache.length >= cacheSize) {
                cache.shift();
            }
            cache.push(city);
            answer += 5;
        }
    });

    return answer;
}

/*
LRU 캐시의 동작을 알면 쉽게 풀 수 있었던 문제였다
캐시 초기화 진행하고 캐시 크기가 0인경우를 처리한 뒤
각 도시에 대해 소문자로 변환하고 캐시에 도시가 있는지 확인
도시가 캐시에 있으면 그 도시를 제거하고 맨 뒤에 추가하면서 실행시간 증가
캐시가 가득 찼으면 가장 오래된 항목 제거하고 새 도시를 캐시에 추가하고 실행 시간에 5 더함

시간 복잡도 - O(n*m)
n은 cities 길이 m은 cacheSize
*/
