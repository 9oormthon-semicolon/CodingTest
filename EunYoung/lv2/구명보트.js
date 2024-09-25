function solution(people, limit) {
  // 구명보트의 수를 저장할 변수 초기화
  let lifeboat = 0;

  // 사람들의 몸무게를 오름차순으로 정렬
  people.sort((a, b) => a - b);

  // 가장 가벼운 사람의 인덱스
  let light = 0;
  // 가장 무거운 사람의 인덱스
  let heavy = people.length - 1;

  // 모든 사람을 처리할 때까지 반복
  while (light <= heavy) {
    // 가장 가벼운 사람과 가장 무거운 사람을 함께 태울 수 있는 경우
    if (people[light] + people[heavy] <= limit) {
      light++; // 가벼운 쪽 인덱스 증가
      heavy--; // 무거운 쪽 인덱스 감소
    } else {
      // 무거운 사람만 태울 수 있는 경우
      heavy--; // 무거운 쪽 인덱스만 감소
    }
    lifeboat++; // 구명보트 수 증가
  }

  // 필요한 구명보트의 총 수 반환
  return lifeboat;
}

// 시간복잡도

// 루프 내부의 모든 연산(비교, 증감 연산 등)은 상수 시간 O(1)에 수행됩니다.
// 전체 시간 복잡도 -> O(n log n)
