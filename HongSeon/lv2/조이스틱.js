function solution(name) {
    let result = 0

    // temp 배열: 각 문자를 목표 문자로 바꾸는 최소 횟수를 저장
    // 예를 들어, 'J'는 A에서 9번 위로 이동해야 하므로 temp 배열에는 9이 저장됩니다.
    const temp = [...name].map((char) => (
        Math.min(char.charCodeAt() - 65, 90 - char.charCodeAt() + 1)
    ))
    
    // 각 문자를 목표 문자로 바꾸기 위한 조작 횟수를 result에 모두 더함
    result += temp.reduce((sum, cur) => sum + cur, 0)

    // 이동 거리의 초기값을 설정 (이동할 필요가 없을 때는 name.length - 1만큼 이동)
    let move = name.length - 1

    // name의 각 문자 위치에서 최적의 이동 경로를 찾기 위해 반복
    for (let i = 0; i < name.length; i++) {
        let next = i + 1
        
        // 다음 위치에서 'A'가 연속된 부분이 끝나는 위치를 찾음
        // 'A'가 연속되는 구간이 길면 이동을 줄이기 위해 해당 구간을 넘길 수 있음
        while (next < name.length && name[next] === 'A') next++

        // 두 가지 이동 경로 옵션 계산 
        // 1. 현재 위치에서 처음으로 돌아와 다시 진행하는 경우 (왼쪽으로 돌아가는 경우)
        const moveOption1 = i * 2 + (name.length - next)
        // 2. 반대쪽에서 시작하여 'A'가 연속되는 구간을 건너뛰는 경우 (오른쪽으로 돌아가는 경우)
        const moveOption2 = (name.length - next) * 2 + i

        // 현재 최소 이동 거리와 두 옵션 중 작은 값을 선택
        move = Math.min(move, moveOption1, moveOption2)
    }

    // 전체 조작 횟수는 문자 변경 횟수와 이동 거리의 합
    result += move
    return result
}

/* 시간복잡도 
 - [...name].map : O(n)

 - temp.reduce : O(n)

 - for (let i = 0; i < name.length; i++) : O(n)

 => 전체 시간 복잡도 : O(n)
*/

// 두 가지 이동 경로 옵션 계산 이부분 고려하기가 매우 어렵다...
