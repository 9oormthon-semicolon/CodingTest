function solution(n, left, right) {
    let result = []
    // left부터 right까지만 순회
    for (let i = left; i <= right; i++) { 
        // 행 번호 계산 
        let x = Math.floor(i / n)
        // 열 번호 계산
        let y = Math.floor(i % n)
        // 
        // 규칙을 보면 행번호와 열번호 중 큰 값이 그 위치의 값임
        // 근데 인덱스가 0부터 시작하기 때문에 +1을 해줌
        result.push(Math.max(x, y) + 1)
    }
    return result
}

/* 시간 복잡도 

 ** m : right - left + 1

 - for (let i = left; i <= right; i++) [left부터 right까지 순회] : O(m)

 => 전체 시간 복잡도 : O(m)
*/
