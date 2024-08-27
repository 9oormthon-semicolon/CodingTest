function solution(answers) {
    // 수포자들의 찍기 패턴을 배열로 정의
    const firstPattern = [1, 2, 3, 4, 5];       // 1번 수포자의 패턴
    const secondPattern = [2, 1, 2, 3, 2, 4, 2, 5]; // 2번 수포자의 패턴
    const thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // 3번 수포자의 패턴

    // 각 수포자가 맞춘 문제의 개수를 저장할 배열
    let scores = [0, 0, 0];

    // 모든 문제에 대해 반복
    for (let i = 0; i < answers.length; i++) {
        // i 번째 문제에 대해 각 수포자의 정답을 확인하고 맞췄는지 기록
        if (answers[i] === firstPattern[i % firstPattern.length]) {
            scores[0]++; // 1번 수포자의 점수 증가
        }
        if (answers[i] === secondPattern[i % secondPattern.length]) {
            scores[1]++; // 2번 수포자의 점수 증가
        }
        if (answers[i] === thirdPattern[i % thirdPattern.length]) {
            scores[2]++; // 3번 수포자의 점수 증가
        }
    }

    // 가장 높은 점수를 구함
    const maxScore = Math.max(scores[0], scores[1], scores[2]);

    // 가장 높은 점수를 받은 수포자 번호를 저장할 배열
    let result = [];

    // 각 수포자의 점수를 비교하여 최고 점수를 받은 수포자를 찾음
    for (let j = 0; j < scores.length; j++) {
        if (scores[j] === maxScore) {
            result.push(j + 1); // 수포자 번호는 1부터 시작하므로 j+1
        }
    }

    // 최고 점수를 받은 수포자들의 번호를 반환
    return result;
}

/*
시간 복잡도
	각 수포 자의 패턴은 고정 되어 있으며
	주어진 문제의 길이만큼 순차적으로 비교 함
	따라서 이 알고리즘의 시간 복잡도 ⇒ O(n)
	* 여기서 n은 주어진 문제의 개수
*/
