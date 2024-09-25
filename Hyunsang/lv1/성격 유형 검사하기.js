function compareValue(type1, type2, personality) {
    // 각 성격 유형의 점수를 비교하여 더 높은 점수를 가진 유형 반환
    if (personality[type1] > personality[type2]) {
      return type1;
    } else if (personality[type1] < personality[type2]) {
      return type2;
    } else {
      // 점수가 같으면 알파벳 순으로 빠른 성격 유형 반환
      return type1 < type2 ? type1 : type2;
    }
  }
  
  function solution(survey, choices) {
    let result = '';
    let scores = [0, 3, 2, 1, 0, 1, 2, 3]; // 선택지에 따른 점수 배열
    
    // 성격 유형 초기화
    let personality = {
      'R': 0, 'T': 0,
      'C': 0, 'F': 0,
      'J': 0, 'M': 0,
      'A': 0, 'N': 0,
    };
  
    // 설문 조사와 선택지에 따른 점수 계산
    for (let i = 0; i < survey.length; i++) {
      let [first, second] = survey[i].split(''); // 두 성격 유형을 분리
      let choice = choices[i]; // 사용자의 선택
      
      // 선택지가 4보다 작을 때, 첫 번째 성격 유형에 점수 부여
      if (choice < 4) {
        personality[first] += scores[choice];
      }
      // 선택지가 4보다 클 때, 두 번째 성격 유형에 점수 부여
      else if (choice > 4) {
        personality[second] += scores[choice];
      }
    }
  
    // 각 지표별로 높은 점수를 가진 성격 유형을 선택
    result += compareValue('R', 'T', personality);
    result += compareValue('C', 'F', personality);
    result += compareValue('J', 'M', personality);
    result += compareValue('A', 'N', personality);
  
    return result; // 최종 성격 유형 반환
  }
  
/**
 * for 루프는 survey 배열과 choices 배열을 순회하며 각 질문에 대한 점수를 계산
 * 이 루프는 n개의 질문을 처리하므로, 시간 복잡도는 O(n)
 */