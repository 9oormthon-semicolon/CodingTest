function solution(s) {
  let cnt = 0
  let zero = 0

  while (s !== '1') {
      //x -> (0 개수 카운트 + 1만 필터링) -> length to binary
      s = [...s].filter(v => {
          if (v === '0') zero += 1
          return v === "1"
      }).join('').length.toString(2)
        
      cnt += 1
  }
  
  return [cnt,zero]
}

// x의 모든 0을 제거하고 0의 개수를 셉니다.
// 남은 x의 길이를 2진수로 만듭니다.
// x가 1이 될 때까지 반복합니다.

//정말로 시간복잡도를 모르겠어서 gpt검색했어용

//filter 작업 O(n) 걸리고
//이진수로 변환하는 작업은 최대 길이가 n일 수 있으므로 이 작업은 O(log n)의 시간을가진다네요
//O(n log n)
