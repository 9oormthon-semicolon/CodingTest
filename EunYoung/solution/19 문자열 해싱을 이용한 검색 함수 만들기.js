function solution(stringList, queryList) {
  const result = [];
  for (let i = 0; i < queryList.length; i++) {
    result.push(stringList.includes(queryList[i]));
    console.log(result);
  }

  return result;
}

console.log(
  solution(["apple", "banana", "cherry"], ["banana", "kiwi", "melon", "apple"])
); // [true, false, false, true]

// 1. polynomial hash를 구현한 부분
function polynomialHash(str) {
  const p = 31; // 소수
  const m = 1_000_000_007; // 버킷 크기
  let hashValue = 0;
  for (let i = 0; i < str.length; i++) {
    hashValue = (hashValue * p + str.charCodeAt(i)) % m;
  }
  return hashValue;
}

function solution(stringList, queryList) {
  // 2. stringList의 각 문자열에 대해 다항 해시값을 계산
  const hashList = stringList.map((str) => polynomialHash(str));

  // 3. queryList의 각 문자열이 stringList에 있는지 확인
  const result = [];
  for (const query of queryList) {
    const queryHash = polynomialHash(query);
    if (hashList.includes(queryHash)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
}
