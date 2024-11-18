// dfs 이용
function solution(word) {
    const wordList = []
    const mouem = "AEIOU"

    // DFS
    function dfs(count, w) {
        // 글자 수가 5 이상이면 종료
        if (count === 5) return

        for (let i = 0; i < mouem.length; i++) {
            // 현재 단어 조합을 리스트에 추가
            wordList.push(w + mouem[i])
            // 다음 글자를 추가하며 DFS 진행
            dfs(count + 1, w + mouem[i])
        }
    }

    // DFS 초기화
    dfs(0, "")

    // word의 인덱스를 찾아 반환 
    return wordList.indexOf(word) + 1
}

/* 시간복잡도 
 - function dfs(count, w) : O(5^1 + 5^2 + 5^3 + 5^4 + 5^5) : O(5^5)
 
 - wordList.indexOf(word) + 1 : O(n)

 => 전체 시간 복잡도 : O(n)
*/