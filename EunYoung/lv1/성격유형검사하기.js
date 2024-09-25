function solution(survey, choices) {
  let types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  const typeGroups = [
    ["R", "T"],
    ["C", "F"],
    ["J", "M"],
    ["A", "N"],
  ];
  function calc(choices) {
    // 선택에 따른 점수 반환
    switch (choices) {
      case 1:
        return 3;
      case 2:
        return 2;
      case 3:
        return 1;
      case 4:
        return 0;
      case 5:
        return -1;
      case 6:
        return -2;
      case 7:
        return -3;
      default:
        return 0;
    }
  }

  // survey와 choices 배열 순회하며 점수 계산
  for (let i = 0; i < survey.length; i++) {
    // 각 질문에 대한 점수 계산 및 types 객체 업데이트
    let score = calc(choices[i]);
    if (score > 0) {
      types[survey[i][0]] += score;
    } else {
      types[survey[i][1]] -= score;
    }
  }

  // 최종 성격 유형 결정
  let result = "";

  // 각 지표별로 더 높은 점수를 받은 유형 선택
  for (let [type1, type2] of typeGroups) {
    if (types[type1] >= types[type2]) {
      result += type1;
    } else {
      result += type2;
    }
  }

  return result;
}

// 시간복잡도

// 이 부분은 항상 4번 반복됩니다 (typeGroups의 길이가 고정되어 있으므로).
// 각 반복에서 수행되는 연산은 상수 시간 O(1)
// 따라서 시간 복잡도는 O(1)
