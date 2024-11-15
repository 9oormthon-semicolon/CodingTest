function solution(topping) {
    const leftSet = new Set(); // 왼쪽 조각의 서로 다른 토핑을 저장할 Set
    const rightCounter = new Map(); // 오른쪽 조각의 각 토핑 수를 저장할 Map
    let fairSplitCount = 0;

    // 초기 오른쪽 조각의 각 토핑 수를 Map에 저장
    topping.forEach((top) => {
        rightCounter.set(top, (rightCounter.get(top) || 0) + 1); // 토핑 수를 증가
    });

    // 각 토핑에 대해 왼쪽 조각과 오른쪽 조각을 업데이트하며 공평한 나눔을 확인
    for (let i = 0; i < topping.length; i++) {
        const top = topping[i];
        
        leftSet.add(top); // 현재 토핑을 왼쪽 조각에 추가
        
        // 오른쪽 조각에서 현재 토핑의 개수를 1 줄임
        rightCounter.set(top, rightCounter.get(top) - 1);
        if (rightCounter.get(top) === 0) { // 만약 개수가 0이 되면 Map에서 제거
            rightCounter.delete(top);
        }

        // 왼쪽과 오른쪽 조각의 서로 다른 토핑 수가 같으면 공평한 나눔으로 간주
        if (leftSet.size === rightCounter.size) {
            fairSplitCount++;
        }
    }

    return fairSplitCount; 
}


// 시간복잡도: O(n)