function solution(n, lost, reserve) {
  let realLost = lost.filter((el) => !reserve.includes(el));
  let realReserve = reserve.filter((el) => !lost.includes(el));

  return (
    n -
    realLost.filter((lostEl) => {
      let abs = realReserve.find(
        (reserveEl) => Math.abs(lostEl - reserveEl) == 1
      );
      if (!abs) return true;
      realReserve = realReserve.filter((reserveEl) => reserveEl !== abs);
    }).length
  );
}

// 여벌 체육복을 가져온 학생이 도난을 당한 경우, lost와 reserve 둘 다 해당되지 않는다고 볼 수 있다.
// 따라서 실제 도난당한 학생들과 여벌 체육복 학생들을 구한다.
// 여벌 체육복을 가져온 학생 중 도난 당한 학생과의 체격차가 1인 학생
// 체격차가 1이 아닐 경우 그대로 realLost에 반환
// 체격차가 1인 학생은 한사람에게 빌려줄 수 있으므로 다음 realReserve에서 제외

// -------------------------------------------------------------

// * Math.abs -> 절대값 구하는것
// * find -> 조건을 만족하는 첫 번째 요소를 반환
// * filter -> 조건을 만족하는 모든 요소를 포함한 새로운 배열을 반환

// -------------------------------------------------------------

// 시간복잡도
// realLost 생성 -> O(m)
// realReserve 생성 -> O(k)
// realLost.filter(...) -> O(m * k) (각 lost 요소에 대해 find 호출)
// 전체 시간 복잡도 -> O(m * k)
