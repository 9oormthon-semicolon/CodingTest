function solution(participant, completion) {
  let answer = "";
  participant.sort();
  completion.sort;

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return answer;
}

// -----------------------------------------

function solution(participant, completion) {
  // 1. 해시 테이블 생성
  const obj = {};

  // 2. 참가자들의 이름을 해시 테이블에 추가
  for (const p of participant) {
    if (obj[p]) {
      obj[p] += 1;
    } else {
      obj[p] = 1;
    }
  }

  // 3. 완주한 선수들의 이름을 키로 하는 값을 1씩 감소
  for (const c of completion) {
    obj[c] -= 1;
  }

  // 4. 해시 테이블에 남아 있는 선수가 완주하지 못한 선수
  for (const key in obj) {
    if (obj[key] > 0) {
      return key;
    }
  }
}

console.log(
  solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])
); // "mislav"

/**
 * 시간복잡도
 *
 * N은 participant의 길이
 * K는 completion의 길이
 *
 * 최종 시간복잡도 O(N)
 */
