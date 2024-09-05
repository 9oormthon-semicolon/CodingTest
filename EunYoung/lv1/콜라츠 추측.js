function solution(num) {
  var answer = 0;
  for (let i = 0; i < 500; i++) {
    if (num !== 1) {
      num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    } else {
      return (answer = i); //주어진 수가 1인 경우에는 0을
    }
  }

  return (answer = -1); //작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 반환
}

// 시간복잡도 O(1)
// 함수는 최대 500번만 반복
