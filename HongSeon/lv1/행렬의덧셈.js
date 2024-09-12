function solution(arr1, arr2) {
    let result = [];
    for(let i = 0; i < arr1.length; i++){
        let temp = [];
        for(let j = 0; j < arr1[1].length; j++){
            temp.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(temp)
    }
    return result
}

/* 시간 복잡도
 - for (let i = 0; i < arr1.length; i++) : arr1 배열 순회 => O(n)
 
 - for (let j = 0; j < arr1[i].length; j++) : arr2 배열 순회 => O(m)

 => 전체 시간 복잡도 : O(n*m)
*/