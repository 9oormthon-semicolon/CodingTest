function solution(bridge_length, weight, truck_weights) {
    let bridge = Array(bridge_length).fill(0); // 다리의 길이만큼 큐 생성
    let time = 0;
    let totalWeightOnBridge = 0; // 현재 다리 위의 트럭들의 무게 합계

    while (truck_weights.length > 0 || totalWeightOnBridge > 0) {
        
        time++;

        // 다리에서 트럭이 나감
        let truckLeaving = bridge.shift();
        totalWeightOnBridge -= truckLeaving;

        // 다음 트럭이 다리에 올라갈 수 있는지 확인
        if (truck_weights.length > 0) {
            if (totalWeightOnBridge + truck_weights[0] <= weight) {
                let nextTruck = truck_weights.shift();
                bridge.push(nextTruck);
                totalWeightOnBridge += nextTruck;
            } else {
                // 다리 무게 초과 시 트럭을 추가하지 않고 빈 공간을 다리에 추가
                bridge.push(0);
            }
        }
    }

    return time;
}

/**
 * 일반 배열의 shift()는 O(n)의 
 * 시간 복잡도를 갖는 반면(첫 번째 요소를 제거하고 다른 모든 요소를 ​​아래로 이동하기 때문입니다)
 *  이동하려는 트럭(truck_weights)은 총 n에 불과하며 각 트럭을 한 번만 이동
 * 마찬가지로 bridge.shift()는 최대 n + bridge_length 번 수행되며 이는 트럭 수에 비례
 * 
 * 매초마다 truck_weights 배열에서 shift()를 수행하거나(트럭당 최대 n 번 발생)
 *  bridge 배열에서 shift()를 수행합니다( 이는 총 n + 브리지_length 번 발생합니다)
 * 둘 다 트럭 수에 비례하므로 O(n) 작업
 * 
 * 최종 시간복잡도: O(n)
 */