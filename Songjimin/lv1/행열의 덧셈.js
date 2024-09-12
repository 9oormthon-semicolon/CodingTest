function solution(arr1, arr2) {
    
    let result = [];  // 결과를 저장할 빈 배열을 만듭니다.

    // arr1과 arr2의 각 요소를 더하는 반복문 시작
    for (let i = 0; i < arr1.length; i++) {
        let row = [];  // 현재 행의 결과를 저장할 빈 배열을 만듭니다.
        
        // arr1[i]의 각 열 요소를 처리하는 중첩 반복문
        for (let j = 0; j < arr1[i].length; j++) {
		        // 같은 위치의 요소를 더해서 row 배열에 추가합니다.
            row.push(arr1[i][j] + arr2[i][j]);  
        }
        
        result.push(row);  // 완성된 하나의 행을 결과 배열에 추가합니다.
    }
    
    return result;  // 모든 행의 덧셈이 완료된 후 최종 결과를 반환합니다.
}
