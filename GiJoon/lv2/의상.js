function solution(clothes) {    
    const kinds = Object.values(clothes.reduce((obj, [_, kind]) => {
        if(!obj[kind]) obj[kind] = 0
        
        obj[kind]++
        
        return obj
    },{}))
    
    
   return kinds.reduce((acc, num) => acc * (num + 1), 1) - 1
    
}

/*
    모든 경우의 수 - 1(의상을 안입었을 때) 찾으면 되는거 같은 문제
    
    같은 이름을 가진 의상은 존재하지 않습니다.
    
    (의상 개수 + 1(안 입었을 때))! * (의상 개수 + 1(안 입었을 때))!  -1(의상을 안입었을 때)
    
    수학 문제네용
    
    O(N)
*/