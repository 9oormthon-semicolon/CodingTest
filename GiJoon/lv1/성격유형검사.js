function solution(survey, choices) {
    var answer = '';
    
    const score = [0,3,2,1,0,1,2,3,4]
    const MBTI = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0}
    
    survey.forEach((v,idx) => {
        const [v1,v2] = v.split('')
        
        if(choices[idx]<4)
            MBTI[v1] += score[choices[idx]]
        
        else if(choices[idx]>4)
            MBTI[v2] += score[choices[idx]]
        
    })
    
    const compute = (a,b) => {
        if(MBTI[a] === MBTI[b]) return a
        
        return MBTI[a] > MBTI[b] ? a : b
        
    }
    
    answer += compute("R","T")
    answer += compute("C","F")
    answer += compute("J","M")
    answer += compute("A","N")
    
    return answer
}

/*
    이 문제는 나만의 카카오 MBTI만들기 문제입니다.
    성격 유형검사를 통해서 개별로 점수를 매긴다음
    값이 높은쪽을 비교해서 4개를 배치하면 됩니다.
    MBTI와 점수 매기는거랑 똑같다고 생각이 듭니다.
    만약에 비교 값이 같다면 사전 순 정렬을 해야하는데
    비교할 때 값을 그냥 사전순으러 넣어서 따로 정렬을 안하고 앞에 값이 반환되게 했습니다.

    survey만큼의 반복합니다
    제한사항에 1 ≤ survey의 길이 ( = n) ≤ 1,000
    이기 때문에 일단 상수가 아닙니다.
    때문에 N = survey라면
    O(N)
*/



