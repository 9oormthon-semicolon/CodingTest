function solution(num_list) {
    // 리스트를 오름차순으로 정렬
    num_list.sort((a, b) => a - b);
    
    // 가장 작은 5개의 수를 제외한 나머지 요소들만 선택
    /* 정렬된 리스트에서 가장 작은 5개의 요소(0~4까지)를
      제외하고 나머지 요소들만 새로운 배열로 가져옴 */
    const result = num_list.slice(5);
    
    return result;
}

console.log(solution([12, 4, 15, 46, 38, 1, 14, 56, 32, 10])); // [15, 32, 38, 46, 56]

/*
  function solution(num_list) {
  	return num_list.sort((a, b) => a - b).splice(5);
  }
*/
