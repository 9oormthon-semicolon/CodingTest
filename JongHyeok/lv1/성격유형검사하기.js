function solution(survey, choices) {
    var answer = ''
    let personalityScores = { // key와 value를 가지고 있는 dictionary 형태
        'RT': 0,
        'CF': 0,
        'JM': 0,
        'AN': 0
    };

    function surveyToScore(surveyElement, answer){
        let key = surveyElement;
        if (!personalityScores.hasOwnProperty(key)) {
            key = surveyElement[1] + surveyElement[0]; // key 반대로
            answer = -answer; // 점수를 반대로
        }
        personalityScores[key] += answer; // 점수 추가
    }

    for (let i = 0; i < survey.length; i++) {
        console.log(choices[i], survey[i]);
        let score;
        switch (choices[i]) {
            case 1: score = 3; break;
            case 2: score = 2; break;
            case 3: score = 1; break;
            case 4: score = 0; break;
            case 5: score = -1; break;
            case 6: score = -2; break;
            case 7: score = -3; break;
        }
        surveyToScore(survey[i], score);
    }
    
    for (let type in personalityScores) {
        if (personalityScores[type] >= 0) { // 점수가 양수이거나 0일 때 앞자리 유형 ex) RT = 1일 때 R 유형
            answer += type[0];
        } else { // 음수일때 뒷자리 유형
            answer += type[1];
        }
    }
    return answer;
}

const survey = ["AN", "CF", "MJ", "RT", "NA"];
const choices = [5, 3, 2, 7, 5];
console.log(solution(survey, choices));

/*
시간복잡도는 survey의 길이 n이라고 가정했을 때 O(n)
*/
