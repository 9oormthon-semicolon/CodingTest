function solution(bridge_length, weight, truck_weights) {
    let time = 0;
    let bridge = Array(bridge_length).fill(0);
    let curWeight = 0;
    
    while(truck_weights.length > 0 || curWeight > 0){
        time++;
        
        curWeight-=bridge.shift();
        
        if (truck_weights.length > 0) {
            if(curWeight + truck_weights[0] <= weight){
                const truck = truck_weights.shift();
                bridge.push(truck); 
                curWeight += truck; 
            }
            else
                bridge.push(0);
        }
    }
    return time;
}

/*
처음에 짠 코드가 단순하고 직관적이게 짰더니 효율성이 떨어져서 다시 코드를 짜느라 오래걸림(설명이 조금 부족한 것 같기도..)
원래는 bridge를 다리를 건너는 트럭 배열로 했었는데 현재 다리 위에 있는 트럭만 나타내는 배열로 바꾸고
전 코드에서는 무게 조건을 만족하면 bridge.push(truck)으로 트럭을 추가했는데 
여기서는 트럭과 진입 시간을 함께 기록 하는 방식으로 바꿈

시간복잡도 - O(bridge_length * n) 
n은 truck_weights
while문에서 모든 트럭이 다리를 건널 때 까지 실행되므로 bridge_length만큼 시간이 걸림
최악의 경우 각 트럭이 다리를 건너는데 bridge_length 시간이 걸리고, 이를 n개의 트럭에 대해 반복하기 때문에
결과적으로 전체 시간 복잡도는 O(bridge_length * n)
*/
