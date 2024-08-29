function solution(seoul) {
  const index = seoul.findIndex((name) => name === "Kim");
  return `김서방은 ${index}에 있다`;
}

// for, filter(name, index), findIndex 순으로 찾았습니다.

// 시간복잡도
// 배열을 순회하면서 조건에 맞는 인덱스를 찾음
// -> (O(n))
