function solution(lottos, win_nums) {
    let right = 0
    let possiblity = 0
    const check = new Set(...[win_nums])
    const rank = {6:1,5:2,4:3,3:4,2:5,1:6,0:6}
    
    lottos.forEach((num)=>{
        if(num === 0) 
            possiblity++
        else if(check.has(num)) 
            right++
        
    })
    
    return [rank[right + possiblity], rank[right]]
}

//지워진 로또 번호로 인해
//당청 될 수 있는 최대,최소 순위를 구하는 문제
//create 랭크 obj
//지워진 0의 개수와 맞은 당첨번호의 개수를 셈
//쉽고 빠르게 값을 가지고 있는지 유추하기 위해서 O(1)의 속도를 가지고 있는
//set의 has메서드를 활용함
//0의 개수는 가능성임
//[가능성 + 맞은개수의 순위, 맞은 개수의 순위]

//----------------------------------------------

//check = new Set(...[win_nums]) O(N)
//lottos.forEach((num)=>{...} O(N)
// = O(N)

