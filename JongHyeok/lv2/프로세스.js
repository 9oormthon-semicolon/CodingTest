function solution(priorities, location) {
    let ans = 0;
    let highest = Math.max(...priorities);
    
    while (true) {
        let first = priorities.shift(); // 첫번째 요소을 추출

        if (highest === first) { // 첫번째 요소가 가장 높은 우선순위를 가지면
            ans++; // 순서 + 1
            if (location === 0) { // 목표 프로세스가 첫번째 요소이라면
                break; // 정답
            } else { // 목표 프로세스의 위치를 앞당김
                location--;
            }
        } else { // 첫번째 요소가 가장 높은 우선 순위가 아니라면
            priorities.push(first); // 다른 프로세스가 먼저 실행되도록 배열의 뒤로 보냄
            if (location === 0) { // 뒤로 보내진 프로세스가 목표 프로세스였다면
                location = priorities.length - 1; // 목표 프로세스의 순서는 꼴찌
            } else { // 뒤로 보내진 프로세스가 목표 프로세스가 아니었다면
                location--; // 목표 프로세스의 순서는 -1
            }
        }
    }
    return ans;
}

const priorities = [2,1,3,2];
const location = 2;
console.log(solution(priorities, location));

/*
우선순위 배열 priorities를 원형 큐라고 가정하고 풀어보았습니다.
(완전한 원형 큐는 아니고, 동작만 유사합니다...)
정답을 찾을 때까지 맨 앞의 요소를 추출해서
가장 우선 순위가 높은 프로세스라면 큐에서 빼내고,
아니라면 뒤로 보냈습니다. (location을 조정하며) 
이것을 반복하며 목표 프로세스의 우선순위가 가장 높고 맨 앞자리에 있을 때
while 반복문을 탈출해 정답을 도출해냈습니다.

while 반복문은 프로세스의 길이만큼 (priority의 길이) 반복합니다. O(N)
while 반복문 안의 shift 연산은 O(N)의 시간복잡도를 가지고 있기 때문에
전체 시간복잡도는 O(N^2)
*/