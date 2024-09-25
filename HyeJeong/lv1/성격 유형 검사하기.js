function solution(survey, choices) {
    //성격 유형을 정의하는 배열
    const types = ['R', 'T', 'C', 'F', 'J', 'M', 'A', 'N'];
    //객체 초기화
    const scores = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

    //각 설문 조사 항목에 대해 점수를 계산
    for (let i = 0; i < survey.length; i++) {
        //현재 설문 조사 항목에서 두 가지 유형을 추출
        const [type1, type2] = survey[i];
        //해당 설문 조사에 대한 응답 선택지를 가져옴
        const choice = choices[i];

        //선택지가 1, 2, 3일 경우 type1의 점수를 증가시킴
        if (choice < 4) {
            scores[type1] += (4 - choice); 
        } 
        //선택지가 5, 6, 7일 경우 type2의 점수를 증가시킴
        else if (choice > 4) {
            scores[type2] += (choice - 4); 
        }
    }

    let result = '';
    //각 성격 유형 쌍에 대해 점수를 비교하여 결과 결정
    for (let i = 0; i < types.length; i += 2) {
        const type1 = types[i];
        const type2 = types[i + 1];

        //각 쌍의 점수를 비교하여 더 높은 점수를 가진 유형을 결과에 추가
        if (scores[type1] >= scores[type2]) {
            result += type1; 
        } else {
            result += type2;
        }
    }
    return result;
}

//시간복잡도 - O(n)
//for문을 통해 점수 계산 - O(n)
//최종 성격 유형 결정하는 for문 - 성격 유형의 개수가 정해져 있기 때문에 상수시간 O(1)
