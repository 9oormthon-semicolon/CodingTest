function solution(skill, skill_trees) {
    let count = 0;
    
    for (let tree of skill_trees) {
        let filteredTree = tree.split('').filter(s => skill.includes(s)).join('');
        if (skill.startsWith(filteredTree)) {
            count++;
        }
    }
    
    return count;
}

/*
count 변수를 초기화하여 유효한 스킬트리의 개수를 추적
skill_trees 배열의 각 스킬트리에 대해 반복
tree.split('')로 스킬트리 문자열을 개별 문자로 분리하고 filter(s => skill.includes(s))로 주어진 skill 문자열에 포함된 문자만 필터링
join('')으로 필터링된 문자들을 다시 문자열로 결합
skill.startsWith(filteredTree)로 필터링된 스킬트리가 주어진 스킬 순서의 시작 부분과 일치하는지 확인
조건이 참이면 count를 증가시킴
모든 스킬트리를 확인한 후 count를 반환

시간복잡도 - O(n * m) n은 skill_trees의 길이이고, m은 각 스킬트리의 평균 길이
각 스킬트리에 대해 O(m) 연산을 수행하고, 이를 n번 반복
*/
