function solution(weights) {
    //비율
    const rates = [1, 2, 4 / 3, 3 / 2]
    weights.sort((a, b) => b - a)

    //딕셔너리
    const obj = {}
    
    return weights.reduce((cnt, weight) => {
        rates.forEach(rate => {
            const w = weight * rate
            if (obj[w]) cnt += obj[w]
        })

        obj[weight] = (obj[weight] || 0) + 1
        return cnt
    }, 0)
}

/*
    현재 weights 중에 조건에 맞는 쌍을 전부 찾는 문제인데
    초반에 제일 많은 쌍을 구하는줄 알고 오해함
    
    제일 곤란했던 부분 if (obj[w]) cnt += obj[w]
    중복된 값이 나오면 조합되어야 하니까 따로 계산해줘야하나 싶었는데
    저장된 개수를 그대로 더해주면 자연스럽게 n!이 나옴
    
    O(N log N)
*/