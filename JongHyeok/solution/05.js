// 문제 05 행렬의 곱셈
function solution(arr1, arr2) {
    const row1 = arr1.length, column1 = arr1[0].length;
    const row2 = arr2.length, column2 = arr2[0].length;
    
    let answer = [];
    for(let i = 0; i < row1; i++){
        answer.push(new Array(column2).fill(0));
    }

    for(let i = 0; i < row1; i++){
        for(let j = 0; j < column2; j++){
            for(let k = 0; k < column1; k++){
                answer[i][j] += arr1[i][k] * arr2[k][j];
            }
        }
    }
    return answer;
}

const arr1 = [[1,4],[3,2],[4,1]];
const arr2 = [[3,3],[3,3]];
console.log(solution(arr1, arr2));

/*
권장 시간 복잡도 O(N²)
---
*/