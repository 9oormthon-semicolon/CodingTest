function solution(p) {
    const w = {"(": 1, ")": -1}

    return (function Change(str) {
        if (str === "") return "" //조건 1
        
        let i = 0, cnt = 0
        
        for (const c of str) { //조건 2
            i++
            cnt += w[c]
            if(cnt === 0) break //0 되면 균형잡힌
            
        }
        
        const u = str.slice(0,i) //균형잡힌
        const v = str.slice(i) //불균형한
        
        //올바른데 균형잡힌
        if(u[0] === "(") return u + Change(v) //조건 3 3-1 
        
        //균형만잡힌
        else {
            const r = "(" + Change(v) + ")" // 조건 4-1 4-2 4-3
            
            return r + [...u.slice(1,u.length - 1)] //조건 4-4 4-5
                .map(v => v === "(" ? ")" : "(") 
                .join("")
        }
        
    })(p)
}

/*

    균형만잡힌 ))((
    불균형한   ))(
    올바른데 균형잡힌 (())

    일단 (와 ) 두 개만 사용하기 때문에 두 개만 스택처럼 1,-1 객체로 등록
    
    재귀 이해하라고 만든 문제 같은데 왜 답이 저렇게 나오는지는 이해가 잘 안되네요
    이해 포기하고 설명서대로 조립하면 답이 나오긴하는게 신기
    문제만의 용어를 이해하는게 의도인 것 같기도 하네용 
    
    아무튼 최악의 경우의 수는 4번을 모두 거치는 과정이기에 
    
    return r + u.slice(1, u.length - 1)  //4-4
                .split('')
                .map(v => v == "(" ? ")" : "(") // 4-5
                .join("") 
    = O(n) * n(최악의 경우의수) 
    
    O(n²)
    
    
*/

