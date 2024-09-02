// 자른 후 정렬한 다음 원하는 위치의 요소를 뽑으면 되는 문제
function solution(array, commands) {
    let result = []
    // command 배열 순회
    for(let i = 0; i < commands.length; i++){
        // array 배열을 잘라줘야한는데 배열은 0부터시작
        // 그러므로 command의[i][0], [i][2]는 -1을 해줘야함
        let sliceArr = array.slice(commands[i][0]-1, commands[i][1]).sort((a,b) => a - b);
        result.push(sliceArr[commands[i][2]-1])
    }
    
    return result
}

/*시간 복잡도
 - for문(commands 배열 순회) : O(m)
 - array.slice(array 부분 배열 순회) : O(n) [* 최악의 경우 배열 끝까지 순회 할 수 있음]
 - sort() : O(nlogn) [* 최악의 경우 잘라낸 배열이 원본 배열일 수 있음]

 => 코드 전체 시간 복잡도 : O(m * nlogn)
*/