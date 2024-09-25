// 최대 2명씩 탑승 가능
// 가장 가벼운 사람과 가장 무거운 사람
// 투 포인터 이용

function solution(people, limit) {
    // 몸무게 순으로 정렬
    people.sort((a,b) => a - b);
    // 왼쪽 포인터
    let i = 0;
    // 오른쪽 포인터
    let j = people.length - 1;
    let count = 0;
    
    // 포인터 끼리 만날때 까지 반복
    while(i <= j){
        // 가장 가벼운 사람과 가장 무거운 사람이 limit보다 작다면
        // 가벼운 사람을 무거운 사람과 같이 보냄 (왼쪽 포인터 증가)
        if(people[i] + people[j] <= limit) i++;
        // 무거운 사람은 항상 보냄 (오른쪽 포인터 감소)
        j--;

        count++;
    }
    return count
}

/* 시간 복잡도
 - people.sort((a,b) => a - b) : O(nlogn)

 - while(i <= j) : 포인터 끼리 만날때 까지 반복 : O(n)

 => 전체 시간 복잡도 : O(nlogn)
*/