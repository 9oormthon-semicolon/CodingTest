// 문제 25 메뉴 리뉴얼
function combinations(arr, n){
    // 1개만 뽑을 때
    if(n === 1) return arr.map((v) => [v]);
    const result = [];
    
    arr.forEach((fixed, idx, arr) => {
        const rest = arr.slice(idx + 1);
        const combs = combinations(rest, n - 1);
        const combine = combs.map((v) => [fixed, ...v]);   
        result.push(...combine);
    });
    return result;
}
function solution(orders, course) {
    const answer = [];
    // 각 코스 요리 길이
    for (const c of course) {
        const menu = [];
        // 모든 주문에 대해
        for (const order of orders) {
            // 주문을 배열로 만들고 정렬
            const orderArr = order.split("").sort();
            // 모든 조합
            const comb = combinations(orderArr, c);
            menu.push(...comb);
        }
        const counter = {};
        for (const m of menu) {
            const key = m.join('');
            counter[key] = (counter[key] || 0) + 1;
        }
        const max = Math.max(...Object.values(counter));
        if(max > 1) {
            for(const [key, value] of Object.entries(counter)){
                if(value === max) answer.push(key);
            }
        }
    }
    return answer.sort();
}


const orders = ["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"];
const course = [2,3,4];

console.log(solution(orders, course));

/*
권장 시간 복잡도 O(N*2^M)
---
*/
