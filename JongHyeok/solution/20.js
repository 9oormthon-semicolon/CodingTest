// 문제 20 완주하지 못한 선수

function stringHash(participant, completion) {
    let hash = []
    participant.forEach(entry => { // 참가자 해시 테이블에 추가
        hash[entry] = hash[entry] ? hash[entry] + 1 : 1
    })
    completion.forEach(entry => { // 완주자 1 감소
        hash[entry] = hash[entry] - 1
    })

    for (var key in hash) { // 남아있는 사람 = 완주하지 못한 선수
        if (hash[key] >= 1) return key
    }
}

const participant = ["leo", "kiki", "eden"];
const completion = ["eden", "kiki"];
console.log(solution(participant, completion));

/*
권장 시간 복잡도 O(N)
---
*/