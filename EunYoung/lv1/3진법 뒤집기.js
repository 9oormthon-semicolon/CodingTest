function solution(n) {
  var answer = 0;
  let num = n.toString(3);
  num = num.split("").reverse().join("");
  answer = parseInt(num, 3);
  return answer;
}

// toString(base) 메서드: 진법(base)으로 표현한 문자열을 반환합니다. base는 2부터 36까지의 값을 가질 수 있다.

// 시간복잡도
// n.toString(3):
// n을 3진법으로 변환하는 과정 -> 시간 복잡도 O(log n)

// num.split(''), reverse(), join('')
// -> 시간 복잡도는 O(m)

// parseInt(num, 3):
// 3진법 문자열을 10진법으로 변환하는 과정 -> 시간 복잡도 O(m)

// 전체 시간 복잡도:
// O(log n) + O(log n) = O(log n)
