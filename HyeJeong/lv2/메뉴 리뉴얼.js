function getCombinations(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]); 
  
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1); 
    const combinations = getCombinations(rest, selectNumber - 1); 
    const attached = combinations.map((el) => [fixed, ...el]); 
    results.push(...attached); 
  });
  
  return results;
}

function solution(orders, course) {
  const answer = [];
  
  course.forEach((size) => {
    const menuCombinations = {};
    
    orders.forEach((order) => {
      const combinations = getCombinations(order.split('').sort(), size);
      combinations.forEach((combination) => {
        const menu = combination.join('');
        menuCombinations[menu] = (menuCombinations[menu] || 0) + 1;
      });
    });
    
    const maxCount = Math.max(...Object.values(menuCombinations));
    if (maxCount >= 2) {
      const maxMenus = Object.keys(menuCombinations).filter(
        (menu) => menuCombinations[menu] === maxCount
      );
      answer.push(...maxMenus);
    }
  });
  
  return answer.sort();
}

/*
getCombinations 함수는 재귀적으로 주어진 배열에서 특정 길이의 모든 조합을 생성
solution 함수에서는 각 코스 크기(course)에 대해 모든 주문(orders)에 대해 해당 크기의 조합을 생성하고 각 조합의 출현 빈도를 menuCombinations 객체에 기록
가장 많이 주문된 조합(들)을 찾아 answer 배열에 추가
최종적으로 answer 배열을 정렬하여 반환

시간복잡도 - O(k * m * 2^n)
조합 생성 함수의 시간복잡도는 O(2^n) 여기서 n은 입력 배열의 길이
외부 루프 (course 배열): O(k) k는 course 배열의 길이
내부 루프 (orders 배열): O(m) m은 orders 배열의 길이
각 주문에 대한 조합 생성: O(2^n) n은 가장 긴 주문의 길이
따라서 전체 시간복잡도는 O(k * m * 2^n)
(시간복잡도가 헷갈리네요 정확하지 않을 수 있습니다,,)
*/
