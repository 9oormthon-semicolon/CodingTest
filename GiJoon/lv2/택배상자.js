function solution(order) {
    let cnt = 0
    let idx = 1
    const stack = []

    for (const target of order) {   
        //현재 상자와 트럭의 번호가 다를 때 상자 => 보조 컨테이너
        while (idx <= target) { stack.push(idx++) }
        
        //보조 컨테이너 마지막 상자를 싣을 수 없을 때 종료
        if (stack[stack.length - 1] !== target) return cnt
        
        //상자 => 트럭
        stack.pop()
        cnt++
        
    }
    return cnt
}

/*
    트럭에 넣을 순서가 아니면, 잠시 보조 컨테이너에 push하고 원하는 순서가 나올때 까지 택배를 뽑고,
    순서가 옳다면, 횟수를 세주면 되는 은근히 간단한 문제인데
    "보조 컨테이너 벨트를 이용해도 기사님이 원하는 순서대로 상자를 싣지 못 한다면, 더 이상 상자를 싣지 않습니다."
    라는 조건 때문에 많이 헷갈렸네용

    추후에 맞는 상자를 트럭에 싣기가 가능함에도 불구하고, 지금 당장 트럭에 택배를 싣지 못한다면, break 해야하는 조건이 
    일반적이지 않아 문제를 여러번 읽었네요. 코테 문제 풀 때 문제 꼼꼼히 읽고 고정관념을 버려야겠네요...
    
    O(2N) => O(N)
*/