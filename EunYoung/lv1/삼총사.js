function solution(number) {
  var answer = 0;
  var length = number.length;

  for (var i = 0; i < length; i++) {
    for (var j = i + 1; j < length; j++) {
      for (var k = j + 1; k < length; k++) {
        if (number[i] + number[j] + number[k] === 0) {
          answer++;
        }
      }
    }
  }
  return answer;
}
// 시간복잡도 -> O(n³)
// 첫 번째 루프: n번 실행
// 두 번째 루프: 최대 n-1번 실행
// 세 번째 루프: 최대 n-2번 실행
