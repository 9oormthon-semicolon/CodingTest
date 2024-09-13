function solution(s, skip, index) {
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    alpha = [...alpha].filter(v => ![...skip].includes(v))
    const len = alpha.length
    
    return [...s].map(v => {
        const curIdx = alpha.indexOf(v)
        return alpha[(curIdx + index) % len]
        
    }).join('')
}

// 알파벳에서 skip에 있는 문자를 제외하고
// s에 있는 각 문자 + index에 알파벳을 가져오면 되는 문제입니다.

//첫번째 필터로 skip문자열을 제외했습니다
//둘째 map을 이용하여 문자를 계산 했습니다. 
//idx를 구하고 +index를 했으나 범위를 넘어가면
//원점 부터 다시 시작해야하니 % 계산을 해줬습니다.

//filter O(n)
//map * indexOf = O(n * m)
//근데 m은 알파벳 개수이므로 상수입니다.
//따라서 O(n) 같네여
























// const regexp = new RegExp(`[${skip}]`, 'g')
    // alpha = alpha.replace(regexp, '')