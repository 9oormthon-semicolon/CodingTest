function solution(dirs) {
  let point = [0, 0];
  const visit = new Set(); // 배열 대신 Set 사용

  for (let dir of dirs) {
    const curr = point.slice();
    if (dir === "U" && point[1] < 5) {
      point[1]++;
    } else if (dir === "D" && point[1] > -5) {
      point[1]--;
    } else if (dir === "R" && point[0] < 5) {
      point[0]++;
    } else if (dir === "L" && point[0] > -5) {
      point[0]--;
    } else {
      continue; // 경계를 벗어나는 이동은 무시
    }

    const location = `${curr[0]},${curr[1]},${point[0]},${point[1]}`;
    const reverseLocation = `${point[0]},${point[1]},${curr[0]},${curr[1]}`;

    visit.add(location);
    visit.add(reverseLocation);
  }

  return visit.size / 2; // Set의 크기를 2로 나눔
}

/**
 * 시간복잡도
 * for of 반복문 : dirs 문자열 길이만큼 실행 O(N) N은 dirs의 길이
 *
 * 전체 시간복잡도 : O(N)
 */
