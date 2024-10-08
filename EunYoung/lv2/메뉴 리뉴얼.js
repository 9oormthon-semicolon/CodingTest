function solution(orders, course) {
  // 조합 생성 함수: 주어진 배열에서 특정 개수의 요소를 선택하는 모든 조합을 생성
  function getCombinations(arr, selectNumber) {
    const results = [];
    if (selectNumber === 1) return arr.map((el) => [el]); // 1개 선택 시 각 요소를 배열로 반환

    arr.forEach((fixed, index, origin) => {
      const rest = origin.slice(index + 1); // 현재 요소 이후의 요소들
      const combinations = getCombinations(rest, selectNumber - 1); // 재귀적으로 조합 생성
      const attached = combinations.map((el) => [fixed, ...el]); // 현재 요소를 조합에 추가
      results.push(...attached); // 생성된 조합을 결과 배열에 추가
    });

    return results;
  }

  const answer = []; // 최종 결과를 저장할 배열

  course.forEach((size) => {
    // 각 코스 크기에 대해 반복
    const counter = {}; // 각 조합의 등장 횟수를 저장할 객체

    orders.forEach((order) => {
      // 각 주문에 대해 반복
      // 주문을 정렬하고 현재 코스 크기의 조합 생성
      const combinations = getCombinations(order.split("").sort(), size);

      combinations.forEach((combo) => {
        const key = combo.join(""); // 조합을 문자열로 변환
        counter[key] = (counter[key] || 0) + 1; // 조합의 등장 횟수 증가
      });
    });

    // 가장 많이 주문된 횟수 찾기
    const max = Math.max(...Object.values(counter));

    // 최소 2번 이상 주문되고, 해당 크기에서 가장 많이 주문된 조합 선택
    if (max >= 2) {
      answer.push(
        ...Object.keys(counter).filter((key) => counter[key] === max)
      );
    }
  });

  // 결과를 알파벳 순으로 정렬하여 반환
  return answer.sort();
}

// 시간복잡도

// getCombinations 함수:
// 이 함수는 주어진 배열에서 r개의 요소를 선택하는 모든 조합을 생성합니다.
// 시간 복잡도: O(nCr) ≈ O(2^n), 여기서 n은 배열의 길이입니다.

// 메인 로직:
// course 배열을 순회: O(|course|)
// 각 course 크기에 대해:
// orders 배열을 순회: O(|orders|)
// 각 order에 대해 조합 생성: O(2^|order|)
// 최대값 찾기 및 필터링: O(|combinations|)

// 전체 시간 복잡도
// O(|course| * |orders| * 2^|max_order_length|)

// 코드도 이해하기 어렵네여...
