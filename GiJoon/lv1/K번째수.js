function solution(array, commands) { 
    return commands.map(([start,end,k],idx)=>{
        return array.slice(start-1,end).sort((a,b)=>a- b)[k-1]
    })
}
//i~j 부터 짜르고 정렬한 뒤 K번째에 있는 수를 구해야함
// slice -> 정렬 -> idx에 있는 숫자를 리턴하면 하면 되는 문제

//시간 복잡도

//commands.map : O(c)
//slice : a * O(n)
//sort : O(log m)
//idx : O(1)            +
// --------------------------
//O(c) = O(c*n + log m)