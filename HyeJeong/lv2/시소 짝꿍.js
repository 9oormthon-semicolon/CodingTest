function solution(weights) {
    let answer = 0;
    const countMap = new Map();

    weights.forEach(weight => {
        countMap.set(weight, (countMap.get(weight) || 0) + 1);
    });

    for (const [weight, count] of countMap) {

        answer += count * (count - 1) / 2;

        [3/2, 2, 4/3].forEach(ratio => {
            const pairWeight = weight * ratio;
            if (countMap.has(pairWeight)) {
                answer += count * countMap.get(pairWeight);
            }
        });
    }
    
    return answer;
}
/*
answer 변수를 0으로 초기화하고, countMap이라는 Map 객체를 생성
weights 배열을 순회하며 각 몸무게의 출현 횟수를 countMap에 저장
countMap의 각 항목(몸무게와 그 출현 횟수)에 대해 반복
1. 같은 무게의 짝꿍 수를 계산 count * (count - 1) / 2
이는 nC2 공식으로, 같은 무게를 가진 사람들 중 2명을 선택하는 조합의 수
2. 2:3, 2:4, 3:4 비율에 해당하는 짝꿍 찾기
[3/2, 2, 4/3] 배열의 각 비율에 대해 현재 몸무게에 비율을 곱하여 짝꿍의 몸무게를 계산
계산된 짝꿍의 몸무게가 countMap에 존재하면, 해당 짝꿍의 수를 answer에 더함
최종적으로 계산된 모든 짝꿍의 수(answer)를 반환

시간복잡도 - O(n) n은 weights 배열의 길이

어제 병결로 수업을 못들어서 오늘 올리게 되었습니다. 죄송합니다ㅜㅠ
*/
