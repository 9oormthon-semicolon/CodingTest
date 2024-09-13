function solution(s, skip, index) {
    // a ~ z의 아스키 코드: 97부터 122
    let sArr = [...s].map(e => e.charCodeAt()); // 입력 문자열을 아스키 코드 배열로 변환
    let skipArr = [...skip].map(e => e.charCodeAt()); // skip 문자열도 아스키 코드 배열로 변환
    
    let answer = [];
    
    // s 문자열 순회
    sArr.forEach(sNum => {
        let count = 0; // 이동한 횟수 카운트
        let curNum = sNum;
        
        // index만큼 알파벳을 순환
        while (count < index) {
            curNum++; // 알파벳을 한 칸 이동
            
            // z를 넘어가면 a로 돌아가게 처리
            if (curNum > 122) {
                curNum = 97; // 다시 'a'로
            }
            
            // skip에 포함되지 않으면 count 증가
            if (!skipArr.includes(curNum)) {
                count++;
            }
        }
        
        // 최종적으로 얻은 아스키 코드를 문자로 변환 후 answer에 추가
        answer.push(String.fromCharCode(curNum));
    });
    
    return answer.join(''); // 배열을 다시 문자열로 변환하여 반환
}

/* 
시간복잡도:
sArr 초기화: O(n)
skipArr 초기화: O(m)
sArr.forEach() 내부의 반복문:
반복문 내에서 while 루프의 시간 복잡도는 O(index * m)이며, 이 루프는 n번 실행
따라서 전체 시간 복잡도는 O(n * index * m)

*/