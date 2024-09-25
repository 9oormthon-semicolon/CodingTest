function solution(people, limit) {
    let answer = 0;
    let left = 0; // 가장 가벼운 사람
     // 가장 무거운 사람
     
    // 몸무게 정렬
    // 자바스크립트 TimSort는 O(nlogn)의 시간복잡도
    people.sort((a, b) => a - b);
    
    while (people.length) { // 시간복잡도 O(n) [모든 보트에 1명만 타는 경우]
        // 가벼운 사람 + 가장 무거운 사람 / 무게가 limit을 초과하기 전까지 가벼운 사람 태움
        let right = people.length - 1;
        if (people[left] + people[right] <= limit) {
            people.shift();
            people.pop();
            answer++;
        } 
        // 가벼운 사람이 타지 못 하는 경우
        else {
            people.pop();
            answer++;
        }
    }
    return answer;
}

const people = [70, 50, 80, 50];
const limit = 100;

console.log(solution(people, limit));

/*
시간복잡도 sort 함수의 O(nlogn)
*/