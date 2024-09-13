// solution 함수 정의: 문자열 s, 건너뛸 문자 skip, 이동할 거리 index를 매개변수로 받음
function solution(s, skip, index) {
  
  // skip 문자를 배열로 변환하여, 빠르게 조회할 수 있도록 만듦
  let skipSet = new Set(skip); // Set은 중복 없이 값들을 저장하고 빠르게 확인할 수 있음
  let result = ''; // 결과 문자열을 저장할 변수

  // 문자열 s의 각 문자를 하나씩 처리하는 반복문
  for (let i = 0; i < s.length; i++) {
    let char = s[i]; // 현재 문자
    let shiftCount = 0; // 실제로 이동한 문자의 개수

    // index만큼 뒤로 이동할 때까지 반복
    while (shiftCount < index) {
      char = String.fromCharCode(char.charCodeAt(0) + 1); // 다음 알파벳으로 이동

      // 'z'를 넘어가면 다시 'a'로 돌아감
      if (char > 'z') {
        char = 'a';
      }

      // 현재 문자가 skip에 포함되지 않으면 이동한 것으로 카운트
      if (!skipSet.has(char)) {
        shiftCount++;
      }
    }

    // 변환된 문자를 결과 문자열에 추가
    result += char;
  }

  // 최종 변환된 결과 문자열 반환
  return result;
}

// 테스트 실행
console.log(solution("aukks", "wbqd", 5)); // "happy" 출력
