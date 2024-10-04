// queue를 이용하기 위해 shift를 썼더니 시간초과가 자꾸 발생함 그래서 포인터를 이용
function solution(queue1, queue2) {
    let sum1 = 0
    let sum2 = 0
    let count = 0;
    // 이해가 안됨 (무한루프 때문인 것은 이해함)
    // 이유를 찾으려고 다른 사람풀이들을 봤지만 다른 사람들도 저 범위를 추측해서 품
    // 최악의 경우(queue1.length * 2) = 한 큐의 모든 원소를 다른 큐로 옮겨 보고, 다시 원래의 큐로 옮기는 경우
    // 근데 큐가 2개있기 때문에 다시 * 2
    let maxCount = queue1.length * 2 * 2;
     
    // 각 큐마다 초기 합 계산
    for(let i = 0; i < queue1.length; i++){
        sum1 += queue1[i]
        sum2 += queue2[i]
    }
    
    // 첫 큐의 합이 같다면 바로 0리턴
    if (sum1 === sum2) return 0 
    // 두 큐의 합이 홀수라면 합이 같을 수 없기 때문에 바로 -1 리턴
    if ((sum1 + sum2) % 2 === 1) return -1
    
    // 포인터 이용
    let q1Point = 0
    let q2Point = 0
    
    while (1) {
        // 왼쪽 큐 합이 더 클 때
        if (sum1 > sum2) {
            // 현재 포인터 위치 요소 가져오고 포인터 증가
            let i = queue1[q1Point++];
            // 가져온 요소를 반대 큐의 끝에 추가
            queue2.push(i);
            sum1 -= i;
            sum2 += i;
            count++;
        }
        // 오른쪽 큐 합이 더 클 때
        else if (sum2 > sum1) {
            // 현재 포인터 위치 요소 가져오고 포인터 증가
            let i = queue2[q2Point++];
            // 가져온 요소를 반대 큐의 끝에 추가
            queue1.push(i);
            sum2 -= i;
            sum1 += i;
            count++;
        }
        // 합이 같다면 중지
        else break;
        
        // count의 값이 최대 횟수를 넘겼을 때 종료
        if (count === maxCount) return -1
    }

    return count;
}

/* 시간 복잡도
 - for(let i = 0; i < queue1.length; i++) [큐 길이만큼 순회: O(n)

 - while (1) [maxCount = 4n(큐 길이가 n) 만큼 반복] : O(4n) => O(n)

 => 전체 시간 복잡도: O(n)
*/