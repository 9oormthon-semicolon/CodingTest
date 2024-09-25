function solution(people, limit) {
    let count = 0; // 구명보트를 사용하는 횟수를 카운트할 변수
    // 사람들을 오름차순으로 정렬하여 가장 가벼운 사람과 가장 무거운 사람을 쉽게 찾을 수 있도록 함
    let lifeBoat = people.sort((a, b) => a - b);
    
    // 모든 사람이 구명보트를 타고 나갈 때까지 반복
    while (lifeBoat.length !== 0) {
        // 가장 가벼운 사람과 가장 무거운 사람의 무게 합이 limit 이하인지 확인
        if (lifeBoat[0] + lifeBoat[lifeBoat.length - 1] <= limit) {
            count++; // 구명보트를 한 번 사용
            lifeBoat.shift(); // 가장 가벼운 사람을 보트에서 내림
            lifeBoat.pop(); // 가장 무거운 사람을 보트에서 내림
        } else {
            count++; // 구명보트를 한 번 사용
            lifeBoat.pop(); // 가장 무거운 사람만 보트에서 내림 (가장 가벼운 사람은 보트에 남겨짐)
        }
    }
    return count;
}

//시간복잡도
//정렬 - O(n log n)
//while문 - O(n)
//최종 - O( n log n)
