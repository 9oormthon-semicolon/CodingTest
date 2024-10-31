function solution(progresses, speeds) {
    let days = []; 
    let answer = []; 

    // 각 작업(progresses[i])이 완료될 때까지 걸리는 일수를 계산
    for (let i = 0; i < progresses.length; i++) {
        let nowProgress = progresses[i]; // 현재 작업의 진행도
        let day = 0; 

        // 진행도가 100%가 될 때까지 반복하여 일수를 계산
        while (nowProgress < 100) {
            nowProgress += speeds[i]; 
            day++; 
        }
        days.push(day); // 작업 완료까지 걸린 일수를 배열에 추가
    }

    // 첫 번째 작업이 완료되는 날을 초기 최대 일수(maxDay)로 설정
    let maxDay = days[0]; 
    let count = 0; 

    // 각 작업의 완료 일수를 순회하며 배포 그룹 계산
    for (let day of days) {
        if (day <= maxDay) {
            // 현재 작업의 완료일이 이전 배포 기준일보다 작거나 같으면 함께 배포
            count++;
        } else {
            // 새로운 배포 기준이 설정되면 이전까지 카운트된 기능을 기록하고 초기화
            answer.push(count); 
            count = 1; // 새로운 배포 시작
            maxDay = day; // 새로운 기준 일수 설정
        }
    }

    answer.push(count); // 마지막 배포된 기능 수 추가

    return answer;
}

// 시간복잡도: O(n)