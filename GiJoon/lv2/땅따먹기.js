function solution(land) {   
    const N = land.length, M = land[0].length
    
    if(N === 1) return Math.max(...land[0])
    //매개 변수 직접 바꾸는 것 지양
    const dp = [...land]
    
    
    for (let row = 1; row < N; row++) {
        //이전 값에서 최댓값 누적
        for (let col = 0; col < M; col++) {
            dp[row][col] += Math.max(...land[row - 1].slice(0,col), ...land[row - 1].slice(col + 1))
        }
    }
    
    return Math.max(...dp[N - 1])
}

/*
    부분적으로 나누었을 때, 동일한 계산이 많아서 dp라고 판단했습니다
    메모제이션을 이용해 최댓값만 추출하여 해결했습니다
    
    열의 갯수가 고정이라 for문 안써도 됐었네용
    
*/
