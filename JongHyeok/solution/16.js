// 문제 16 기능 개발
function solution(progresses, speeds) {
    const answer = [];
    const n = progresses.length;
    // 배포 가능일 계산
    const daysLeft = progresses.map((progress, idx) => Math.ceil((100 - progress) / speeds[index]));

    let count = 0, maxDay = daysLeft[0];

    for (let i = 0; i < n; i++) {
        if(daysLeft[i] > maxDay) count++;
        // 배포 가능일이 가장 늦은 배포일보다 빠르면
        else { // 느리면
            answer.push(count);
            count = 1;
            maxDay = daysLeft[i];
        }
    }
    answer.push(count); // 마지막 작업들 배포
    return answer;
}

const progresses = [93,30,55], speeds = [1,30,5];
console.log(solution(progresses, speeds));

/*
권장 시간 복잡도 O(N)
---
*/

/*
function solution(progresses, speeds) {
    var answer = [];
    let timeArr = []; // 각 기능을 완료하기 위해 필요한 시간
    for(let i = 0; i < progresses.length; i++) { // 필요한 시간 계산
        timeArr.push(Math.ceil((100-progresses[i]) / speeds[i]));
    }
    let first = timeArr[0], count = 1;
    
    for(let i = 1; i < timeArr.length; i++) {
        if (timeArr[i] <= first) count++; // 기준이 되는 기능의 필요 시간보다 작은 경우, 배포할 기능 개수 추가
        else {
            answer.push(count); // 쌓인 기능들의 개수 정답 배열에 추가
            first = timeArr[i], count = 1; //기준 시간, 기능 개수 갱신
        }
    }
    answer.push(count); // 남아있는 기능 개수 추가
    return answer;
}
*/