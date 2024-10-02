function solution(num) {
  // start = 1 시작 인덱스  
  // cnt +1 주는 이유 15 = 15인 경우
  let start = 1, cnt = 1
  
  //start가 num 이하일 때까지
  while (start < num) {
      let acc = 0
      
      for (let i = start; i < num; i++) {
          acc += i
          //누적합이 num보다 크면 반복문 브레이크
          if(acc > num) break
          //누적합이 num과 같으면 카운팅
          else if(acc === num) {
              cnt++
              break
          }
      }
      //반복될 때마다 시작지점이 ++
      start++
      
  }
    
  return cnt
}

/*
   순서대로 나열된 숫자를 더 했을 때의 합이 num과 같은 수를 세면 되는 문제
   문제는 쉬운데 구현이 어렵; 카카오랑 반대

   시작지점을 바꿔서 모든 순서의 합을 구하는 반복문으로 구현했다가 시간초과 났습니다.

   +조건문 추가
   누적합이 num보다 작으면 반복문을 끝내는 방식으로 효율성을 늘렸습니다. 
   ex) 2 + 3 + 4 + 5 + 6 < num = false
   
   누적합이 num과 같다면 카운팅하고 반복문을 끝냄 1 + 2 + 3 + 4 + 5 === num = true

   시간 복잡도는 num반큼 반복을 두번하기 때문에 O(n ^ 2) 같습니다
*/

