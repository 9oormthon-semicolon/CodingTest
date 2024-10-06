function solution(queue1, queue2) {
    let sum1 = queue1.reduce((acc, cur) => acc + cur, 0)
    let sum2 = queue2.reduce((acc, cur) => acc + cur, 0)
    const limit = (queue1.length + queue2.length) * 2
    let q1 = 0, q2 = 0
    let cnt = 0

    while (cnt <= limit) {
        if (sum1 === sum2) return cnt

        if (sum1 < sum2) {
            sum1 += queue2[q2]
            sum2 -= queue2[q2]
            queue1.push(queue2[q2])
            q2++
            
        } else {
            sum2 += queue1[q1]
            sum1 -= queue1[q1]
            queue2.push(queue1[q1])
            q1++
            
        }

        cnt++
    }

    return -1
}

/* 
    갑작스러운 여행 갔다와서 늦게 풀었습니다. 죄송합니다
    
    처음에 문제를 한쪽 q1에서만 shift하여 다른쪽에 삽입해서 푸는 건줄 알았는데
    q1 q2 둘 다 shift가 가능하더군요
    그래서 둘이 같은 값이 아니면 큰쪽에 있는 값을 shift해서 나눠주는 방향으로 접근했습니다. 
    q1,q2의 포인터를 이용해서 구현했으나, 반복문 끝나는 조건을 (queue1.length + queue2.length)로 했을때 테스트 케이스 1번만 틀렸습니다. 
    이유를 고민하다가 아마도 옮긴 값이 원래 있던 큐로 다시 돌아가는 경우에 수도 있지 않나 싶어서 limit이 덜 충분할 거 같아 * 2를 해줬습니다. // const limit = (queue1.length + queue2.length) * 2
    
    시간복잡도는 최대 limit이기 때문에 O(N)인 것 같습니다.
    
*/