function solution(arr1, arr2) {
    const answer=[];
    for(let i=0; i<arr1.length; i++){
        answer[i] = []; //answer[i]를 초기화 하여 새로운 행을 추가함
        for(let j=0; j<arr1[i].length; j++){
            answer[i][j] = arr1[i][j] + arr2[i][j];
        }
    }
    return answer;
}

//시간복잡도
//중첩반복문 
//for루프 첫번째 : arr1의 행의 수 만큼 반복 n번 반복
//for루프 두번째 : 각 행의 열의 수 만큼 반복 m번 반복
//O(n*m)
