function solution(picks, minerals) {
    const cost = { // 곡괭이별 피로도
        dia: [1, 5, 25],
        iron: [1, 1, 5],
        stone: [1, 1, 1]
    };
    // 채굴 가능한 광물 수 계산
    const maxMine = picks.reduce((sum, pick) => sum + pick * 5, 0);
    const mined = minerals.slice(0, maxMine);

    // 광물을 5개씩 나눔
    const dividedMin = [];
    // 시간복잡도 O(N)
    for (let i = 0; i < mined.length; i += 5) {
        dividedMin.push(mined.slice(i, i + 5));
    }

    // 나눈 광물들 중요도 계산 O(N)
    const groupScores = dividedMin.map(group => {
        let score = 0;
        group.forEach(mineral => {
            if (mineral === 'diamond') score += 25;
            else if (mineral === 'iron') score += 5;
            else score++;
        });
        return { score, group };
    });

    // 중요도 순으로 정렬 시간복잡도 O(NlogN)
    groupScores.sort((a, b) => b.score - a.score);

    // 최소 피로도 계산
    let totalFatigue = 0;
    for (const { group } of groupScores) {
        let pick = -1; // 곡괭이
        if (picks[0] > 0) { 
            pick = 0; // 다이아
            picks[0]--;
        } else if (picks[1] > 0) { 
            pick = 1; // 철
            picks[1]--;
        } else if (picks[2] > 0) { 
            pick = 2; // 돌
            picks[2]--;
        } else break;

        for (const mineral of group) {
            totalFatigue += cost[mineral][pick];
        }
    }

    return totalFatigue; // 최종 피로도 반환
}

const picks = [1, 3, 2];
["diamond", "diamond", "diamond", "iron", "iron", "diamond", "iron", "stone"];

console.log(solution(picks, minerals));
/*
시간복잡도 O(NlogN)
*/