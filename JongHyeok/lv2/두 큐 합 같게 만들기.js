function solution(queue1, queue2) {
    let sum1 = 0, sum2 = 0;
    for (let i = 0; i < queue1.length; i++) { // 두 큐의 합 구하기
        sum1 += queue1[i];
        sum2 += queue2[i];
    }
    
    const total = sum1 + sum2;
    if (total % 2 !== 0) return -1;
    
    const target = total / 2; // 목표가 되는 큐의 합
    let left = 0, right = 0; // left는 queue1의 인덱스, right는 queue2의 인덱스
    let count = 0; // 연산 횟수
    const max = (queue1.length + queue2.length) * 2;

    while (count < max) {
        if (sum1 === target) return count; // 각 큐의 합이 같으면 
        
        if (sum1 > target) { // 첫 번째 큐의 합이 타겟보다 크면
            if (left < queue1.length) {
                sum1 -= queue1[left]; // queue1에서 원소 제거
                left++;
            } else {
                sum1 -= queue2[left - queue1.length]; // queue2에서 원소 제거
                left++;
            }
        } else { // 첫 번째 큐의 합이 타겟보다 작으면
            if (right < queue2.length) {
                sum1 += queue2[right]; // queue2에서 원소를 queue1로 이동
                right++;
            } else {
                sum1 += queue1[right - queue2.length]; // queue1의 원소를 다시 queue1로 이동
                right++;
            }
        }
        
        count++; // 연산 횟수 + 1
    }

    return -1;
}

/*
시간 복잡도는 한 큐의 길이가 n이라고 가정하면
두 큐의 합 구하기 O(n),
while 반복문에서의 연산 횟수는 최대 4n이므로 O(4n)
전체 시간복잡도는 O(n)
*/