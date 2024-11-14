function solution(topping) {
    let answer = 0;
    const leftSet = new Set();
    const rightMap = new Map();
    
    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1);
    }

    for (const t of topping) {
        leftSet.add(t);
        
        rightMap.set(t, rightMap.get(t) - 1);
        if (rightMap.get(t) === 0) {
            rightMap.delete(t);
        }
        
        if (leftSet.size === rightMap.size) {
            answer++;
        }
    }
    
    return answer;
}

/*
leftSet은 왼쪽 부분의 토핑 종류를 저장하는 Set
rightMap은 오른쪽 부분의 토핑 종류와 각 토핑의 개수를 저장하는 Map
먼저 모든 토핑을 rightMap에 추가
그 다음, 토핑 배열을 순회하면서 현재 토핑을 leftSet에 추가하고 rightMap에서 현재 토핑의 개수를 1 감소
만약 rightMap에서 현재 토핑의 개수가 0이 되면, 해당 토핑을 rightMap에서 제거하고 leftSet의 크기와 rightMap의 크기가 같아지면, 공평하게 나눌 수 있는 지점이므로 answer를 1 증가
최종적으로 answer 반환

시간 복잡도 - O(n)
*/
