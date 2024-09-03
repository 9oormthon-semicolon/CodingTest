function solution(N, stages) {
  let fail = []; // 실패율을 저장할 배열
  let user = stages.length; // 총 스테이지 수 (사용자 수)

  // 1부터 N까지 반복
  for (let i = 1; i <= N; i++) {
    // 현재 스테이지 i에 도달한 사용자 수
    let num = stages.filter((v) => v === i).length;
    // 실패율을 계산하여 배열에 추가
    fail.push([i, num / user]);
    // 다음 스테이지를 계산하기 위해 현재 스테이지를 통과한 사용자 수를 제외
    user = user - num;
  }

  // 실패율 기준으로 내림차순 정렬
  const answer = fail.sort((a, b) => b[1] - a[1]);
  // 정렬된 결과에서 스테이지 번호만 추출하여 반환
  return answer.map((v) => v[0]);
}

// 시간복잡도
// 첫 번째 반복문에서 filter를 호출하는 부분 O(N * M)
// 정렬 부분 O(N log N)
// 전체 시간 복잡도 -> O(N * M + N log N)
