function solution(bridge_length, limit, trucks) {
  // Array<{weight:number,limitTime:number}>
  const stack = [] 
  let curTime = 0
  let pointer = 0
  let acc = 0
  
  while (pointer < trucks.length || stack.length > 0) {
      curTime++
      
      //스택에 있는 첫번째 트럭의 제한시간이 현재시간과 같거나 작을 때 
      //SHIFT, 누적값 제외
      if(stack[0] && stack[0].limitTime <= curTime) acc -= stack.shift().curWeight
          
      //다음 트럭과의 무게 합이 제한무게와 같거나 작을 때
      //stack에 PUSH, 누적값 추가, 포인터++
      if (acc + trucks[pointer] <= limit) {
          stack.push({curWeight: trucks[pointer], limitTime: curTime + bridge_length})
          acc += trucks[pointer]
          pointer++
      }
  }
  
  return curTime
}

/*
  제한 조건
  bridge_length는 1 이상 10,000 이하입니다.
  weight는 1 이상 10,000 이하입니다.
  truck_weights의 길이는 1 이상 10,000 이하입니다.
  모든 트럭의 무게는 1 이상 weight 이하입니다.

  # 최대 bridge_length대 올라갈 수 있음
  # 다리에 올라간 트럭의 무개 합이 weight 이하여야함
  # 다리에 완전히 오르지 않은 트럭 무게는 무시함

  문제 이해가 안됨;

  bridege_length만큼의 시간이 지나면 트럭이 나갈 수 있나봅니다.
  첫 예제에서 다리에 들어가고 2초 지나니까 트럭이 다리에서 나갑니다.
  와중에 무게합이 weight를 못넘으면 다리에 못올라옵니다.

  최대 bridge_length대 올라갈 수 있음이라는 조건이
  bridge_length초가 지나면 하나의 트럭이 빠진다는 조건을 꼬아서 낸거 같습니다
  예제로 대충 구조 이해해서 풀었는데 글로만 이해하기 어려운 문제 같습니다.
  
  시간복잡도는 진짜 잘 모르겠어서 GPT 맡기니까 O(n)이라는데
  
  다리르 다 따로건너면 시간이 
  truck_weights.length * bridge_length이기 때문에
  O(m * n) 같기도 하네요
*/
