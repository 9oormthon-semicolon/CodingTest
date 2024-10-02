function solution(cacheSize, cities) {
    let time = 0; // 총 실행 시간을 저장할 변수
    let cache = []; // 캐시를 저장할 배열 

    // 도시 이름 배열을 순차적으로 처리
    cities.forEach(city => {
        const lowerCity = city.toLowerCase(); // 대소문자 구분 없이 처리

        // 캐시 히트 처리: 캐시에 해당 도시가 있으면 실행 시간 +1
        if (cache.includes(lowerCity)) {
            time += 1;
            // LRU를 위해 기존 항목을 삭제하고 다시 추가
            const index = cache.indexOf(lowerCity);
            cache.splice(index, 1); // 기존 항목 삭제
            cache.push(lowerCity); // 최신 항목으로 다시 추가
        } 
        // 캐시 미스 처리: 캐시에 없으면 실행 시간 +5
        else {
            time += 5;
            // 캐시 크기가 0이 아니면 캐시 크기 유지
            if (cacheSize > 0) {
                if (cache.length >= cacheSize) {
                    cache.shift(); // 캐시가 가득 찼다면 가장 오래된 항목 제거
                }
                cache.push(lowerCity); // 새로운 항목 추가
            }
        }
    });

    return time; // 총 실행 시간 반환
}

// 각 도시를 처리할 때마다 캐시에서 도시를 찾는 작업은 
// 최악의 경우 O(cacheSize) 시간이 소요
// 도시 배열은 총 n개의 요소로 이루어져 있으므로, 전체 시간 복잡도는 O(n * cacheSize)