function solution(answers) {
    //수포자가 찍는 방식
    const patterns = [[1, 2, 3, 4, 5],[2, 1, 2, 3, 2, 4, 2, 5],[3, 3, 1, 1, 2, 2, 4, 4, 5, 5]]
    
    //pattern과 answers 비교에서 맞은 개수 result에 저장
    const results = patterns.map((pattern)=>
        answers.reduce((sum,v,idx)=>
            //정답과 같다면 ++
            v === pattern[idx % pattern.length] ? sum+1 : sum,0) 
    )
    //max 값 추출
    const max = Math.max(...results)
    
    //max값과 같다면 push
    return results.reduce((arr,v,idx)=>{
        if(v === max)
            arr.push(idx+1)
        return arr
    },[])
}

//맞은 정답 개수를 구하는 식만 구하면 됨 나머지는 상수
//O(3n) => O(n)