function solution(s) {
  
  // 숫자와 영단어의 매핑을 저장하는 객체
  const numWords = {
    "zero": "0", "one": "1", "two": "2", "three": "3", 
    "four": "4", "five": "5", "six": "6", "seven": "7", 
    "eight": "8", "nine": "9"
  };

  // 영단어를 숫자로 변환
  for (const word in numWords) {
    // 문자열에 영단어가 있는지 확인하고 있으면 숫자로 바꿔준다.
    s = s.split(word).join(numWords[word]);
  }

  // 변환된 문자열을 숫자로 변환해서 반환
  return Number(s);
}

// 테스트 실행
console.log(solution("one4seveneight"));
console.log(solution("23four5six7")); 
console.log(solution("2three45sixseven"));
console.log(solution("123"));

/*
-출력-
1478
234567
234567
123

-시간 복잡도-
for 문 이용해서
s 문자열을 순회하며 영 단어를 숫자로 변환🔄
각 변환은 s의 길이에 비례하는 연산이므로
시간 복잡도 ⇒ O(n)
여기서 n은 문자열 s의 길이‼
*/
