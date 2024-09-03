function solution(N, stages) {
    let answer = [];
    let ratio = {};
    let allPlayer = stages.length;

    for (let i = 1; i <= N; i++) {
        if (allPlayer === 0) { // 해당 스테이지를에 도전한 사람이 없으면 실패율은 0
            ratio[i] = 0;
        } else {
            ratio[i] = stages.filter(stage => stage === i).length / allPlayer;
            // 해당 스테이지에서 클리어하지 못한 사람으로 실패율을 정합니다.
            allPlayer -= stages.filter(stage => stage === i).length;
        }   // 플레이어 수에서 클리어하지 못한 사람을 뺍니다.
    }

    answer = Object.keys(ratio).sort((a, b) => ratio[b] - ratio[a]);
    // 실패율 높은 스테이지부터 내림차순으로 정렬
    return answer;
}
const N = 5;
const stages = [2,1,2,6,2,4,3,3];

console.log(solution(N, stages));


/*
실패율을 계산하는 과정은 for 반복문 안에 filter 함수가 있기 때문에 O(n^2)의 시간복잡도를 가진다.
ratio 객체의 길이는 최악의 경우 stages의 길이와 같은 길이를 가지므로
sort함수에서는 O(nlogN)의 시간복잡도를 가진다.
n^2 > nlogn 이기 때문에
따라서 이 함수의 시간복잡도는 O(n^2)이다.
*/