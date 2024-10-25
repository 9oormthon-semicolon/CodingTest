function solution(begin, target, words) {
    const visited = { [begin]: 0 };
    const queue = [begin];

    while (queue.length) {
        const current = queue.shift();
        
        if (current === target) break;
        
        for (const word of words) {
            if (isConnected(current, word) && !visited[word]) {
                visited[word] = visited[current] + 1;
                queue.push(word);
            }
        }
    }

    return visited[target] || 0;
}

function isConnected(str1, str2) {
    let diffCount = 0;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] !== str2[i]) diffCount++;
        if (diffCount > 1) return false;
    }
    return diffCount === 1;
}

/*
queue를 사용하여 BFS를 구현
visited 객체를 사용하여 각 단어의 방문 여부와 변환 단계를 기록
isConnected 함수를 통해 두 단어가 한 글자만 다른지 확인(단어 연결 확인)
변환하는 과정으로 현재 단어에서 변환 가능한 모든 단어를 큐에 추가하고, 변환 단계를 기록
target 단어에 도달했을 때의 변환 단계를 반환하거나, 변환이 불가능한 경우 0 반환 

시간 복잡도 - O(N * M)  N: 단어의 개수, M: 단어의 길이
최악의 경우, 모든 단어를 확인해야 함
*/
