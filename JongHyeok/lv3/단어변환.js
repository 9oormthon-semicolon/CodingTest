function validateCanChange(originalWord, changedWord) { // 시간복잡도 O(단어의 길이) 상수 취급
    let diffCount = 0;
    originalWord.split('').forEach((char, idx) => {char !== changedWord[idx] ? diffCount++ : null});
    return diffCount === 1 ? true : false;
}

function solution(begin, target, graph) {
    let visited = new Set(); // 방문한 노드
    let changeCount = 0; // 변환 횟수
    let queue = [begin]; // 이동할 수 있는 경로

    if(!graph.includes(target)) return changeCount; // 타겟 단어가 단어 배열에 없으면 0 반환

    while (queue.length > 0) { // 모든 노드들을 방문
        for (let i = 0; i < queue.length; i++) {
            const curNode = queue.shift();
            if (curNode === target) return changeCount; // 타겟 단어에 도달하면 변환 횟수 반환

            for (const nextNode of graph) { // 변환 가능한지 검사
                if (!visited.has(nextNode) && validateCanChange(curNode, nextNode)) { // 방문하지 않고 문자 차이가 1인 단어
                    visited.add(nextNode); // 방문
                    queue.push(nextNode); // 다음 경로에 추가
                }
            }
        }
        changeCount++;
    }
}



const begin = "hit";
const target = "cog";
const words = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(solution(begin, target, words));

/*
각 단어의 길이는 3 이상 10 이하이며
words 배열의 길이는 3 이상 50 이하로 단어의 길이보다 상대적으로 길기 때문에
words 배열의 길이가 시간복잡도를 결정합니다.

1개의 문자씩 바꿀 수 있기 때문에 BFS로 풀어보았습니다.
모든 노드들에 대해서 단어 변환 처리 가능한지 검사하며
경로로 들어갈 큐에는 최악의 경우 모든 노드들이 들어가기 때문에
전체 시간복잡도는 O(N^2)

얼마 전에 풀었던 문제와 비슷한 것 같네요.
*/