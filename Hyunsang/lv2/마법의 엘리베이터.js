function solution(storey) {
    let answer = 0; 
    
   
    while (storey > 0) {
      let remainNum = storey % 10; // 현재 자리의 숫자를 구함
      let nextNum = Math.floor(storey / 10) % 10; // 다음 자리의 숫자를 구함
  
      // remainNum이 5보다 크거나, remainNum이 5이면서 nextNum이 5 이상인 경우
      if (remainNum > 5 || (remainNum === 5 && nextNum >= 5)) {
        answer += 10 - remainNum; // 반올림하여 마법석 수를 줄임
        storey = Math.floor(storey / 10) + 1; // 반올림으로 인해 다음 자리 숫자에 1을 더함
      } else {
        answer += remainNum; // 반올림이 필요 없는 경우 해당 자리 숫자만큼 마법석을 추가
        storey = Math.floor(storey / 10); // 다음 자리로 이동
      }
    }
  
    return answer; 
}

// 시간 복잡도 : O(log(storey))