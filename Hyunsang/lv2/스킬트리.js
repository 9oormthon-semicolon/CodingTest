function solution(skill, skill_trees) {
    let result = 0;
    
    skill_trees.forEach(skillTree => {
        let checkSkill = ''; // 주어진 스킬 트리에서 순서대로 체크할 스킬 문자열
        let nowSkillTree = [...skillTree]; // 현재 스킬 트리를 배열로 변환하여 순회 준비
        
        // 스킬 트리에서 선행 스킬만 추출
        nowSkillTree.forEach(char => {
            if (skill.includes(char)) { // 현재 문자가 선행 스킬 목록에 포함되면
                checkSkill += char; // 추출한 스킬 문자열에 추가
            }
        });
        
        // 추출한 스킬 문자열이 선행 스킬 순서와 일치하는지 확인
        let isValid = true;
        for (let i = 0; i < checkSkill.length; i++) {
            if (checkSkill[i] !== skill[i]) { // 순서가 다르면 유효하지 않음
                isValid = false;
                break;
            }
        }
        
        // 유효한 스킬 트리일 경우 결과 증가
        if (isValid) result++;
        
        checkSkill = ''; // 다음 스킬 트리를 위해 초기화
    });
    
    return result;
}

// 시간복잡도 : O(n * m)