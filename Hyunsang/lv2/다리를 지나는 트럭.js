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
 * 시간복잡도 o(n) 인줄 알았는데,, shift()연산이 트럭 리스트와 
 * 다리리스트에서 발생하여서 각각 o(n) 시간복잡도를 가지기 때문에
 * while 문에서 트럭개수 n에 비례하여 o(n)번 실행,
 * 각 반복마다 shift() 가 배열의 첫번째 요소를 제거할 때마다 o(n)이 걸려서
 * 최종 시간복잡도:  0(n^2)
 */