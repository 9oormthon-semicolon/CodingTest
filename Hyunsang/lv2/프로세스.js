function solution(priorities, location) {
    let cnt = 0; // 실행된 프로세스의 수
    
      // 프로세스와 인덱스를 함께 저장
    let queue = priorities.map((priority, index) => ({ index, priority })); 
  
    console.log(queue)
    while (queue.length > 0) {
        // 현재 큐의 첫 번째 프로세스를 꺼냄
        const current = queue.shift();
        
        // 현재 프로세스보다 우선순위가 높은 프로세스가 있는지 확인
        if (queue.some(item => item.priority > current.priority)) {
            // 우선순위가 높은 프로세스가 있다면 현재 프로세스를 다시 큐에 넣음
            queue.push(current);
        } else {
            // 우선순위가 높은 프로세스가 없다면 현재 프로세스를 실행
            cnt++;
            // 만약 현재 프로세스가 우리가 알고 싶은 프로세스라면 cnt를 반환
            if (current.index === location) {
                return cnt;
            }
        }
    }
}
/*
queue.shift() 연산 : O(1)
queue.some(item => item.priority > current.priority)는 
이 경우, 큐의 모든 요소를 확인해야 하므로 : O(n)

전체적으로 while 루프는 큐가 빌 때까지 실행되어서, 최악의 경우 모든 원소가 n번 확인
따라서, 이 코드의 전체 시간 복잡도는 O(n^2)
*/