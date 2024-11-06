function solution(k, tangerine) {
    let answer = 0, counter = new Map(); // 귤 크기 빈도를 저장할 맵 
    tangerine.map((t) => counter[t] = (counter[t] || 0) + 1); // 시간복잡도 O(귤)
    // 이미 있으면 해당 값에 + 1 없으면 0 초기화
    let sortedEntries = Object.entries(counter).sort((a, b) => b[1] - a[1]); // 시간복잡도 O(귤 크기 종류)
    // 많이 등장한 귤 크기로 정렬
    for (let [_, value] of sortedEntries) {
        k -= value; // 필요한 만큼 뺌
        answer += 1; // 정답은 + 1
        if (k <= 0) break;
    }
    return answer;
}

const k = 6;
const tangerine = [1, 3, 2, 5, 4, 5, 2, 3];
console.log(solution(k, tangerine));

/*
귤의 개수가 N, 귤을 분류한 크기의 종류가 M이라면
시간복잡도는 O(N + MlogM)
*/