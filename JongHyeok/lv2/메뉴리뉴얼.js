function getCombinations(arr, selectNumber) { // 모든 조합 구하기 / 시간복잡도 2^n (n은 2이상 10이하)
    const combi = [];
    if (selectNumber === 1) return arr.map((val) => [val]);
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1); // 고정된 원소 뒤의 모든 요소
        const combinations = getCombinations(rest, selectNumber - 1); // 재귀로 함수 호출
        const attached = combinations.map((el) => [fixed, ...el]); // 고정된 요소 뒤 모든 조합 붙이기
        combi.push(...attached); // 조합에 추가
    });
    return combi;
}

function solution(orders, course) {
    const answer = [];
    
    for (const courseLen of course) { // 코스 길이 (1이상 10이하)
        const courseMap = new Map(); // 조합과 그 조합이 나온 횟수 Map
        
        for (const order of orders) { // 각 손님들의 주문 (2 이상 20이하)
            const sortedOrder = order.split('').sort().join('');
            const combis = getCombinations(sortedOrder.split(''), courseLen); // 조합 구하기
            
            for (const combi of combis) {
                const courseMapKey = combi.join(''); // courseMap 키 설정
                courseMap.set(courseMapKey, (courseMap.get(courseMapKey) || 0) + 1); // 키에 맞는 value + 1
            }
        }
        
        if (courseMap.size > 0) {
            const maxCount = Math.max(...courseMap.values());
            if (maxCount >= 2) { // 최소 2명이상
                for (const [course, count] of courseMap) {
                    if (count === maxCount) { // 가장 많이 시킨 조합이면
                        answer.push(course);
                    }
                }
            }
        }
    }
    
    return answer.sort();
}

const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2, 3, 4];
console.log(solution(orders, course));

/*
조합을 구하는 과정에서 O(2^n)의 시간복잡도를 갖기 때문에
전체 시간복잡도도 O(2^n)
(구현이고 조합은 무조건 구해야 하는 문제라 시간복잡도는 의미가 없는 것 같아요...)
*/