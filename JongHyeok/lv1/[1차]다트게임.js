function solution(dartResult) {
    const score = [];
    const totalScore = [];
    let dartList = dartResult.split('');
    let count = 0;

    while (dartList.length > 0) {
        if (!isNaN(dartList[0])) { // 숫자가 아니면 true
            if (dartList[1] === '0') { // 10점이면 
                score.push(10); // 10점 추가
                dartList.splice(0, 2); // 1과 0 제거
            } else { // 아니면
                score.push(parseInt(dartList[0])); // 점수 추가
                dartList.shift(); // 첫 번째 점수 제거
            }
            count++;
        } else {
            switch (dartList[0]) {
                case 'S':
                    totalScore.push(score[score.length - 1]); // 1제곱
                    break;
                case 'D':
                    totalScore.push(Math.pow(score[score.length - 1], 2)); // 2제곱
                    break;
                case 'T':
                    totalScore.push(Math.pow(score[score.length - 1], 3)); // 3제곱
                    break;
                case '*': // 스타상
                    if (count >= 2) {
                        totalScore[totalScore.length - 2] *= 2; 
                        totalScore[totalScore.length - 1] *= 2;
                    } else { //처음에 나왔을 경우
                        totalScore[totalScore.length - 1] *= 2;
                    }
                    break;
                case '#': // 아차상
                    score[score.length - 1] *= -1; // 현재 점수 -
                    totalScore[totalScore.length - 1] *= -1; // 이전 점수 -
                    break;
            }
            dartList.shift(); // 보너스 영역이나 스타상 or 아차상 제거
        }
    }
    return totalScore.reduce((sum, current) => sum + current, 0);
}

/*
darkResult를 순회하며
앞에서부터 점수 또는 보너스 점수를 조건에 맞게 뺍니다.
while문이 darkResult를 순회하며 요소들을 순차적으로 처리하므로
시간 복잡도는 O(n)
*/