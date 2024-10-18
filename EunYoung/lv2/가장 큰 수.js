function solution(numbers) {
  // 숫자를 문자열로 변환하고 정렬
  const result = numbers
    .map((n) => n.toString())
    // 두 숫자를 이어붙였을 때 더 큰 값을 만드는 순서로 정렬
    .sort((a, b) => b + a - (a + b))
    .join("");

  // 결과가 0으로 시작하면 "0" 반환, 그렇지 않으면 결과 그대로 반환
  return result[0] === "0" ? "0" : result;
}

/**
 * JavaScript에서 문자열 뺄셈을 시도하면, 문자열이 자동으로 숫자로 변환
 * 
 * 시간복잡도
 * .map(n => n.toString()):
  모든 요소를 순회하므로 O(n)
  
  .sort((a, b) => (b + a) - (a + b)):
  JavaScript의 sort() 메서드는 일반적으로 O(n log n)의 시간 복잡도를 가집니다.
  비교 함수 내부의 연산은 상수 시간으로 간주할 수 있습니다.

  .join(''):
  모든 요소를 순회하므로 O(n)

  마지막 조건 확인 및 반환:
  O(1)의 상수 시간

  따라서 전체 시간 복잡도는 이 중 가장 지배적인 항인 정렬의 복잡도에 의해 결정됩니다:
  O(n log n)
 */
