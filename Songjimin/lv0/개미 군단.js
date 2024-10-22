function solution(hp) {
    // 장군 개민 수
    const generalAnts = Math.floor(hp / 5);
    // 장군 개미를 사용하고 남은 체력
    const remainingAfterGeneral = hp % 5;
    // 병정 개미 수
    const soldierAnts = Math.floor(remainingAfterGeneral / 3);
    // 일개미 수 (1로 나눈 나머지)
    const workerAnts = remainingAfterGeneral % 3;
    
    // 총 개미수 = 장군 + 병정 + 일 개미
    return generalAnts + soldierAnts + workerAnts;
}

