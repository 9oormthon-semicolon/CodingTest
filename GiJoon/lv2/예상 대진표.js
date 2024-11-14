function solution(n, a, b, cnt = 0){    
    if(a === b) return i
    
    return solution(n, Math.ceil(a / 2), Math.ceil(b / 2), cnt + 1) 
}
/*
    1 2 3 4 5 6 7 8
    
    1 2 3 4
    
    1 2 
    
    1

    2의 지수이므로 부전승 없
    
    본인의 순서를 /2 연산 뒤 올림하면 다음 순서가 나옵니다
    8 => 4
    5 => 3
    3 => 2

    이용해서 재귀로 구현

    O(N/2)
*/