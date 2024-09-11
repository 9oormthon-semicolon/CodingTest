function solution(dartResult) {
    // 점수들을 저장할 배열
    let scores = [];
    
    // 입력 문자열을 파싱하기 위한 정규 표현식
    let regex = /(\d+)([SDT])([*#]?)/g;
    let matches;
    
    // 정규 표현식으로 입력 문자열에서 점수, 보너스, 옵션 추출
    while (matches = regex.exec(dartResult)) {
        let score = parseInt(matches[1]);  // 점수
        let bonus = matches[2];  // 보너스 S, D, T
        let option = matches[3];  // 옵션 * 또는 #

        // 보너스에 따른 점수 계산
        if (bonus === 'S') {
            score = Math.pow(score, 1);
        } else if (bonus === 'D') {
            score = Math.pow(score, 2);
        } else if (bonus === 'T') {
            score = Math.pow(score, 3);
        }

        // 옵션 적용
        if (option === '*') {
            // 스타상: 현재 점수와 이전 점수를 2배로
            score *= 2;
            if (scores.length > 0) {
                scores[scores.length - 1] *= 2;
            }
        } else if (option === '#') {
            // 아차상: 현재 점수를 음수로
            score *= -1;
        }

        // 계산된 점수를 배열에 추가
        scores.push(score);
    }
    
    // 점수 합계 계산
    return scores.reduce((acc, curr) => acc + curr, 0);
}

// 예시 실행
solution("1S2D*3T");  // 결과는 37
solution("1D2S#10S"); // 결과는 9
