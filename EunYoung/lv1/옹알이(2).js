function solution(babbling) {
  const babyWords = ["aya", "ye", "woo", "ma"];
  let cnt = 0;

  for (let word of babbling) {
    if (repeatWords(word)) {
      continue;
    }

    let isValid = true;
    let i = 0;

    while (i < word.length) {
      let found = false;
      for (let speak of babyWords) {
        if (word.startsWith(speak, i)) {
          i += speak.length;
          found = true;
          break;
        }
      }
      if (!found) {
        isValid = false;
        break;
      }
    }

    if (isValid) {
      cnt++;
    }
  }

  return cnt;
}

function repeatWords(word) {
  const repeat = ["ayaaya", "yeye", "woowoo", "mama"];
  for (let repeatWord of repeat) {
    if (word.includes(repeatWord)) {
      return true;
    }
  }
  return false;
}

// hasConsecutiveWords 함수
// 연속된 같은 발음이 있는지 확인

// 연속된 같은 발음이 있으면 다음 단어로 넘어감
// 단어의 각 문자부터 시작하여 가능한 발음(babyWords)과 일치하는지 확인
// startsWith 메서드를 사용하여 단어의 시작 부분이 가능한 발음과 일치하는지 확인
// 단어가 유효하면(모든 부분이 가능한 발음으로 구성되어 있으면) 카운트를 증가
// ---------------------------------------
// 시간복잡도
// 외부 루프: O(n)
// 각 단어에 대해
// repeatWords: O(m)
// 내부 while 루프: O(m)
// 각 반복에서 babyWords 루프: O(k)
// startsWith: O(1) to O(k)

// -> 전체 시간 복잡도는 O(n * m * k)
