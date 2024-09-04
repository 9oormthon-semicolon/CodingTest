function solution(participant, completion) {
  var answer = "";
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }

  return answer;
}

// 시간복잡도
// participant.sort(), completion.sort()는 각각 O(n log n)의 시간 복잡도
// for문 -> O(n)

// 전체 시간복잡도:
// O(n log n)
