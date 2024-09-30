function solution(bridge_length, weight, truck_weights) {
    const Len = truck_weights.length
    let pass = []
    let onBridge = Array(bridge_length).fill(0);
    let sum = 0
    let time = 0
    
    // 통과한 배열의 길이와 첫 배열의 길이가 같을 때 까지 반복
    while(pass.length !== Len){
        time++
        // 현재 다리 맨 앞의 트럭가져옴
        let now = onBridge.shift()
        // 현재 다리 무게 - 가져온 트럭 무게
        sum -= now
        
        // 가져온 트럭의 무게가 존재한다면 pass에 추가
        if(now > 0){
            pass.push(now)
        }
        
        // 새로운 트럭을 올릴 수 있는지 확인
        if(sum + truck_weights[0] <= weight){
            // 대기 트럭 맨 앞에서 가져옴
            let next = truck_weights.shift()
            // 다리 끝에 추가
            onBridge.push(next)
            // 현재 다리 무게 + 가져온 트럭 무게
            sum += next
        }
        // 새로운 트럭을 올리 수 없다면 0을 추가해서 빈 공간 확보
        else onBridge.push(0)
        
    }
    return time
}

/* 시간 복잡도
 - while (pass.length !== Len): 최대 (truck_weights.length + bridge_length)번 반복: O(n + m)
   - onBridge.shift(): 다리 상태 업데이트용: O(bridge_length)
   - truck_weights.shift(): 대기 트럭 업데이트용: O(n)
   
 => 전체 시간 복잡도: O((n + m) * m)
   - n: truck_weights.length
   - m: bridge_length
*/
