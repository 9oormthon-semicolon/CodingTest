function solution(begin, target, words) {
    if ( !words.includes(target) ) return 0; // target이 words에 없으면 변환 x

    let queue = [[begin, 0]]; // [현재 단어, 변환 힛수]
    let visited = new Set(); // 방문한 단어들을 저장
    visited.add(begin);
    
    while(queue.length > 0) {
        let [currentWord, steps] = queue.shift();
        
        // target 단어에 도달하면 변환 횟수 반환
        if ( currentWord === target) return steps;
        
        words.forEach( word => {
            //한 글자만 다른 단어일 경우 다음 단계 이동
            if (!visited.has(word) && isCharDiff(currentWord, word)) {
                visited.add(word);
                queue.push([word, steps + 1]);
            }
        });
    }
    return 0;
}

// 현재 단어와 비교할 단어가 한글자 차이나는지 확인하는 함수
function isCharDiff(word1, word2) {
    let diffCnt = 0;
    for (let i = 0; i < word1.length; i++ ) {
        if ( word1[i] !== word2[i] ) diffCnt++;
        if (diffCnt > 1) return false;
    }
    return true;
}  

// BFS를 이용했습니다.
// 시간복잡도 : O(n * m)