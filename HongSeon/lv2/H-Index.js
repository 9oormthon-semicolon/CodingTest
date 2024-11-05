function solution(citations) {
    // 내림차순
    citations.sort((a, b) => b - a)
    // temp에 따로 인용횟수와 논문 수(인덱스+1) 값을 비교한 후 더 적은 것을 추출
    let temp = citations.map((c, idx) => Math.min(c, idx+1))
    
    // 가장 높은 값이 H-index
    return Math.max(...temp)
}

/* 
 - citations.sort [내림차순 정렬] : O(nlogn)
 
 - citations.map : O(n)

 - Math.max(...temp) : O(n)

 => 전체 시간 복잡도 : O(nlogn)
*/

// h-index: 내림차순 정렬 후 인용 횟수가 논문 수(인덱스+1)보다 크거나 같은 최대 값
// citations = [6, 5, 3, 1, 0]일 때
// 첫 번째 논문은 6번 인용되었으며, 최소 1편 이상의 논문이 1번 이상 인용됨을 확인
// 두 번째 논문은 5번 인용되었으며, 최소 2편 이상의 논문이 2번 이상 인용됨을 확인
// 세 번째 논문은 3번 인용되었으며, 최소 3편 이상의 논문이 3번 이상 인용됨을 확인
// 네 번째 논문은 1번 인용되었으며, 최소 4편 이상의 논문이 4번 이상 인용되지는 않음
// 다섯 번째 논문은 0번 인용되었으며, 최소 5편 이상의 논문이 5번 이상 인용되지는 않음
// 결과적으로 H-index는 3이 됨
// temp = [1, 2, 3, 1, 0]
