function solution(answers) {
    let A = [1, 2, 3, 4, 5];
    let B = [2, 1, 2, 3, 2, 4, 2, 5];
    let C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
    let answerArray = [0,0,0]; // 각 수포자들의 정답 맞춘 개수의 배열
    let lengthA = A.length, lengthB = B.length, lengthC = C.length ;
    let winner = [];
    
    // filter 함수로 정답 맞춘 개수를 카운트합니다.
    answerArray[0] = answers.filter((value, i)=> value === A[i % lengthA]).length;
    answerArray[1] = answers.filter((value, i)=> value === B[i % lengthB]).length;
    answerArray[2] = answers.filter((value, i)=> value === C[i % lengthC]).length;
    
    let maxValue = Math.max(...answerArray); // max 함수는 배열을 순회하며 최대값을 찾기 때문에 시간복잡도 O(n)
    
    if(maxValue){ // 정답의 최대값만큼 맞힌 수포자를 찾습니다.
        answerArray.forEach((value, idx) => value === maxValue ? winner.push(idx + 1) : '')
    } 
    return winner;
}

const answers = [1,2,3,4,5];
console.log(solution(answers));

/* filter함수는 배열을 순회하며 얕은 복사를 하며 값을 필터링하는 로직을 가지고 있습니다.
max함수도 배열을 순회하며 최대값을 찾아냅니다.
둘 다 시간복잡도가 O(n)이므로 solution 함수의 시간복잡도도 O(n)입니다.*/