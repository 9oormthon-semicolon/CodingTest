function solution(priorities, location) {
    let queue = priorities.map((priority, index) => ({
        id: index,
        priority: priority
    }));
    
    let count = 0;
    
    while (queue.length > 0) {
        let current = queue.shift();
        if (queue.some(process => process.priority > current.priority)) {
            queue.push(current);
        } else {
            count++;
            if (current.id === location) {
                return count;
            }
        }
    }
}
/*
각 프로세스에 고유 ID와 우선순위를 줘서 큐를 만듦
큐의 첫 번째 프로세스를 꺼내서 큐에 남아있는 프로세스 중 현재 프로세스보다 우선순위가 높은 것이 있는 지 확인
더 높은 우선순위의 포르세스가 있으면 현재 프로세크를 큐의 맨 뒤로 보내고 그렇지 않으면 count증가
실행한 프로세스가 location이라면 count 반환, 이 과정을 큐가 빌때까지 반복하게 함

문제를 읽고 풀려고 했을땐 간단한 문제라고 생각했는데 구현하려고 하니 아니였다
계속 풀어보다 결국 some 메서드 사용해서 우선순위 확인하는 방법을 사용하였다

시간복잡도 - O(n^2)
while루프 n번 실행
shift는 O(n), some은 O(n), push는 O(1) 
*/
