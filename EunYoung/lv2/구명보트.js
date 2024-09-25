function solution(people, limit) {
  let lifeboat = 0;
  people.sort((a, b) => a - b);

  let light = 0;
  let heavy = people.length - 1;

  while (light <= heavy) {
    if (people[light] + people[heavy] <= limit) {
      light++;
      heavy--;
    } else {
      heavy--;
    }
    lifeboat++;
  }
  return lifeboat;
}

// 시간복잡도

// 루프 내부의 모든 연산(비교, 증감 연산 등)은 상수 시간 O(1)에 수행됩니다.
// 전체 시간 복잡도 -> O(n log n)
