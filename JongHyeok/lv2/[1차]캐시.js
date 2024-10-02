function solution(cacheSize, cities) {
    let answer = 0;
    let cache = [];
    
    if (cacheSize === 0) return cities.length * 5;
    
    for (let city of cities) {
        city = city.toUpperCase();
        if (cache.includes(city)) {
            // 캐시에 이미 있는 city의 경우
            cache = cache.filter(c => c !== city);
            cache.push(city); // 맨 뒤로
            answer += 1;
        } else {
            // 캐시에 없는 city의 경우
            answer += 5;
            if (cache.length < cacheSize) {
                // 아직 캐시에 빈 공간이 있다면
                cache.push(city);
            } else {
                // 캐시에 빈 공간이 없다면
                cache.shift();
                cache.push(city);
            }
        }
    }
    
    return answer;
}

console.log(solution(3, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"]));

/*
실제 캐시의 LRU 알고리즘과 동작이 같습니다.
사용된 지 가장 오래된 것을 버리고 새로운 것을 추가하는 방식입니다.
도시의 개수 n (최대 100,000)
캐시의 크기 m (최대 30)
도시 이름 k (최대 20)
도시들 배열을 순회하며 toUppercase(시간복잡도 O(k)), filter, shift(시간복잡도(m))를 실행하기 때문에
시간복잡도는 O(n * m * k)이며 최대 20, 30인 m, k를 상수 처리하면
전체 시간복잡도는 O(n)입니다.
*/