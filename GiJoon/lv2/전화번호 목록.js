function solution(phone_book) {
  phone_book.sort()
  
  for (let i = 0; i < phone_book.length - 1; i++) {
     if (new RegExp(`^${phone_book[i]}`).test(phone_book[i + 1])) return false
  }
  
  return true
}


/*
  한 번호가 다른 번호의 접두어인 경우가 있는지 확인해야합니다.

  본인 다음의 전화번호를 이중으로 전부 탐색하니까 효율성 테스트에서 시간초과나고 7 8 19 테스트 케이스에 걸립니다.
  
  function solution(phone_book) {
      const len = phone_book.length
      
      for (let i = 0; i < len; i++) {
          const cur = phone_book[i]  
          
          for(let j = i; j < len; j++) {
              const next = phone_book[j]

              if (cur.length > next.length) continue
                  
              if (new RegExp(`^${cur}`).test(next) && i != j) return false
              
              }
          }

      return true
  }  //틀림

  접근법을 바꿨습니다.
  오름차순으로 정렬해서 다음 스트링과 접두어를 비교하기로 변경

  왜 정렬했냐면 사전 순으로 정렬하면 앞부분이 같은 번호들이 연속해서 나타납니다. 
  정렬하면 바로 옆에 있는 값의 접두어와 쉽게 비교할 수 있습니다. 
  ex) ('119' (비교) '1195524421') -> ('1195524421' (비교) '97674223')
  ex) ('12' 비교 '123') ('123' 비교 '1235') 비교 ('1235' 비교 '567')....
  
  정렬 -> 반복문 -> 다음 스트링의 접두어 비교로 풀었습니다.
  
  test는 정규식 전용 비교 구문 
  ^(문자)는 시작이 해당 문자로 시작하는지 판별해주는 정규식
  
  sort = O(N)
  for = O(N)
  O(2N) = O(N)
*/

