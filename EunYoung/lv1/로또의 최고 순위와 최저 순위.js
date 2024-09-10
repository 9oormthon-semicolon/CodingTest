function solution(lottos, win_nums) {
  var answer = [];
  const matchedNumber = lottos.filter(
    (lotto) => win_nums.includes(lotto) || lotto === 0
  );

  const minMatch = matchedNumber.filter((num) => num !== 0).length;
  const maxMatch = matchedNumber.length;

  function getRank(match) {
    switch (match) {
      case 6:
        return 1;
      case 5:
        return 2;
      case 4:
        return 3;
      case 3:
        return 4;
      case 2:
        return 5;
      default:
        return 6;
    }
  }

  const maxRank = getRank(maxMatch);
  const minRank = getRank(minMatch);

  return [maxRank, minRank];
}

// 시간복잡도
// filter는 lottos 배열의 모든 요소를 순회합니다: O(n)
// 각 요소에 대해 win_nums.includes()를 호출합니다: O(m)
// n은 lottos의 길이, m은 win_nums의 길이 -> O(n*m)

// switch 문은 상수 시간이 걸립니다: O(1)

//전체 시간 복잡도는 O(n*m).
