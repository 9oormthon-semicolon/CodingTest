function solution(age) {
    // 2022년에서 나이를 빼면 태어난 연도를 구할 수 있음
    return 2022 - age + 1;  // 나이는 태어난 해에 1살이므로 +1
}

console.log(solution(40));  // 출력: 1983
console.log(solution(23));  // 출력: 2000

/*
  다른 사람의 문제 풀이
  function solution(age) {
    return new Date().getFullYear() - age + 1;
  }

  Date 객체 : JS에서 날짜 & 시간을 다루기 위한 내장 객체‼
  new Date() → 현재 날짜와 시간 기준으로 한 Date 객체 생성🎇

  getFullYear()
  👉 Date 객체가 나타내는 날짜의 연도 4자리 숫자로 반환 🔁

  new Date()로 현재 날짜를 생성하고,
  getFullYear() 사용하여 현재 연도 얻는 것
*/
