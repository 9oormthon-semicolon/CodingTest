function solution(n)
{
    let useBattery = 0;
    
    while( n !== 0) {
        if ( n % 2 === 1) {
            useBattery++
            n -= 1
        } else n /= 2;
    }
    
    return useBattery
   
}


/* 
코드 설명 :
배터리 사용량 변수 만들어두고, while문으로 n이 0으로 될 때까지 돌린다.
만약 n이 홀수라면 점프를 무조건 한번 해야하는 거고 그렇기 때문에 배터리 사용량 + 1 및 n은 한칸 이동하니까 -1
만약 짝수라면 순간이동을 한것이기 때문에 나누기 2를 진행.

시간 복잡도는 O(log N)입니다.
각 반복에서 n은 최대 절반으로 줄어들기 때문에, 반복문은 최대 log2(N)번 실행됩니다.
따라서 전체 알고리즘의 시간 복잡도는 O(log N)입니다.
*/
