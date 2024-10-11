function solution(dirs) {
    const MAP = new Set()
    let cnt = 0, cur = [0,0]
    
    const Dire = {
        U:[0,1],
        D:[0,-1],
        R:[1,0],
        L:[-1,0]
    }
    
    for (let d of dirs.split('') ) {
        const [dx,dy] = Dire[d]
        const [cx,cy] = cur // 현재 위치
        const tx = cx + dx // 움직인 위치
        const ty = cy + dy
        
        if(tx < -5 || ty < -5 || tx > 5 || ty > 5) continue //좌표 넘어가면 계산안함
             
        const d1 = JSON.stringify([...cur,tx,ty])
        const d2 = JSON.stringify([tx,ty,...cur])
        
        if(!MAP.has(d1)){ //기록된 set에 없으면 기록하고 cnt++
            MAP.add(d1)
            MAP.add(d2)
            cnt++
        }
        
        cur = [tx,ty] //현재위치 = 움직인 위치
        
    }
    return cnt
}

/*
    걸은 길을 저장해야 하므로 일단 set을 사용하여 갔던길을 구현합니다.
    set은 같은 값의 배열이여도 주소가 다르면 같은 값이라고 인식을 안합니다.
    그래서 그냥 문자열인 JSON으로 변경해서 지났던 길을 저장합니다.
    
    ex) set({"[시작,도착]","[시작,도착]","[시작,도착]"})
    
    왔던 길을 반대로 다시 지날 수 있기 때문에 저장할 때 반대 방향도 저장합니다.
    
    이제 등록한 길의 여부를 판단하여 등록 안된 길이면 cnt를 세고 아닌길이면 그냥 길을 쭉 가도록 문제를 해결했습니다.
    
    O(N)
*/