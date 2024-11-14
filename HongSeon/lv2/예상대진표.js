function solution(n, a, b) {
    let result = 0
    
    // 두 번호가 같아 질 때 까지
    while (a !== b) {
        // 라운드 증가
        result += 1

        // 무조건 이기니까 다음 라운드 번호 계산(올림 처리)
        a = Math.ceil(a / 2)
        b = Math.ceil(b / 2)
    }

    return result
}

/* 시간 복잡도 
 - while(a !== b) : O(logn)

 전체 시간 복잡도 : O(logn)
*/
