// 문제 06 실패율
function solution(N, stages) {
    let answer = [];
    let ratio = {}; // 실패율을 저장하는 객체
    let challenger = stages.length;

    for (let i = 1; i <= N; i++) {
        if (challenger === 0) ratio[i] = 0;
        // 해당 스테이지를에 도전한 사람이 없으면 실패율은 0
        else {
            ratio[i] = stages.filter(stage => stage === i).length / challenger;
            // 해당 스테이지에서 클리어하지 못한 사람으로 실패율을 정합니다.
            challenger -= stages.filter(stage => stage === i).length;
        }   // 플레이어 수에서 클리어하지 못한 사람을 뺍니다.
    }

    answer = Object.keys(ratio).sort((a, b) => ratio[b] - ratio[a]);
    // 실패율 높은 스테이지부터 내림차순으로 정렬
    return answer;
}

const stages = [2,1,2,6,2,4,3,3];
const N = 5;
console.log(solution(N, stages));

/*
권장 시간 복잡도 O(M+NlogN)
---
객체를 정렬하기 위해선 먼저 배열로 변환해야 합니다.
이때 Object.entries 메서드를 사용하면 키와 값을 쌍으로 묶어서 배열로 만드는 것이 가능합니다.
Object.entries(ratio).sort()~~
*/