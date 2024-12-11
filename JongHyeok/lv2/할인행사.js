function solution(want, number, discount) {
    const consecutiveDiscounts = []; // 연속된 10일 동안 할인되는 제품들의 배열
    let currentDiscount = 0;
    // 10일 단위로 자르기
    while (currentDiscount <= discount.length - 10) {
        consecutiveDiscounts.push(discount.slice(currentDiscount, currentDiscount + 10));
        currentDiscount++;
    }

    let result = 0;
    for (const discounts of consecutiveDiscounts) {
        // 조합이 조건을 만족하는지 & 제품의 수량을 임시로 저장
        let matched = true, tmpNum = number.slice();
        // 10일 동안 할인하는 조합에서 제품 순회
        for (let i = 0; i < 10; i++) {
            let found = false;
            // 할인 제품 포함되어 있는지 확인
            for (let j = 0; j < want.length; j++) {
                // 원하는 제품이고, 수량이 남아 있으면
                if (discounts[i] === want[j] && tmpNum[j] > 0) {
                    tmpNum[j]--;
                    found = true;
                    break;
                }
            }
            // 찾지 못했다면 종료
            if (!found) {
                matched = false;
                break;
            }
        }
        // 모두 만족했다면
        if (matched) result++;
    }
    return result;
}
const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
console.log(solution(want, number, discount));
/*
최악의 경우 모든 할인되는 제품들을 순회하기 때문에
시간복잡도는 O(N)
*/