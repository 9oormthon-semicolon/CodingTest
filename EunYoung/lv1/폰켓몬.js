function solution(nums) {
  var answer = 0;
  let cnt = nums.length / 2; // N/2를 한 값을 cnt에 대입

  // 중복 제거
  let arr = nums.filter((element, index) => {
    return nums.indexOf(element) === index;
  });
  // filter
  // element: 현재 처리 중인 요소.
  // index (선택적): 현재 요소의 인덱스.

  // indexOf
  // nums.indexOf(element)는 배열 nums에서 현재 요소 element가 처음으로 나타나는 인덱스를 반환합니다.
  // 만약 element가 배열에 여러 번 존재한다면, indexOf는 첫 번째로 나타나는 인덱스만 반환합니다.

  if (arr.length >= cnt) {
    answer = cnt;
  } else {
    answer = arr.length;
  }

  return answer;
}

// 시간복잡도
// nums.length / 2: O(1) 배열길이 계산하는것 : 상수시간
// filter : O(n) * O(n) = O(n^2) 중복을 제거하는 과정
// if else : 단순한 조건문으로 O(1)
// 총 시간 복잡도는 O(n^2)
