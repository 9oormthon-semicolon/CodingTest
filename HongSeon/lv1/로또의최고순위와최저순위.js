function rank(count){
    switch(count){
        case 6: return 1
        case 5: return 2
        case 4: return 3
        case 3: return 4
        case 2: return 5
        default: return 6
    }
}

// 0의 개수를 구한 뒤
// [(맞춘 번호의 수 + 0의 수)의 등수, 맞춘 번호 수의 등수]를 반환하는 문제

function solution(lottos, win_nums) {
    let result = []
    // filter를 이용해 0의 개수 구하기
    let zero = lottos.filter(e => 0 === e).length;
    let count = 0;
    
    // lottos 배열을 순회
    for(let i = 0; i < lottos.length; i++){
        // lottos의 i번째 요소가 정답번호 배열에 있다면 count증가
        if(win_nums.includes(lottos[i]) === true) count++;
    }
    
    // 맞춘 번호 수 + 0의 수
    result.push(rank(count + zero))
    // 맞춘 번호 수
    result.push(rank(count))
    
    return result
}

/* 시간 복잡도
 - filter를 이용해 0의 개수 구하기(lottos를 순회) : O(n)

 - 정답 번호 배열과의 비교 : O(n*m)
    - includes(win_nums를 순회) : O(m)
    - for(lottos를 순회) : O(n)

 => 전체 시간 복잡도O(n*m)
*/