function solution(n) {
    const result = []; // 결과 배열

    function hanoi(n, start, end, tmp) {
        // n 원판 개수 / start 시작 기둥 / end 목표 기둥 / tmp 거쳐가야 할 기둥
        if (n === 1) { // 1개라면 시작에서 목표 기둥으로 바로
            result.push([start, end]);
            return;
        }
        hanoi(n - 1, start, tmp, end); // 시작 기둥에서 tmp 기둥으로
        result.push([start, end]); // 기록
        hanoi(n - 1, tmp, end, start); // tmp 기둥에서 목표 기둥으로
    }

    hanoi(n, 1, 3, 2);

    return result;
}

const n = 2;
console.log(solution(n));

/*
재귀 함수 호출이기 때문에 시간복잡도 O(2^n)
*/