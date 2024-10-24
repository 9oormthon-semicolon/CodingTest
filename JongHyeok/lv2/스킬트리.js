function solution(skill, skill_trees) {
    let answer = 0;
    const regex = new RegExp(`[${skill}]`, 'g'); // 정규표현식 (스킬트리에 있는 스킬들로 필터링할 수 있도록)
    for (const skillTree of skill_trees) {
        const filteredSkillTree = (skillTree.match(regex) || []).join(''); // 스킬트리와 관계 없는 스킬 제거
        if (skill.startsWith(filteredSkillTree)) answer++; // 배운 스킬 순서가 스킬트리 순서로 시작하는지
    }
    return answer;
}

const skill = "CBD", skill_trees = ["BACDE", "CBADF", "AECB", "BDA"];
console.log(solution(skill, skill_trees));


/*
스킬트리 순서 길이 n (1 <= n <= 26)
스킬트리 개수 m (1 <= m <= 20)
필터링된 스킬트리의 길이 k (2 <= k <= 26)

match 함수는 시간복잡도 O(n)
startsWith 함수의 시간복잡도 O(k)
for 반복문은 스킬트리의 개수만큼 반복 > O(m)
k가 n보다 항상 작기 때문에
전체 시간복잡도는 O(n * m)
*/