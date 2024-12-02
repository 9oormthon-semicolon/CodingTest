function solution(n) {
    // 삼각형 구조 만들기
    const answer = Array.from({ length: n }, (_, i) => Array(i + 1).fill(0))
    // 좌표 초기화: 초기 시작은 삼각형 맨 위에서 아래로 내려가기 위해 x = -1, y = 0
    let x = -1
    let y = 0
    let num = 1 // 숫자 채워넣기 시작

    // 방향 변경에 따라 삼각형을 채워나감
    for (let i = 0; i < n; i++) { 
        // 각 방향에 따라 이동하며 값을 채움
        // 둘레는 3방향이므로 %3으로 방향을 구함
        for (let j = i; j < n; j++) {
            // 아래로 이동 
            if (i % 3 === 0) x += 1 
            // 오른쪽으로 이동
            else if (i % 3 === 1) y += 1 
            // 위로 이동
            else { 
                x -= 1
                y -= 1
            }
            // 현재 좌표에 숫자를 채움
            answer[x][y] = num 
            // 다음 숫자로 증가
            num += 1 
        }
    }

    // 2차원 배열을 1차원 배열로 변환
    return answer.flat()
}

/* 시간 복잡도 
 - Array.from : O(n^2)

 - for (let i = 0; i < n; i++) : O(n)
    - for (let j = i; j < n; j++) : O(n)

 - answer.flat() : O(n^2)

 => 전체 시간 복잡도 : O(n^2)
*/
