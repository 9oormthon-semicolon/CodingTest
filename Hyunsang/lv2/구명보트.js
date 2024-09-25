function solution(people, limit) {
    // 사람들의 몸무게를 오름차순으로 정렬
    const sortPeople = people.sort((a, b) => a - b);
    
    // 두 포인터를 사용하여 왼쪽과 오른쪽 인덱스를 설정
    let left = 0; 
    let right = people.length - 1;
    
    // 구명보트의 개수를 세는 변수
    let boats = 0;
    
    // 두 포인터가 만나거나 교차할 때까지 반복
    while (left <= right) {
        // 가장 가벼운 사람(left)과 가장 무거운 사람(right)의 몸무게를 더했을 때 제한 내일 경우
        if (sortPeople[left] + sortPeople[right] <= limit) {
            left++; // 왼쪽 포인터를 이동시켜 가벼운 사람을 보트에 태움
        }
        right--; // 오른쪽 포인터를 이동시켜 무거운 사람을 보트에 태움
        boats++; // 보트 하나 추가
    }
    
    // 총 필요한 구명보트의 수를 반환
    return boats;
}

/**
 * 시간복잡도 :
 * people.sort((a, b) => a - b)는 
 * JavaScript에서 기본적으로 O(n log n)의 시간 복잡도를 가진다.
 * 루프는 두 포인터가 배열의 양 끝에서 시작해 서로 만날 때까지 반복
 * 각 반복에서 포인터는 한 번씩 이동하며,
 * 결국 n번의 비교. 이 과정은 O(n) 
 * 최종 O(n log n)
 */