function solution(n, lost, reserve) {
    // 여분의 체육복이 있지만 도난당한 학생을 처리
    let realLost = lost.filter(l => !reserve.includes(l)); // O(k * n)
    let realReserve = reserve.filter(r => !lost.includes(r));

    // 체육복을 빌려줄 수 있는 경우를 처리
    realReserve.sort((a, b) => a - b);  // reserve를 정렬하여 순차적으로 처리
    for (let i = 0; i < realReserve.length; i++) {
        let lendIndex = realLost.indexOf(realReserve[i] - 1);
        if (lendIndex !== -1) {
            realLost.splice(lendIndex, 1);
        } else {
            lendIndex = realLost.indexOf(realReserve[i] + 1);
            if (lendIndex !== -1) {
                realLost.splice(lendIndex, 1);
            }
        }
    }

    // 체육복이 없는 학생 수를 n에서 빼서 체육 수업을 들을 수 있는 학생 수를 반환
    return n - realLost.length;
}
// k는 lost 배열의 길이, n은 reserve 배열의 길이
// 코드의 시간 복잡도는 O(k * n + nlogn)