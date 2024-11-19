function solution(id_list, report, k) {
  // 신고한 사용자를 기록할 객체
  const reportedUser = {};
  // 각 사용자가 이메일을 몇 번 받을지 카운트할 객체
  const count = {};

  // 사용자 ID 목록을 순회하여 초기화
  for (const id of id_list) {
    reportedUser[id] = new Set(); // 중복 신고를 방지하기 위해 Set 사용
    count[id] = 0; // 각 사용자에 대한 신고 수 초기화
  }

  // 신고 내역을 순회하여 신고한 사용자와 신고받은 사용자 기록
  for (let r of report) {
    const [userId, reportedId] = r.split(" "); // 신고한 사용자와 신고받은 사용자 분리
    reportedUser[reportedId].add(userId); // 신고받은 사용자에 대해 신고한 사용자 추가
  }

  // 신고된 사용자를 순회하여 k번 이상 신고된 경우 처리
  for (const reportedId in reportedUser) {
    const reporters = reportedUser[reportedId]; // 해당 사용자를 신고한 사용자 집합
    if (reporters.size >= k) {
      // 만약 신고한 수가 k 이상이면
      for (const reporter of reporters) {
        count[reporter]++; // 해당 사용자를 신고한 모든 사용자에게 이메일 수 증가
      }
    }
  }

  const answer = []; // 최종 결과를 저장할 배열
  for (const id of id_list) {
    answer.push(count[id]); // 각 사용자에게 발송된 이메일 수를 배열에 추가
  }

  return answer; // 결과 배열 반환
}

// console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "muzi neo", "frodo neo"], 2));
// [2, 1, 1, 0]
