function solution(people, limit) {
    var answer = 0
    people.sort((a,b)=> b - a)
    let left = 0, right = people.length - 1
    
    while(left <= right){
        const heavy = people[left]
        const light = people[right]
        
        if(heavy + light <= limit) right--
        
        left++
        answer++
    }
    
    return answer
}

/*
    최대 2명씩 보트를 탈 수 있습니다.
    제일 무거운사람 + 제일 가벼운사람이 limit을 넘지 않았을 때
    그 두 사람 부터 구조하는게 제일 경우의 수가 적습니다.
    
    가벼운 사람 + 무거운사람이 limit보다 크면 우선 무거운 사람부터 구조하고
    가벼운 사람은 무거운 사람과 같이 갈 수 있을 때까지 그대로 기다립니다.
    최대한 limit 값에 근사한 두 명을 제거하여 문제를 해결했습니다.
    
    O(people)
    O(N)

    인줄 알았는데 정렬 포함
    O(n log N)이네요...

*/


/* 효율성 불통과 -_-
function solution(people, limit) {
    var answer = 0
    people.sort((a,b)=> b - a)
    
    return (function boat(left,right,result){
        if(left > right) return result
        const state = (people[left] + people[right]) <= limit
        return boat(left + 1,state ? right - 1 : right,result + 1)
    })(0,people.length - 1, 0)
    
}
*/