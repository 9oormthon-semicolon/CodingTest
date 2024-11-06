function solution(n) {    
    const moves = [];

    (function Hanoi (n, s, e, c) {
        if (n == 1) moves.push([s,e]) //s -> e
        
        else {
            Hanoi(n - 1, s, c, e) //출발지에서 보조 기둥으로 옮김 왔다갔다
            moves.push([s,e]) //가장 큰 원반을 출발지에서 목적지로 옮김
            Hanoi(n - 1, c, e, s) //center에 있는 원판을 end로 다시 옮김
        }
    })(n, 1, 3, 2)
    return moves
}

/*
    백트래킹 국룰 문제로 알고있어서 문제를 선택했는데,
    나눠지는 분기점이 많고, 추상화 난이도가 빡세서 이해하기 어렵네요
    
    저는 너무 어려워서 답보고 풀었습니다
    근데 답을 아는 상태로도 이해가 될듯 말듯하네요 
    
    O(2^n)
  
*/