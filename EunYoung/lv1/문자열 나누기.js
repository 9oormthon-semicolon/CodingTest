function solution(s) {
  let answer = 0;
  let Char = "";
  let cnt1 = 0;
  let cnt2 = 0;

  for (let c of s) {
    if (!Char) Char = c;

    if (Char === c) {
      cnt1++;
    } else cnt2++;

    if (cnt1 === cnt2) {
      answer++;
      cnt1 = 0;
      cnt2 = 0;
      Char = "";
    }
  }

  // 반복문이 끝났는데 Char이 남아있는 경우
  // 잔여 문자가 남아있는 경우이므로 answer을 1 증가시킨다.
  if (Char) answer++;

  return answer;
}

//시간복잡도
// for...of - > O(1)
// 루프 내부의 모든 연산(조건 검사, 변수 할당, 카운트 증가 등)은 상수 시간 O(1)
// 루프 종료 후 수행되는 마지막 조건 검사와 연산도 상수 시간 O(1)

// 전체 시간복잡도 -> O(n)
