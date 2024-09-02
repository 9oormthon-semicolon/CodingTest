function solution(array, commands) {
    let answer = []; // 배열 초기화
    
    // 각 명령어에 대해 반복
    commands.forEach(curArr => {
        // i,j,k 값을 구조 분해 할당 추출
        const [i, j, k] = curArr; 
        // array에서 i번째부터 j번째까지 자르고, 정렬한 후, k번째 숫자 추출
        const num = array.slice(i-1, j).sort(( a,b ) => a-b)[k-1];
        
        answer.push(num) // 추출한 숫자를 결과 배열에 추가
        
    })
    
    return answer
}

/* 
시간복잡도:
array.slice(i-1, j) : O(j-i+1)
sort((a, b) => a - b) : O(n log n)
commands 배열에 대해 반복하기 때문에, commands의 길이를 m이라고 하면
총 시간복잡도는 O(m * n log n)

*/