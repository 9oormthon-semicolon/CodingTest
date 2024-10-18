function solution(numbers) {
    if(Math.max(...numbers) === 0) return '0'
    return numbers
        .map(v => v.toString())
        .sort((a,b) => (b+a).localeCompare(a+b))
        .join('')
}

/*
    0 또는 양의 정수
    모든 조합 경우의 수를 만들어서
    최대값 찾아내기
    
    그냥 사전 순 정렬하면 될 것 같습니다.
    그냥 sort사용하면 '3', '30' 이게 걸려서 다른 조건을 줬습니다.
    
    그래서 두 개의 string을 더했을 때 기준으로 사전순 비교함
    (b+a)-(a+b)써도 내림차순 되지만
    어제 배운 localeCompare가 신기해서 사용
    (b+a)-(a+b)와 같은 동작하지만 차이점은 특수문자도 정렬가능합니다.
    
    0을 제외하는 부분은 비효율적이긴한데 그냥 변수를 쓰기 싫었어요 허허
    
    Math.max O(n)
    map O(n) * sort(O)
    sort O(m log n) m은 자리수 사전 순이라 자릿수를 포함해서 m log n 이라네용
    join O(n)
    
    O(n*m log n)
*/
