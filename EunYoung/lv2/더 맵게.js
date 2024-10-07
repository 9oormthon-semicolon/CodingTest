// 효율성 테스트....안넘어감......

// function solution(scoville, K) {
//     let count = 0;

//     scoville.sort((a,b) => a - b);

//     // 스코빌 값이 K인 스코빌 지수 이하일때까지 반복
//     while(scoville[0] < K){
//         if(scoville.length < 2){
//             return -1;
//         }
//         // 가장 맵지않은 값 빼오기
//         const first = scoville.shift();
//         // 두번째로 맵지않은 값 빼오기
//         const second = scoville.shift();
//         // 섞은 음식의 스코빌 지수
//         const newScoville = first + (second * 2);

//         // 섞은 음식 스코빌 지수 scoville 배열에 추가하기
//         scoville.push(newScoville)
//         // 다시 오름차순 정렬
//         scoville.sort((a,b) => a - b);

//         // 섞은 횟수
//         count++;
//     }
//     return count;
// }

// 힙구현해서 효율성 테스트 통과 ^^....
// 다른사람 코드 참고
function solution(scoville, K) {
  // 최소 힙 구현
  const minHeap = [];

  // 힙에 원소 추가 함수
  function heapPush(value) {
    minHeap.push(value);
    let currentIndex = minHeap.length - 1;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (minHeap[parentIndex] <= minHeap[currentIndex]) break;
      [minHeap[parentIndex], minHeap[currentIndex]] = [
        minHeap[currentIndex],
        minHeap[parentIndex],
      ];
      currentIndex = parentIndex;
    }
  }

  // 힙에서 최소값 추출 함수
  function heapPop() {
    if (minHeap.length === 0) return null;
    if (minHeap.length === 1) return minHeap.pop();

    const minValue = minHeap[0];
    minHeap[0] = minHeap.pop();
    let currentIndex = 0;

    while (true) {
      const leftChild = 2 * currentIndex + 1;
      const rightChild = 2 * currentIndex + 2;
      let smallestChild = currentIndex;

      if (
        leftChild < minHeap.length &&
        minHeap[leftChild] < minHeap[smallestChild]
      ) {
        smallestChild = leftChild;
      }
      if (
        rightChild < minHeap.length &&
        minHeap[rightChild] < minHeap[smallestChild]
      ) {
        smallestChild = rightChild;
      }

      if (smallestChild === currentIndex) break;

      [minHeap[currentIndex], minHeap[smallestChild]] = [
        minHeap[smallestChild],
        minHeap[currentIndex],
      ];
      currentIndex = smallestChild;
    }

    return minValue;
  }

  // 모든 스코빌 지수를 힙에 추가
  for (const s of scoville) {
    heapPush(s);
  }

  let mixCount = 0;

  while (minHeap.length >= 2 && minHeap[0] < K) {
    const first = heapPop();
    const second = heapPop();
    const newScoville = first + second * 2;
    heapPush(newScoville);
    mixCount++;
  }

  return minHeap[0] >= K ? mixCount : -1;
}
