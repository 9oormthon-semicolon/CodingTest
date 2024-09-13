function solution(s, skip, index) {
  let answer = "";
  for (let alphabet of s) {
    let sString = alphabet.charCodeAt();
    // charCodeAt() 문자의 아스키 번호를 반환
    let cnt = 0;

    while (cnt < index) {
      sString = sString === 122 ? 97 : sString + 1; // z(122)라면? -> a(97)로 변경
      if (!skip.includes(String.fromCharCode(sString))) {
        cnt++;
      }
    }
    answer += String.fromCharCode(sString);
    // String.fromCharCode(아스키 번호) 아스키 번호의 문자를 반환
  }
  return answer;
}

// 시간복잡도
// 전체 시간 복잡도
// O(n * (index + |skip|) * |skip|)

// n은 입력 문자열 s의 길이
// index는 주어진 인덱스 값
// |skip|은 skip 문자열의 길이
// 최악의 경우 (모든 문자가 skip에 포함되어 있고, index가 매우 큰 경우):
// O(n * 26 * |skip|)
// 그러나 실제로는 index와 |skip|이 일반적으로 작은 상수 값이므로, 평균적인 경우 시간 복잡도는 O(n)에 가깝게 동작할 것입니다.
