function solution(dartResult) {
    let dartArr = dartResult.match(/\d{1,2}[SDT][*#]?/g); // 1~2자리 숫자, S/D/T, 옵션 * 또는 #
    let scores = [];

    for (let i = 0; i < dartArr.length; i++) {
        let curArr = dartArr[i];

        // 점수 추출 (1자리 또는 2자리 숫자)
        let curScore = parseInt(curArr.match(/\d+/)[0]); 
        
        // 보너스(S/D/T) 추출
        let curBonus = curArr.match(/[SDT]/)[0]; 
        
        // 옵션(* 또는 #, 없을 수도 있음)
        let curOption = curArr.length > 2 ? curArr[2] : null;

        // 보너스에 따른 점수 계산
        switch (curBonus) {
            case 'S':
                curScore = curScore ** 1; // Single, 1제곱
                break;
            case 'D':
                curScore = curScore ** 2; // Double, 2제곱
                break;
            case 'T':
                curScore = curScore ** 3; // Triple, 3제곱
                break;
        }

        // 옵션에 따른 계산
        if (curOption === '*') {
            curScore *= 2; // 스타상이면 현재 점수 2배
            if (i > 0) {
                scores[i - 1] *= 2; // 바로 이전 점수도 2배
            }
        } else if (curOption === '#') {
            curScore *= -1; // 아차상이면 점수는 마이너스
        }

        // 계산된 점수를 배열에 저장
        scores.push(curScore);
    }

    // 최종 점수 합산
    return scores.reduce((acc, cur) => acc + cur, 0);
}

/**
 * 시간복잡도:
 * 자열에서 3개의 다트 기회를 추출하는데 사용. 
 * 이 부분은 입력 문자열의 길이에 따라 탐색하므로, 시간 복잡도는 O(N). 
 * ( 여기서 N은 dartResult의 길이)
 * 
 * for 루프는 다트 기회의 수만큼 반복
 * 일반적으로 다트 게임은 3번의 기회가 있으므로 루프는 고정된 3번 반복
 *  따라서 루프 자체는 상수 시간 O(1)로 처리
 * 
 * reduce 함수는 scores 배열에 저장된 값(최대 3개의 점수)을 모두 더함. 
 * 이 배열의 크기는 항상 3 이하이므로, 이 부분도 O(1)
 * 
 * 이 함수의 전체 시간 복잡도는 O(N)
 */