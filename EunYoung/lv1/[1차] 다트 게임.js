function solution(dartResult) {
  let scores = [];
  let currentScore = 0;

  for (let i = 0; i < dartResult.length; i++) {
    if (!isNaN(dartResult[i])) {
      // 숫자인 경우
      if (dartResult[i] === "1" && dartResult[i + 1] === "0") {
        currentScore = 10;
        i++;
      } else {
        currentScore = parseInt(dartResult[i]);
      }
    } else if (
      dartResult[i] === "S" ||
      dartResult[i] === "D" ||
      dartResult[i] === "T"
    ) {
      // 보너스 적용
      if (dartResult[i] === "D") currentScore = Math.pow(currentScore, 2);
      if (dartResult[i] === "T") currentScore = Math.pow(currentScore, 3);
      console.log(currentScore);
      scores.push(currentScore);
    } else if (dartResult[i] === "*" || dartResult[i] === "#") {
      // 옵션 적용
      if (dartResult[i] === "*") {
        scores[scores.length - 1] *= 2;

        if (scores.length > 1) scores[scores.length - 2] *= 2;
      } else if (dartResult[i] === "#") {
        scores[scores.length - 1] *= -1;
      }
    }
  }

  // 최종 점수 계산
  return scores.reduce((a, b) => a + b, 0);
}

// Math.pow(base, exponent);
// base^exponent처럼 base 에 exponent를제곱한 값을 반환합니다.

// 시간복잡도
// dartResult 문자열을 한 번 순회하는 for 루프 -> O(1)
// 전체 알고리즘의 시간 복잡도는 O(n). 여기서 n은 입력 문자열 dartResult의 길이
