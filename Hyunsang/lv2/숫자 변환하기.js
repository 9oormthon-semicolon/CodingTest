function solution(x, y, n) {
    if (x === y) return 0;

    // 큐를 초기화하여 y에서 시작, [현재 값, 연산 횟수] 형식으로 저장
    let queue = [[y, 0]];

    // 방문한 노드를 저장할 Set, 초기값으로 y를 추가하여 중복 방문 방지
    const visited = new Set([y]);


    while (queue.length) {
        const [current, operations] = queue.shift();

        // 현재 값이 목표 x에 도달했을 때, 연산 횟수를 반환
        if (current === x) return operations;

        // 역방향으로 가능한 세 가지 연산을 수행하여 다음 값을 생성
        for (let next of [
            current - n,                          // n을 뺀 값
            current % 2 === 0 ? current / 2 : null, // 2의 배수이면 2로 나눈 값
            current % 3 === 0 ? current / 3 : null  // 3의 배수이면 3으로 나눈 값
        ]) {
            // next 값이 null이 아니고, x 이상이며, 방문하지 않았다면
            if (next !== null && next >= x && !visited.has(next)) {
                visited.add(next); 
                queue.push([next, operations + 1]); // 큐에 다음 값과 연산 횟수 추가
            }
        }
    }

    // 목표에 도달할 수 없으면 -1 반환
    return -1;
}

// x 기준으로 했을때는 계속 시간초과가 되서 반대로했는데 반대로는 되네요..?
// 시간복잡도 :  O(logy)
