function solution(s){   
    const result = []

    for (let chr of s){
        if (result.length === 0) result.push(chr)
        else if (result[result.length-1] === chr) result.pop()
        else result.push(chr)
    
    }
    return result.length === 0 ? 1 : 0
}

//다른 알파벳이 나오면 스택에 추가
//스택 끝과 비교해서 같으면 pop
//다르면 push
//배열이 남으면 삭제 못한거임

//for문 한개 O(N)