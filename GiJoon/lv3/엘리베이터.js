function solution(storey) {
    //숫자별로 분류
    let divide = storey.toString().split('').reverse().map(Number)
    let result = 0
    let waste = 0
    
    
    divide.forEach((num, idx) => {
        num += waste    
        
        // 5일 때 다음 자리수가 5이상이면 올리는게 이득임
        if (num > 5 || (num === 5 && idx + 1 < divide.length && divide[idx + 1] >= 5)){
            result += 10 - num
            waste = 1
        } else {
            result += num
            waste = 0
        }
        
    })
    
    if (waste == 1) result++ 
    
    return result
}


/*
    처음에 최소값을 찾는 문제이고, -10, 10, 1000, -1000 를 방향이라고 생각해서, bfs로 풀었는데,
    시간초과 났습니다.
    
    간단하게 바꿔 storey의 숫자를 10의 n승 단위로 분할해서 0과 10 더 가까운 쪽을 골라서 가까운 쪽을 고르도록
    만들어 풀었습니다. 
    O(N)
    
*/