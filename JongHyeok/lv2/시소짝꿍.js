function solution(weights) {
    const weightCount = {};
    let answer = 0;
    // 각 무게가 나온 횟수 계산
    for (const weight of weights) {
        weightCount[weight] = (weightCount[weight] || 0) + 1;
    }

    for (const weight in weightCount) {
        const count = weightCount[weight];
        // 같은 무게 쌍
        answer += (count * (count - 1)) / 2;
        // 다른 비율의 무게 쌍 확인
        const ratios = [2, 3/2, 4/3]; // 두 무게의 비율
        for (const ratio of ratios) {
            const targetWeight = weight * ratio;
            if (weightCount[targetWeight]) answer += count * weightCount[targetWeight];
        }
    }
    return answer;
}

const weights = [100,180,360,100,270];
console.log(solution(weights));

/*
weights을 순회하며 무게가 나온 횟수를 세고 무게 쌍을 확인하기 때문에
시간복잡도 O(N)
*/