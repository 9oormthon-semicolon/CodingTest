function solution(arr) {
    let X = [];  // 결과를 저장할 빈 배열
    
    // arr의 각 원소를 순회
    for (let a of arr) {
        // 원소 a를 a번 X에 추가
        for (let i = 0; i < a; i++) {
            X.push(a);
        }
    }
    return X;
}
