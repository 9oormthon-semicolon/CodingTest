// 문제 04 모의고사
function solution(answers) {
    const patterns = [ 
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
    ];
    let answerArray = [0,0,0]; // 각 수포자들의 정답 맞춘 개수의 배열
    let winner = [];
    
    // filter 함수로 정답 맞춘 개수를 카운트합니다.
    for(let i = 0; i < patterns.length; i++){
        answerArray[i] = answers.filter((value, idx)=> value === patterns[i][idx % patterns[i].length]).length;
    }

    let maxValue = Math.max(...answerArray); // max 함수는 배열을 순회하며 최대값을 찾기 때문에 시간복잡도 O(n)
    
    if(maxValue){ // 정답의 최대값만큼 맞힌 수포자를 찾습니다.
        answerArray.forEach((value, idx) => value === maxValue ? winner.push(idx + 1) : '')
    } 
    return winner;
}

const answers = [1,2,3,4,5];
console.log(solution(answers));

/*
권장 시간 복잡도 O(N)
---
*/