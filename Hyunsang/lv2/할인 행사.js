const solution = (want, number, discount) => {
    let result = 0;

    // discount 배열에서 10일 단위로 확인
    for (let i = 0; i < discount.length - 9; i++) {
        const arr = [...number]; 
        let count = 0; 

        // 현재 10일 동안의 할인된 제품 확인
        for (let j = i; j < i + 10; j++) {
            const index = want.indexOf(discount[j]); // 현재 제품이 want 배열에 있는지 확인
            if (index !== -1) { // 원하는 제품이라면
                arr[index] -= 1; // 해당 제품의 수량 감소
            }

            if (arr[index] === 0) { // 해당 제품의 수량을 모두 충족한 경우
                count++;
            }
        }

        // 모든 제품의 수량을 충족했는지 확인
        if (count === want.length) {
            result++; // 조건을 만족하는 날짜 증가
        }
    }

    return result; 
};

// discount 배열 반복 : O(D)
// 내부 10일 확인 루프 : O(10 * W) - w는 want.length값
// 시간복잡도 : O(D * w));
