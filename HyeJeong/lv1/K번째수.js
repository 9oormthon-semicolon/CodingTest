function solution(array, commands) {
    const result =[];  //결과를 저장할 배열
    
    //commands 배열을 순회
    for (let command of commands){
        const[i, j, k] = command; // i, j, k를 분리
        const slicedArr = array.slice(i-1, j); // i번째부터 j번째까지 자르기
        const sortedArr = slicedArr.sort((a,b) => a-b); //정렬
        result.push(sortedArr[k-1]); //k번째 원소 결과 배열에 저장
    }
    return result;
}

//시간복잡도 
//array.slice(i-1, j) - O(n) {n은 잘라낸 배열의 길이}
//slicedArr.sort(a,b)=>a-b) - O(n log n)  {n은 잘라낸 배열의 길이}
//result.push(sortedArr[k-1]) - O(1)
//종합 
//각 command에 대해 O(n)(slice) + O(n log n)(sort)
//전체 commands에 대해 시간 복잡도는 O(m * n log n)
//m은 commands 배열의 길이, n은 array의 길이
