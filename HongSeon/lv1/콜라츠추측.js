// 전역변수 이용
let count = 0;

function solution(num) {

    // 1이 되면 count 리턴
    if (num === 1) {
        return count;
    }
    // 500번 시도해도 1이 되지 않으면 -1 리턴
    if (count >= 500) {
        return -1;
    }
    
    // 짝수 판별 후
    // 짝수라면 2로 나누고 홀수라면 x3+1
    num % 2 === 0 ? num = num / 2 : num = num * 3 +1
    
    // count 증가
    count++;
    
    // 1이 될 때 까지 반복해야 하니 재귀호출 이용
    return solution(num);
}

/* 시간복잡도
    - 최대 500번의 연산을 해야 하므로 시간 복잡도는 O(500) 상수시간

    => 전체 시간 복잡도 : O(1)
*/