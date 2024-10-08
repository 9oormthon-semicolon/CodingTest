function solution(orders, course) {
    let combination = {}; // 조합을 저장할 객체
    let result = [];

    // 메뉴 조합을 생성하는 재귀 함수
    const getCombinations = (arr, selectNum) => {
        let results = [];
        if (selectNum === 1) return arr.map(value => [value]);
        
        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1); // 선택한 이후의 배열
            const combinations = getCombinations(rest, selectNum - 1); // 재귀적으로 조합 생성
            const attached = combinations.map(combination => [fixed, ...combination]); // 선택한 요소와 조합 연결
            results.push(...attached);
        });
        return results;
    };    
    
     // 코스 길이별로 조합을 생성하고 빈도 계산
    for (let courseAmount of course) {
        orders.forEach(order => {
            let sortedOrder = order.split('').sort(); // 알파벳 순서대로 정렬
            let combis = getCombinations(sortedOrder, courseAmount); // 해당 길이의 조합 생성

            combis.forEach(combi => {
                 combination[combi.join('')] = (combination[combi.join('')] || 0) + 1;
            });
        });
    }

    // 가장 많이 주문된 조합을 결과에 추가
    course.forEach(courseAmount => {
        let max = 0;
        let temp = [];

        for (let combi in combination) {
            if (combi.length === courseAmount && combination[combi] > 1) { // 최소 2명 이상이 주문한 경우
                if (combination[combi] > max) {
                    max = combination[combi];
                    temp = [combi]; // 새로운 최대값이 있으면 초기화 후 저장
                } else if (combination[combi] === max) {
                    temp.push(combi); // 같은 최대값이면 추가
                }
            }
        }
        
        result.push(...temp);
    });

    return result.sort(); // 알파벳 순서대로 정렬하여 반환
}

// 시간복잡도:
// 주문에서 가능한 조합을 만드는 부분이 핵심이며, 이 부분의 시간 복잡도는 O(nCr)
// O(nCr) (각 주문에 대한 조합 생성 시간) × O(m) (주문 수, 즉 orders.length)