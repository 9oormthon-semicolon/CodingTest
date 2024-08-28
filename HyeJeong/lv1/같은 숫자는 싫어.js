function solution(arr)
{
    const answer =[];
    for(let i=0; i<arr.length; i++){
        if(arr[i] !== arr[i+1]){
            answer.push(arr[i]);
        }
    }
    return answer;
}
//arr[i]가 다음 요소인 arr[i+1]와 다를 경우에만 answer 배열에 추가
//push 메소드를 사용하여 연속된 숫자가 아닐경우 그 숫자를 answer배열에 추가
//시간복잡도 - O(n)
