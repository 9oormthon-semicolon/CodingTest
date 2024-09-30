function solution(bridge_length, weight, truck_weights) {
    let sec = 0;
    let bridge = Array(bridge_length).fill(0);
    let bridgeWeight = 0;

    while (truck_weights.length > 0 || bridgeWeight > 0) { // 트럭을 다 다리로 옮기고, 다리에 있는 트럭도 다 빠져나갈 때까지
        bridgeWeight -= bridge.shift(); // 다리에서 나가는 트럭 처리

        if (bridgeWeight + truck_weights[0] <= weight) { 
            //현재 다리 위의 트럭 무게와 대기열 맨 앞의 트럭의 무게의 합이 다리가 견딜 수 있는 무게보다 적으면
            let next = truck_weights.shift();
            bridge.push(next);
            bridgeWeight += next;
            // 트럭 올리기 & 다리 무게 추가
        } else { // 
            bridge.push(0); // 못 올림
        }
        sec++;
    }

    return sec;
}
const bridge_length = 2;
const weight = 10;
const truck_weights = [7,4,5,6];

console.log(solution(bridge_length, weight, truck_weights));
/*
다리에 트럭을 올려놓고 통과시키는 것이 큐의 동작과 유사해서 큐로 풀었습니다.
트럭의 개수 n에서 1씩 감소시키며 while 반복문을 순회하며 (시간복잡도 O(n))
반복문 순회하며 트럭의 개수 n만큼 대기열과 다리에서 1번씩 shift하기 때문에 (시간복잡도 O(2n))
전체 시간복잡도는 O(n^2)
*/