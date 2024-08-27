function solution(answers) {
  var answer = [];

  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // [first, second, third]
  let count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] === answers[i]) {
      count[0]++;
    }
    if (second[i % second.length] === answers[i]) {
      count[1]++;
    }
    if (third[i % third.length] === answers[i]) {
      count[2]++;
    }
  }
  // 가장 큰 값(많이 맞춘 정답)이 max에 저장됨
  let max = Math.max(...count);

  //for문으로 max값과 count[j]값을 비교하여 같으면 (가장 맣이 맞추면) answer에 넣어줌
  //여기서 수포자 번호가 1부터 시작하기 때문에 +1 해준다.
  for (let j = 0; j < count.length; j++) {
    if (max === count[j]) {
      answer.push(j + 1);
    }
  }

  return answer;
}

// 시간복잡도
// for (let i = 0; i < answers.length; i++) {
// -> answers 배열의 길이에 따라 반복됨. 시간 복잡도는 O(n)

// let max = Math.max(...count);
// -> count 배열의 크기는 3으로 고정. 시간 복잡도는 O(1)

// for (let j = 0; j < count.length; j++) {
// -> count 배열의 길이는 항상 3이므로, 이 부분의 시간 복잡도는 O(1)

// 전체 시간 복잡도는 O(n)
