function solution(n) {
    let len = 0;
    const dire = [{ x: 1, y: 0 }, { x: 0, y: 1 }, { x: -1, y: -1 } ];
    const tri = Array.from({ length : n }, (_, idx) => {len += idx + 1; return Array(idx + 1).fill(0) });
    
    let p = 0, x = 0, y = 0;
    
    const isTrue = () => {
        const tx = x + dire[p].x, ty = y + dire[p].y 
        
        if (tx < 0 || tx >= n) return false;
        
        if (ty < 0 || ty >= tri[tx].length) return false;
        
        if (tri[tx][ty] !== 0) return false;
        
        return true
    }
    
    
    for (let i = 1; i <= len; i++) {
        tri[x][y] = i
        
        //범위에 벗어나거나 이미 채워진 값이면 포인터 교체
        if (!isTrue()) p = (p + 1) % 3
        
        x += dire[p].x
        y += dire[p].y
        
    }
    
    
    return tri.flat()
}


/*
    어려워서 나중에 풀려고 했다가 잊었네용;
    
    1
    2 9
    3 10 8
    4 5 6 7
    
    이차원 배열로 바꿔 순서대로 채우는 방법으로 풀었습니다.
    
    O(N!)
*/