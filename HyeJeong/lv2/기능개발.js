function solution(progresses, speeds) {
    const answer = [];
    const days = progresses.map((progress, index) => 
        Math.ceil((100 - progress) / speeds[index])
    );
    
    let count = 1;
    let maxDay = days[0];
    
    for (let i = 1; i < days.length; i++) {
        if (days[i] <= maxDay) {
            count++;
        } else {
            answer.push(count);
            count = 1;
            maxDay = days[i];
        }
    }
    
    answer.push(count);
    return answer;
}

/*
days 배열에 각 기능의 완료에 필요한 일수를 계산하여 저장
maxDay를 첫 번째 기능의 완료 일수로 초기화
현재 기능의 완료 일수가 maxDay 이하면 count를 증가시킴. 그렇지 않으면 지금까지의 count를 answer에 추가하고, maxDay를 현재 기능의 완료 일수로 업데이트
마지막으로 남은 count를 answer에 추가하고 반환

시간복잡도 - O(n)
한 번의 순회로 문제를 해결하므로
*/
