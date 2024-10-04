function solution(queue1, queue2) {
    const totalQueue = [...queue1, ...queue2];
    const totalSum = totalQueue.reduce((a, b) => a + b, 0);
    const target = totalSum / 2;
    
    let sum1 = queue1.reduce((a, b) => a + b, 0);
    let left = 0;
    let right = queue1.length;
    let count = 0;
    
    while (count <= totalQueue.length * 3) {
        if (sum1 === target) return count;
        
        if (sum1 > target) {
            sum1 -= totalQueue[left];
            left++;
        } else {
            sum1 += totalQueue[right];
            right++;
        }
        
        count++;
    }
    
    return -1;
}

/*
totalQueue를 만들어 두 큐를 합침
totalSum을 계산하고, target을 전체 합의 절반으로 설정
sum1은 첫 번째 큐의 초기 합이고 left와 right 포인터를 사용하여 큐를 조작
while 루프에서 sum1이 target과 같아질 때까지 반복하고 sum1이 target보다 크면 왼쪽에서 원소를 제거하고, 작으면 오른쪽에서 원소를 추가
작업 횟수가 totalQueue.length * 3을 초과하면 -1을 반환

시간 복잡도 - O(n)
*/
