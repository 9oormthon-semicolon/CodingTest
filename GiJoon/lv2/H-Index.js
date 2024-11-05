function solution(citations) {
    citations.sort((a, b) => b - a)
    
    for (let i = 0; i < citations.length; i++) {
        if (citations[i] <= i) return i
    }
    
    return citations.length
}

/*
    발표한 논문 n 편중에 h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 이용되었다면
    h의 최댓값이 h-idx
    
    설명은 뭔가 복잡한데
    내림차순으로 정렬된 상태에서 각 논문의 인용 횟수와 논문의 인덱스를 비교하고,
    논문의 순서와 인용 횟수가 가장 비슷한 idx를 구하면 되는 문제입니다.
    
    O(n log n)
    
*/