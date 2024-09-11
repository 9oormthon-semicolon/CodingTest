function solution(price, money, count) {
  let answer = 0;
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  answer = totalPrice - money;

  return money > totalPrice ? 0 : answer;
}

// 시간복잡도
// count만큼 반복하는 for 루프. 선형 시간 O(n)이 소요
// 전체 알고리즘의 시간 복잡도는 O(n). 여기서 n은 입력값 count
