const getJoyStickMove = (char) => {
    return Math.min(char.charCodeAt(0) - "A".charCodeAt(0), "Z".charCodeAt(0) - char.charCodeAt(0) + 1);
} // A부터 가는 경우와 뒤로 Z를 거쳐서 가는 경우 중 짧은 것

function solution(name) {
    const len = name.length;
    let total = 0 , min = len - 1;

    name.split('').forEach((char) => total += getJoyStickMove(char));
    // 모든 문자에 대해서 최소 거리 계산 ▲▼ 이동
    
    for (let i = 0; i < len; i++) { // ◀▶ 이동 처리
        let nextIdx = i + 1;
        while (nextIdx < len && name[nextIdx] === "A") nextIdx++; // 연속된 A 처리
        min = Math.min(min, i * 2 + len - nextIdx, (len - nextIdx) * 2 + i);
        // 현재 문자까지 오는 왕복 거리 + 다음 문자 / 반대의 경우 중 더 작은 값
    }
    return total + min; // ▲▼ 이동 + ◀▶ 이동
}

const name = "JEROEN";
console.log(solution(name));

// 모든 문자에 대해 처리하기 때문에 시간 복잡도 O(N)