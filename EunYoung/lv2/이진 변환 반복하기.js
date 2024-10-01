function solution(s) {
  let removeZero = 0;
  let count = 0;

  while (s !== "1") {
    //회차 카운트
    count++;

    // 현재 s의 길이
    let curLeng = s.length;

    // 1 제거
    s = s
      .split("")
      .filter((char) => char !== "0")
      .join("");

    // 제거한 0 개수 세기
    removeZero += curLeng - s.length;

    // 2진법으로 변환
    s = s.length.toString(2);
  }
  return [count, removeZero];
}

// 시간복잡도

// 초기 문자열 길이를 N이라고 할 때,
// 반복 횟수는 약 log N 번입니다. (매 반복마다 길이가 log2로 줄어들기 때문)
// 각 반복에서 O(N) 작업을 수행합니다.
// 최종 시간 복잡도:
// O(N log N)
