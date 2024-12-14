function solution(want, number, discount) {
    let answer = 0;
    const needs = {};
    
    want.forEach((item, index) => {
        needs[item] = number[index];
    });
    
    for (let i = 0; i <= discount.length - 10; i++) {
        const tenDays = discount.slice(i, i + 10);
        const currentNeeds = { ...needs };
        
        tenDays.forEach(item => {
            if (currentNeeds[item] > 0) {
                currentNeeds[item]--;
            }
        });
        
        if (Object.values(currentNeeds).every(v => v === 0)) {
            answer++;
        }
    }
    
    return answer;
}

/*
needs 객체를 생성하여 원하는 제품과 그 수량을 저장
할인 목록에서 10일 연속으로 할인하는 모든 경우를 확인
각 10일 기간 동안 원하는 제품 목록의 복사본 currentNeeds 만들기
할인되는 각 제품에 대해 해당 제품이 필요한 경우 수량을 감소시킴
모든 원하는 제품의 수량이 0이 되면 (모든 제품을 구매할 수 있으면) 정답 카운트를 증가시킴
최종적으로 가능한 경우의 수를 반환

시간복잡도 - O(n*m) n은 discount 배열의 길이, m은 want 배열의 길이
*/
