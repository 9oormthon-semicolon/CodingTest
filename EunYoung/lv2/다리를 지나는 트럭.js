function solution(bridge_length, weight, truck_weights) {
  let timeout = 0; // 경과 시간을 저장할 변수
  let curWeight = 0; // 현재 다리 위의 무게를 저장할 변수
  let bridge = Array(bridge_length).fill(0); // 다리를 표현할 배열 (길이만큼 0으로 초기화)

  // console.log(`초기 상태: 시간 ${timeout}, 다리 ${bridge}, 대기 트럭 ${truck_weights}`);
  // // 모든 트럭이 다리를 건널 때까지 반복
  while (truck_weights.length > 0 || curWeight > 0) {
    // 다리의 맨 앞 트럭 빼기
    curWeight -= bridge.shift();
    console.log(curWeight);

    if (curWeight + truck_weights[0] <= weight) {
      // 새 트럭이 다리에 올라갈 수 있는 경우
      let newTruck = truck_weights.shift();
      bridge.push(newTruck);

      curWeight += newTruck;
    } else {
      // 새 트럭이 다리에 올라갈 수 없는 경우
      bridge.push(0);
    }

    timeout++;
    // console.log(`시간 ${timeout}: 다리 ${bridge}, 현재 무게 ${curWeight}, 대기 트럭 ${truck_weights}`);
  }
  return timeout;
}

// 시간복잡도
// O(n * bridge_length)
// 여기서 n은 트럭의 수, bridge_length는 다리의 길이입니다.
