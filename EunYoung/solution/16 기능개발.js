function solution(progresses, speeds) {
  const answer = [];
  const n = progresses.length; // 3

  const daysLeft = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );

  // console.log(daysLeft); // 7 / 1 = 7, 70 / 30 = 3 , 45 / 5 = 9

  let count = 0;
  let maxDay = daysLeft[0];
  7;

  for (let i = 0; i < n; i++) {
    if (daysLeft[i] <= maxDay) {
      // 7 <= 7 true , 3 <= 7 true, 9 <= 7 false
      count++; // 1 -> 2
    } else {
      answer.push(count); // [2]
      count = 1; // 2 -> 1
      maxDay = daysLeft[i]; //9
    }
  }

  answer.push(count); // [2, 1]
  return answer;
}

console.log(solution([93, 30, 55], [1, 20, 5])); // [2, 1]
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
