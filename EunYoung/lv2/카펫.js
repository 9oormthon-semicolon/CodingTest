function solution(brown, yellow) {
  //카펫의 전체 타일 수
  const sum = brown + yellow;
  // height 카펫의 최소 높이 <= Math.sqrt(sum) 가능한 최대 높이
  for (let height = 3; height <= Math.sqrt(sum); height++) {
    // height가 sum의 약수인 경우
    if (sum % height === 0) {
      const width = sum / height;
      if ((width - 2) * (height - 2) === yellow) {
        return [width, height];
      }
    }
  }
}

// 시간복잡도
// 최종 시간 복잡도: O(√sum)
// 여기서 sum은 brown + yellow입니다.
