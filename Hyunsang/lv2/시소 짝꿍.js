function solution(weights) {  
    let answer = 0;   
    
    const map = new Map();  
  
    // 각 무게의 빈도를 Map에 저장
    for (const weight of weights) {
      if (map.get(weight)) map.set(weight, map.get(weight) + 1); // 이미 존재하면 +1
      else map.set(weight, 1);  // 처음 등장하는 무게면 1로 초기화
    }
  
    // 균형을 이루기 위한 거리 비율 배열
    const ary = [2 / 3, 2 / 4, 3 / 2, 3 / 4, 4 / 2, 4 / 3, 1];
  
    // 각 무게에 대해 가능한 균형 쌍을 계산
    for (let i = 0; i < weights.length; i++) {
      const a = weights[i];
      for (const b of ary) {
        const num = map.get(a * b);  // 비율을 적용한 무게가 Map에 있는지 확인
        
        if (num) {  
          // 자기 자신과의 균형을 맞출 때는 중복 카운트를 방지
          if (a * b === a && num > 1) answer += num - 1;
          // 다른 무게와 균형을 맞출 때는 바로 추가
          else if (a * b !== a) answer += num;
        }
      }
    }
  
    return answer / 2;  // 쌍을 두 번 카운트  / 2
  }

  // 시간 복잡도: O(n)