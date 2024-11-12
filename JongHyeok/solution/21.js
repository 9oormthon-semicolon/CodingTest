// 문제 21 할인 행사

function solution(want, number, discount) {
    const continuous = []; // 연속된 10일 동안 할인되는 제품들의 배열
    let curDiscount = 0;
    while (curDiscount <= discount.length - 10) { // 10일간 할인 목록 구하기
        continuous.push(discount.slice(curDiscount, curDiscount + 10));
        curDiscount++;
    }

    let result = 0;
    for (const discounts of continuous) {
        let matched = true , tmp = number.slice(); // 제품의 수량을 임시로 저장
        for (let i = 0; i < 10; i++) {
            let found = false;
            for (let j = 0; j < want.length; j++) {
                if (discounts[i] === want[j] && tmp[j] > 0) {
                    tmp[j]--; // 원하는 제품 하나 줄임
                    found = true;
                    break;
                }
            }
            if (!found) { // 원하는 제품이 아니거나, 다 샀으면
                matched = false;
                break;
            }
        }
        if (matched) result++;
    }

    return result;
}

const want = ["banana", "apple", "rice", "pork", "pot"];
const number = [3, 2, 2, 2, 1];
const discount = ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"];
console.log(solution(want, number, discount));

/*
권장 시간 복잡도 O(N)
---
*/