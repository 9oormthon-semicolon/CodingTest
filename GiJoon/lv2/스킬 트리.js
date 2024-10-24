function solution(skill, skill_trees) {
    const skillLen = skill.length
    
    return skill_trees.reduce((cnt,skill_tree) => {
        const skill_paste = [...skill]
        const s = skill_tree.split('').filter(v => {
            const tf = skill.includes(v)
            
            if(tf && skill_paste[0] === v) skill_paste.shift()
            
            return tf
        })
    
        return skillLen === skill_paste.length + s.length ? ++cnt : cnt
        
    },0)
}

/*
    skill에서 주어지는 순서대로 올바르게 찍은 스킬트리의 개수 세는 문제
    다른 스킬 필요없고 skill에서 제공하는 스킬 순서만 확인하면 되기 때문에
    필터로 skill에 해당하는 값을 걸러주고 해당하는 값이 스킬 복사본 맨 앞에 위치하면
    shift해줍니다.
    
    이 과정을 반복하면 안 걸러진 수와 걸러진 수가 남게되는데 올바른 스킬트리는 복사본과 필터된 문자에 겹치는 문자가 없어 더하면 skill의 길이와 같지만, 잘못된 순서인 값은 문자가 겹처 skill보다 총 길이가 길어집니다.
    
    ex)
    	[ 'B', 'D' ] [ 'B', 'C', 'D' ] 잘못
        [] [ 'C', 'B', 'D' ] 올바른 
        [ 'D' ] [ 'C', 'B' ] 올바른
        [ 'C', 'B', 'D' ] [ 'B', 'D' ] 잘못

    이를 이용해서 skill의 길이가 같다면 ++ 아니면 계산을 안하는 식으로 풀었습니당
    
    split: O(M)
    filter + includes O(M * K)
    shift: O(K) 
     
     O(N * M * K)
     시간 복잡도 별로네요...      
    
*/