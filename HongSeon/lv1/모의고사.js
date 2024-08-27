// 패턴배열을 이용하여 정답배열을 순회 하면서 비교하는 문제

function solution(answers) {
    // 패턴 2차원 배열로 저장
    let submitpattern = [[1,2,3,4,5], [2,1,2,3,2,4,2,5], [3,3,1,1,2,2,4,4,5,5]]
    // 사람1,사람2,사람3 정답 수 저장 배열
    let person = [0, 0, 0]
    let result = []
    
    // 우선 answers의 길이 만큼 배열 순회
    for(let i =0; i < answers.length; i++){
        // 각 패턴의 길이를 이용하여 현재 문제의 답안과 비교
        // 나머지 연산자를 통해 각 패턴을 반복시킴 (패턴 배열 길이 초과 방지)
        // answer과 패턴이 일치시 정답수 up
        if(submitpattern[0][i % submitpattern[0].length] === answers[i]) 
            person[0]++;
        if(submitpattern[1][i % submitpattern[1].length] === answers[i]) 
            person[1]++;
        if(submitpattern[2][i % submitpattern[2].length] === answers[i]) 
            person[2]++
    }
    
    // 가장 많은 정답 수 추출
    const MaxAnswer = Math.max(...person);
    
    // 정답수 배열을 순회 하면서 가장 많은 정답 수와 같으면 result에 추가
    for (let i = 0; i < person.length; i++) {
        if (person[i] === MaxAnswer) {
            // 사람은 1번부터 시작
            result.push(i + 1); 
        }
    }
    
    return result
}

/* 시간 복잡도
1. 
    for(let i =0; i < answers.length; i++){
        if(submitpattern[0][i % submitpattern[0].length] === answers[i]) 
            person[0]++;
        if(submitpattern[1][i % submitpattern[1].length] === answers[i]) 
            person[1]++;
        if(submitpattern[2][i % submitpattern[2].length] === answers[i]) 
            person[2]++
    }
    - answer 배열(길이 n) 순회 => O(n)
    - 3개의 if문은 상수 시간 => O(1) 

2. 
    for (let i = 0; i < person.length; i++) {
            if (person[i] === MaxAnswer) {
                // 사람은 1번부터 시작
                result.push(i + 1); 
            }
    }
    - 배열의 길이는 항상 3임, 상수시간 => O(1)


코드 전체 시간 복잡도 => O(n)
*/