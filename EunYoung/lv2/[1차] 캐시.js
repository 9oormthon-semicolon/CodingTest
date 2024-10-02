function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  let cache = [];
  let time = 0;

  cities.forEach((city) => {
    // cities 소문자로 변경
    city = city.toLowerCase();
    // cache 배열에서 city찾기
    const index = cache.indexOf(city);
    if (index > -1) {
      // Cache hit
      // 새로운 요소 추가하기위해 1인덱스에 있는 요소 제거
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      // Cache miss
      if (cache.length >= cacheSize) {
        // 첫번째 요소 제거
        cache.shift();
      }
      // 새로운 요소 추가
      cache.push(city);
      time += 5;
    }
  });

  return time;
}

//시간복잡도
// 각 도시를 처리할 때마다 최악의 경우 O(m) 연산을 수행합니다.
// 전체 cities 배열에 대해 이를 반복하므로, 최종 시간 복잡도는 O(n * m)입니다.
