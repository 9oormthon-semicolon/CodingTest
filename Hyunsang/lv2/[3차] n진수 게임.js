function solution(n, t, m, p) {
    let result = ''; 
    let startNum = 0;  // 0부터 시작해서 n진수로 변환할 숫자
    let total = [];  // 전체 게임에서 필요한 n진수 숫자들을 저장할 배열
    
    // while문에서 미리 구할 숫자의 개수 x 게임 참가인원 만큼의 
    // 숫자를 미리 구해야 하기 때문에, 그때까지 반복해서 n진수로 변환된 숫자를 total 배열에 추가.
    while (total.length < t*m) {
        let formatNum = startNum.toString(n).split('');
        total = total.concat(formatNum); // 변환된 n진수 숫자들을 total 배열에 추가
        startNum++
    }
    
    //p번째 플레이어가 말해야 할 숫자를 찾는 for문
    for ( let i = p-1 ; i < total.length;  i += m ) {
        if ( result.length < t ) {// 결과 문자열이 t개만큼 모일 때까지만 반복
            result += total[i]; // p번째 플레이어의 차례에 해당하는 숫자를 결과에 추가
        }
        
    }
    
    return result.toUpperCase();  // 최종 결과를 대문자로 변환하여 반환
    
    
}

/*
while 루프의 시간 복잡도: O(t * m * log(t * m))
for 루프의 시간 복잡도: O(t)
따라서 전체 시간 복잡도는 O(t * m * log(t * m))입니다.

이 코드에서 가장 지배적인 부분은 while 루프이므로 
최종적으로 전체 시간 복잡도 O(t * m * log(t * m))
*/


