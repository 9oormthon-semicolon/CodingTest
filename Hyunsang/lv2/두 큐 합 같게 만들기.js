function solution(queue1, queue2) {
    let totalSum = 0; 
    let q1Sum = 0; // queue1의 합
    let q2Sum = 0; // queue2의 합
    const combinedQueue = [...queue1, ...queue2]; // 두 큐를 연결하여 처리
    
    queue1.forEach(num => q1Sum += num); // queue1의 합 계산
    queue2.forEach(num => q2Sum += num); // queue2의 합 계산
    totalSum = q1Sum + q2Sum;
    
    if (totalSum % 2 !== 0) return -1; // 전체 합이 홀수이면 두 큐의 합을 동일하게 만들 수 없음

    const target = totalSum / 2; // 각 큐가 가져야 할 목표 합
    let leftPointer = 0; // queue1의 시작 지점 (투 포인터 방식)
    let rightPointer = queue1.length; // queue2의 시작 지점 (투 포인터 방식)
    let currentSum = q1Sum; // 현재 queue1의 합
    let maxOperations = queue1.length * 3; // 최대 연산 횟수는 queue1과 queue2의 길이의 3배
    
    for (let count = 0; count < maxOperations; count++) {
        if (currentSum === target) return count; // 목표 합에 도달하면 연산 횟수 반환

        if (currentSum > target) {
            // queue1의 합이 크면 왼쪽에서 요소를 뺌 (queue1에서 빼서 queue2로 이동)
            currentSum -= combinedQueue[leftPointer++];
        } else {
            // queue1의 합이 작으면 queue2에서 요소를 추가함 (queue2에서 빼서 queue1로 이동)
            currentSum += combinedQueue[rightPointer++];
        }
    }

    return -1; // 연산을 다 해도 목표 합에 도달하지 못하면 -1 반환
}

// 큐의 길이를 n이라고 할 때, 큐에서 값을 이동시키는 작업은 투 포인터 방식으로 
// 한 번에 하나의 요소만 이동하므로 
// 최악의 경우 모든 요소를 3번씩 이동하게 됩니다. 따라서 시간 복잡도는 O(n)


// length * 3 인 이유가 확실히 잘 모르겠네요,,,,,