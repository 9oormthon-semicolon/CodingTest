function solution(num_list) {
    let eCount = 0;  // 짝수 카운트
    let oCount = 0;  // 홀수 카운트
    
    num_list.forEach(num => {
        if (num % 2 === 0) {  // 2로 나누어 떨어지면 즉, 짝수면 eCount 증가
            eCount ++;
        } else {  // 아니면(홀수이면) oCount 증가
            oCount++;
        }
    });
    
    return [eCount, oCount];
}

/*
  다른 사람의 문제풀이
  function solution(answer) {
    var answer = [0,0];

    for(let a of num_list) {
      answar[a % 2] += 1
    }

    return answer;
  }
*/
