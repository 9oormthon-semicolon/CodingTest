function solution(begin, target, words) {
    if(!words.includes(target)) return 0
    
    const visited = new Set()
    const q = [{str:begin, cnt:0}]
    //가독성 때문에 분리함
    const isPossible = (fst,sec,j,i) => fst === words[j].substring(0, i) && sec === words[j].substring(i + 1)

    while (q.length > 0) {
        const {str,cnt} = q.shift()
        visited.add(str)
        
        //문자 추출 비교
        for (let i = 0; i < str.length; i++) {
            //i 기준으로 문자열 쪼개기
            const fst = str.substring(0, i)
            const sec = str.substring(i + 1)
            
            //bfs
            for (let j = 0; j < words.length; j++) {
                if (visited.has(words[j])) continue
                
                //i번째 Char를 제외한 나머지가 같고 visited에 존재 X
                if (isPossible(fst,sec,j,i) && !q.includes(words[j])) {
                    if (words[j] === target) return cnt + 1 //결과값이 같다면 cnt + 1 리턴
                    
                    q.push({str:words[j], cnt:cnt + 1})
                    
                }
            }
        }
    }

    return 0
}

/*
    1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
    2. words에 있는 단어로만 변환할 수 있습니다.
    
    요 조건을 이용해서 한 글자씩 바꿔가며 풀었는데 234 실패해서 정직한 bfs이용해서 풀었습니다.
    좌물쇠 풀기처럼 모든 분기에서 제일 빠른 답을 구하면 되는 문제인 듯 합니다. 근데 문자라 감이 안잡히는
    
    1. q에서 꺼낸 문자를 순서대로 분기를 나눴습니다. it -> h t -> ti
    2. word를 쪼개서 q를 쪼갠 문자와 비교합니다. 맞고 방문한 적 없으면 q에 추가
    
    O(N² * L)
    
    문자 bfs는 머리속에 안그려져서 너무 힘드네요 차라리 미로였다면
    
*/