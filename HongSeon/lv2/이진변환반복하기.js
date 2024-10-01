function solution(s) {
    let Len = 0
    let round = 0
    let delCount = 0
    
    while(s.length !== 1){
        // 0제거 전 길이
        let before = s.length
        // 정규표현식을 이용하여 0을 전부 제거함
        s = s.replace(/0/g, '')
        // 0제거 후 길이
        let after = s.length
        
        // 0제거 개수 = (전 - 후)길이
        delCount += (before - after)
        
        // 0제거 후 길이를 2진법으로 변환
        s = after.toString(2)
        // 회차 수 증가
        round += 1
    }
    
    return [round, delCount]
}

/* 시간 복잡도
 - while (s.length !== 1) [문자열 길이가 1이 될 때까지 반복]: O(log n)번 반복
    - s.replace(/0/g, '') [문자열에서 모든 '0' 제거]: O(m), m은 현재 문자열의 길이
    - after.toString(2) [0 제거 후 길이를 2진수로 변환]: O(log m)

=> 전체 시간 복잡도: O(n)
   - n: 입력 문자열의 초기 길이
   - 각 반복에서 m이 빠르게 감소하기 때문에 전체 시간 복잡도는 선형에 가까움
*/

