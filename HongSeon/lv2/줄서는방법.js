// 팩토리얼 기반 접근법
function solution(n, k) {
    const result = []
    const lst = []
    // 배열 초기화
    for (let i = 1; i <= n; i++) lst.push(i) 

    // 팩토리얼 함수
    function fac(n) {
        let sum = 1
        for (let i = 1; i <= n; i++) sum *= i 
        return sum 
    }

    while (lst.length > 0) {
        // 현재 자리에서 고를 수 있는 경우의 수는 (n-1)!
        const temp = fac(n - 1)    
        // 현재 k에 해당하는 인덱스 계산
        let idx = Math.floor(k / temp) 
        // 현재 k를 (n-1)!로 나눈 나머지 : 다음 k 값
        const nextK = k % temp 

        // nextK가 0인 경우는 (n-1)!의 배수에 해당하는 위치
        // 이런 경우 현재 자리의 마지막 숫자를 선택해야 하므로 인덱스를 1 감소
        if (nextK === 0) idx -= 1 

        // lst 배열에서 idx번째 요소를 선택하여 결과 배열에 추가
        // 추가한 숫자는 lst에서 제거하고 남은 숫자로 다음 자리 결정
        result.push(lst.splice(idx, 1)[0]) 

        // 남은 숫자의 개수 감소
        n -= 1 

        // k를 nextK로 갱신
        k = nextK 
    }

    return result
}

/* 시간 복잡도 : 
 - for (let i = 1; i <= n; i++) : O(n)

 - function fac(n) : O(n^2)

 -  while (lst.length > 0)
    - fac(n - 1) : O(n^2)
    - result.push(lst.splice(idx, 1)[0]) : O(n^2)

 => 전체 시간 복잡도 : O(n^2)
*/

/* 
 2가지가 문제의 포인트
 - 각 자리는 고유한 구간을 가짐
 - 구간을 나누기 위해 k를 나눔

예시: n=3, k=5일 때 [1, 2, 3]의 순열을 구한다고 가정
1. 첫 번째 자리:
    총 순열 개수 = 3! = 6, 한 숫자당 구간 크기 = 2! = 2
    k=5, 5 ÷ 2 = 2 (몫), 5 % 2 = 1 (나머지)
    몫 2 → 세 번째 숫자 선택 → 결과: 3
    나머지 1 → 다음 k=1
2. 두 번째 자리:
    남은 숫자 = [1, 2], 구간 크기 = 1! = 1
    k=1, 1 ÷ 1 = 0 (몫), 1 % 1 = 0 (나머지)
    몫 0 → 첫 번째 숫자 선택 → 결과: 1
    나머지 0 → 다음 k=0
3. 세 번째 자리:
    남은 숫자 = [2] → 결과: 2
    결과 순열: [3, 1, 2] 
*/
