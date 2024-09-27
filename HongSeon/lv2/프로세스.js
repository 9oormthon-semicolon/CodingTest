// 큐를 이용하는 문제

function solution(priorities, location) {
    // 우선순위 값과 인덱스 번호를 같이 2차원 배열에 저장
    let Info = priorities.map((priority, index) => [priority, index]);
    // 실행 카운트
    let cnt = 0; 
    
    while(Info.length > 0){
        // Info가 2차원 배열이므로 각 요소에서 첫 번째 값만 
        // 추출한 배열을 만든 후 가장 높은 우선순위 값 설정
        let highest = Math.max(...Info.map(item => item[0]));
        
        // Info의 가장 왼쪽에 있는 요소 추출
        let now = Info.shift()
        
        // 추출한 요소의 [0]번째 값(우선순위 값)이 가장 높은 우선순위 값 같으면
        if (now[0] === highest){
            // 실행 카운트 값 증가
            cnt++
            // 추출한 요소의 [1]번째 값(인덱스 값)이 location과 같다면 카운트 바로 리턴
            if(now[1] === location) return cnt
        }
        
        // 추출한 요소의 [0]번째 값(우선순위 값)이 가장 높은 우선순위 값과 같지 않다면
        // 다시 Info의 끝에 추가
        else Info.push(now)
    }
}

/* 시간 복잡도
 - while (Info.length > 0) : Info의 배열 길이에 비례하여 반복 = O(n)

    - Math.max(...Info.map(item => item[0])) : Info 배열 순회 = O(n)
        
    - Info.shift() : shift 메서드 = O(n)
        
 => 전체 시간 복잡도 : O(n^2) 
*/
