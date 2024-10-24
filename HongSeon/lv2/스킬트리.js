// 해시맵 이용
function solution(skill, skill_trees) {
    let count = 0
    let skillMap = new Map()
    // 각 스킬의 순서를 해시맵에 저장
    skill.split('').forEach((s, idx) => skillMap.set(s, idx))

    skill_trees.forEach((skills) => {
        // 가능 여부
        let isPossible = true
        // 스킬 인덱스(0부터 시작)
        let skillIdx = 0
        
        for (let i = 0; i < skills.length; i++) {
            // 현재 스킬
            let now = skills[i]
            // 현재 스킬이 저장해둔 해시맵에 존재 시 
            // 해시맵에서 현재스킬에 대응하는 인덱스를 가져옴
            if (skillMap.has(now)) {
                let nowIdx = skillMap.get(now)
                // 현재 스킬의 인덱스가 스킬 인덱스와 같지 않다면 불가능 처리 후 종료
                if (nowIdx !== skillIdx) {
                    isPossible = false
                    break
                }
                // 같다면 스킬 인덱스 증가
                skillIdx++
            }
        }
        
        if (isPossible) count++
    })

    return count
}

/* 시간 복잡도 
 - skill.split('').forEach(...) [skill의 최대길이는 26] : O(26)

 - skill_trees.forEach [skill_tree의 길이는 n] : O(n)
    - for (let i = 0; i < arr.length; i++) [skills의 길이는 m] : O(m)

 => 전체 시간 복잡도 : O(n * m)
- 

*/