// 효율성 테스트 통과 못함..

function solution(phone_book) {
  for (let i = 0; i < phone_book.length; i++) {
    for (let j = i + 1; j < phone_book.length; j++) {
      if (
        phone_book[j].startsWith(phone_book[i]) ||
        phone_book[i].startsWith(phone_book[j])
      ) {
        return false; // 접두어 관계가 발견되면 false 반환
      }
    }
  }
  return true; // 모든 검사를 통과하면 true 반환
}

// 시간복잡도
// 루프의 복잡도: O(n^2)
// 각 비교 연산의 복잡도: O(m)
// 따라서 전체 시간 복잡도는 O(n^2 * m)입니다.

//------------------------------

// 통과한 코드

function solution(phone_book) {
  // 전화번호부 정렬
  phone_book.sort();

  // 인접한 두 번호만 비교
  for (let i = 0; i < phone_book.length - 1; i++) {
    if (phone_book[i + 1].startsWith(phone_book[i])) {
      return false;
    }
  }
  return true;
}

// 시간복잡도
// 정렬 단계: O(n log n)
// 비교 단계: O(n * m)
// 따라서 전체 시간 복잡도는 O(n log n + n * m)입니다. -> O(n log n)

//------------------------------

// includes(): 문자열 어느 위치에서나 부분 문자열을 찾습니다.
// startsWith(): 문자열의 시작 부분에서만 검색합니다
