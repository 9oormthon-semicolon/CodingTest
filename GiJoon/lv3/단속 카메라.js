function solution(routes) {
    
    let answer = 0
    let prevCamera = -Infinity
    routes.sort((a, b) => a[1] - b[1])
    
    return routes.reduce((acc, [enter, leave]) =>{
        if (prevCamera < enter) { //이전 카메라 위치가 현재 진입지점 보다 작으면 새로운 카메라 필요함
            acc++
            prevCamera = leave
            
        }
        
        return acc 
    }, 0)
}

/*
    고속도로를 이동하는 모든 차량이 고속도로를 이용하면서 단속용 카메라를 한 번은 만나도록 카메라를 설치해야함...
    
    끝 지점만 확인하면 되기에 끝나는 지점기준 오름차순 정렬
    
    reduce + sort
    O(n + n log n)
*/