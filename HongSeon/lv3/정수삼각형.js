// dp 이용 (triangle이 dp 배열)
function solution(triangle) {
    let floor = triangle.length - 1
    
    // 바닥부터 올라가기
    while (floor > 0) {
        for (let i = 0; i < floor; i++) { 
            // 위층에서 아래 두 개 중 큰 값을 더해줌
            triangle[floor - 1][i] += Math.max(triangle[floor][i], triangle[floor][i + 1])
        }
        // 층 올라가기
        floor--
    }

    return triangle[0][0]
}

/* 시간 복잡도 
 - while (floor > 0) : O(n-1)
    - for (let i = 0; i < floor; i++) : O(n)
 
 => 전체 시간 복잡도 : O(n^2)
*/