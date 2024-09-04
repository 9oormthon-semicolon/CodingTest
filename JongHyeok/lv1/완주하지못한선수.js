function solution(participant, completion) {
    let hash = []
    participant.forEach(entry => {
        hash[entry] = hash[entry] ? hash[entry] + 1 : 1 // 해당 이름이 이미 존재하면 + 1, 없었으면 0 > 1
    })
    completion.forEach(entry => {
        hash[entry] = hash[entry] - 1 // 완주한 선수의 이름으로 value - 1
    })

    for (var key in hash) {
        if (hash[key] >= 1) return key
    }
}
/*
해시 사용
participant 배열에는 선수들의 이름이 들어있다
선수의 이름을 key로 이름이 나온 횟수를 value로 한다
completion 배열을 순회하면서 완주한 선수 이름의 value 값을 뺀다.
key 값을 다시 해시를 탐색해서 value가 1이상인 선수의 이름(key)를 리턴한다.

forEach 와 for 문을 사용했기 때문에 시간복잡도 O(n)
*/