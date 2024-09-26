function solution(record) {
  const userInfo = {};
  const actions = [];
  const messages = {
    Enter: "님이 들어왔습니다.",
    Leave: "님이 나갔습니다.",
  };

  record.forEach((user) => {
    const [action, userId, nickname] = user.split(" ");
    if (action === "Enter") {
      userInfo[userId] = nickname;
      actions.push({ action: "Enter", userId });
    } else if (action === "Leave") {
      actions.push({ action: "Leave", userId });
    } else if (action === "Change") {
      userInfo[userId] = nickname;
    }
  });

  const result = actions.map(({ action, userId }) => {
    return `${userInfo[userId]}${messages[action]}`;
  });

  return result;
}

//시간복잡도
// 첫 번째 forEach 루프 -> 시간 복잡도: O(n), 여기서 n은 record 배열의 길이
// map 메서드 -> 시간 복잡도: O(n), actions 배열의 모든 요소를 순회

// 전체시간복잡도 -> O(n) + O(n) = O(n)
