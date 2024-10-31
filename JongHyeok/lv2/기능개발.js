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

const progresses = [93,30,55], speeds = [1,30,5];
console.log(solution(progresses, speeds));

/*
기능들의 개수(progresses의 길이)가 n일 때,
각 기능을 완료하기 위한 시간을 구하는 과정 O(N)
배포할 수 있는 기능의 개수를 구하는 과정 O(N)
전체 시간복잡도는 O(N)
*/