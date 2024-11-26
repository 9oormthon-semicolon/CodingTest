function solution(picks, minerals) {
    const maxMinerals = picks.reduce((a, b) => a + b, 0) * 5;
    minerals = minerals.slice(0, maxMinerals);

    const groups = [];
    for (let i = 0; i < minerals.length; i += 5) {
        const group = minerals.slice(i, i + 5);
        const score = group.reduce((acc, mineral) => {
            if (mineral === 'diamond') return acc + 25;
            if (mineral === 'iron') return acc + 5;
            return acc + 1;
        }, 0);
        groups.push([group, score]);
    }

    groups.sort((a, b) => b[1] - a[1]);

    let fatigue = 0;
    for (const [group, _] of groups) {
        if (picks[0] > 0) {
            picks[0]--;
            fatigue += group.length;
        } else if (picks[1] > 0) {
            picks[1]--;
            fatigue += group.reduce((acc, mineral) => {
                if (mineral === 'diamond') return acc + 5;
                return acc + 1;
            }, 0);
        } else if (picks[2] > 0) {
            picks[2]--;
            fatigue += group.reduce((acc, mineral) => {
                if (mineral === 'diamond') return acc + 25;
                if (mineral === 'iron') return acc + 5;
                return acc + 1;
            }, 0);
        } else {
            break;
        }
    }

    return fatigue;
}

/*
picks.reduce((a, b) => a + b, 0) * 5를 통해 사용할 수 있는 모든 곡괭이로 캘 수 있는 최대 광물 수를 계산
minerals.slice(0, maxMinerals)를 사용하여 이 최대 수만큼의 광물을 고려

minerals 배열을 5개씩 묶어 groups 배열에 저장
각 그룹의 점수를 계산하여 groups에 [group, score] 형태로 저장 (다이아몬드: 25점, 철: 5점, 돌: 1점)

점수를 기준으로 내림차순 정렬하여 가치가 높은 그룹을 먼저 처리할 수 있도록 함
곡괭이 사용 및 피로도 계산으로 정렬된 그룹을 순회하면서 가능한 가장 좋은 곡괭이를 사용하여 피로도를 최소화함
각 곡괭이에 대한 피로도 계산으로 다이아몬든는 모든 광물 1, 철은 다이아몬드 5, 나머지는 1, 돌은 다이아몬드 25, 철 5, 돌 1의 피로도를 캠
결과로 누적된 피로도를 반환


시간복잡도 - O(n + g log g + g * k)
그룹화 및 점수 계산에서 O(n)으로 n은 최대 고려할 광물 수 (maxMinerals), 각 광물을 한 번씩 순회하면서 그룹화하고 점수를 계산
정렬에서 O(g log g)의 시간이 걸리며 여기서 g는 생성된 그룹의 수로 각 그룹의 점수를 기준으로 정렬
각 그룹에 대해 최대 5개의 광물을 순회하며 피로도를 계산하여 O(g * k)가 되고 k는 그룹당 광물 수가 됨

이번 문제는 많이 어렵네요.. 풀이과정 참고하여 문제를 풀었습니다ㅜㅠ
*/
