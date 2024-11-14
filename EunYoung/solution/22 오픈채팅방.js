function solution(record) {
  var answer = [];
  const uid = {};

  for (let line in record) {
    // 1. record의 각 줄을 하나씩 처리
    const cmd = record[line].split(" ");
    // console.log(cmd)
    if (cmd[0] !== "leave") {
      // 2. Enter 또는 Change인 경우
      uid[cmd[1]] = cmd[2];
      // console.log(uid)
    }
  }

  for (let line in record) {
    // 3. record의 각 줄을 하나씩 처리
    const cmd = record[line].split(" ");
    // 4. 각 상태에 맞는 메시지를 answer에 저장
    if (cmd[0] === "Enter") {
      answer.push(`${uid[cmd[1]]}님이 들어왔습니다.`);
      // console.log(answer)
    } else if (cmd[0] === "Leave") {
      answer.push(`${uid[cmd[1]]}님이 나갔습니다.`);
    }
  }
  return answer;
}

// console.solution([
//   [
//     "Enter uid1234 Muzi",
//     "Enter uid4567 Prodo",
//     "Leave uid1234",
//     "Enter uid1234 Prodo",
//     "Change uid4567 Ryan",
//   ],
// ]);

// ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
