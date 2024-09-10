function solution(lottos, win_nums) {
    let ranks = [ 6,6,5,4,3,2,1 ] // 맞춘 개수에 따른 등수 (0개 맞추면 6등)
    let correctNum = 0;
    let zeroCount = 0;
    
    lottos.forEach(num => {
        if(win_nums.includes(num)) {
            correctNum++; // 맞춘 번호 개수
        }
        if ( num === 0) {
            zeroCount++ // 알아볼 수 없는 번호 개수
        }
    })
    
    let maxCorrect = correctNum + zeroCount; // 최고 등수는 0을 모두 맞춘 경우
    let minCorrect = correctNum  // 최저 등수는 0을 모두 틀린 경우
    
    return [ ranks[maxCorrect], ranks[minCorrect] ]
    
}

/*
시간복잡도:
lottos 배열 순회: O(m) (m은 lottos 배열의 길이, 항상 6
win_nums.includes(num) 실행: O(n) (n은 win_nums 배열의 길이, 항상 6
루프의 내부에서 includes 함수가 win_nums 배열을 매번 탐색하므로, 
O(m * n)의 시간 복잡도를 가집니다. 
그러나 m과 n이 둘 다 6으로 고정되어 있으므로, 이는 상수 시간 내에 실행
O(6 * 6) = O(36) 이므로 O(1)
*/