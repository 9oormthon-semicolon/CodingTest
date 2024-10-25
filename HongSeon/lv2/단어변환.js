// BFS이용
function solution(begin, target, words) {
    const wordChange = new Map()
    // 시작 단어와 단계 저장
    wordChange.set(begin, 0)
    // BFS 탐색을 위한 초기 큐 저장
    let queue = [begin]
    
    // target이 없다면 0 리턴 후 종료
    if(!words.includes(target)) return 0
    
    while(queue){
        // 큐의 첫 번째 원소 가져옴
        let now = queue.shift()
        // words배열 순회
        for(let word of words){
            let count = 0
            // 순서대로 글자 비교 후 다른 글자가 있다면 count 증가
            for(let i = 0; i < now.length; i++){
                if(now[i] !== word[i]) count++
            }
            
            // 한 번에 1개만 바꿀 수 있으므로 count가 1일 때만 가능하고
            // 이미 있는 단어가 아닐 때만 가능
            if(count === 1 && !wordChange.has(word)){
                // 단어와 변환 단계 저장
                wordChange.set(word, wordChange.get(now) + 1)
                // 큐에 추가
                queue.push(word)
            }
        }
        // wordChange에 target이 존재하면 변화한 단계 리턴 
        if(wordChange.has(target)) return wordChange.get(target)
    }
    
}

/* 시간 복잡도 
 - while (queue) [최악의 경우 모든 단어를 한 번씩 방문] : O(n)
    - for(let word of words) [words 순회] : O(n)
    - for (let i = 0; i < now.length; i++) [word의 길이만큼 반복] : O(m)
 
 => 전체 시간 복잡도 : O(n^2 * m)
*/