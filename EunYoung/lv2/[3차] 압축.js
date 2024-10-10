function solution(msg) {
  const answer = [];
  const dictionary = {};

  // 사전 초기화 (A-Z)
  for (let i = 0; i < 26; i++) {
    dictionary[String.fromCharCode(65 + i)] = i + 1;
  }

  let w = "";
  let dictIndex = 27;

  for (let i = 0; i < msg.length; i++) {
    w += msg[i];

    // 사전에 없는 문자열을 만날 때까지 반복
    while (i < msg.length - 1 && dictionary[w + msg[i + 1]] !== undefined) {
      i++;
      w += msg[i];
    }

    // 현재 문자열의 색인 번호 출력
    answer.push(dictionary[w]);

    // 새로운 문자열을 사전에 등록
    if (i < msg.length - 1) {
      dictionary[w + msg[i + 1]] = dictIndex++;
    }

    w = "";
  }

  return answer;
}

// 시간 복잡도는 O(n).
// 여기서 n은 입력 문자열의 길이. 각 문자를 최대 한 번씩만 처리하기 때문.
