function solution(word) {
    let cnt = 0
    let dictionary = {}
    const s = ['A', 'E', 'I', 'O', 'U'];
    
    (function addChar(char) {
        //리밋
        if(char.length > 5) return
        //사전저장
        dictionary[char] = cnt++
    
        for (let i = 0; i < 5; i++) {
            addChar(char + s[i])
        }
        
    })("")
    
    return dictionary[word]
    
}

/*
    문제에 완탐이라고 써있어서 그냥 사전 만들어 해를 구했습니다.
    고민이 됐던 부분은 일반적인 사전 순이 아니라 이상하게
    "A", "AA", "AAA", "AAAA", "AAAAA", "AAAAE", "AAAAI", "AAAAO", "AAAAU" 
    깊게 들어가서 끝에서부터 올라오면서 원소를 순서대로 바꿔가야하기 때문에 dfs를 이용하여 구현하였습니다.
    
    O(5^5)
*/