function solution(arr) {
    return arr.filter((value, index) => {
        // 첫 번째 원소이거나, 현재 원소가 이전 원소와 다를 때만 필터링
        return index === 0 || value !== arr[index - 1];
    });
}

// 테스트 케이스
console.log(solution([1, 1, 3, 3, 0, 1, 1])); // [1, 3, 0, 1]
console.log(solution([4, 4, 4, 3, 3]));       // [4, 3]

/*
1. 배열 순회 : filter()는 내부적으로 배열의 각 요소를 한번 씩 순회합니다.
    이때 각 요소에 대해 주어진 조건을 평가합니다.
2. 조건 평가 : filter() 내부에서 각 요소에 대해
    (value, index) => index === 0 || value !== arr[index - 1]
    조건을 평가합니다. 이 조건 평가의 시간 복잡도는 0(1) 입니다.
3. 전체 복잡도 : filter()가 배열을 한 번 순회하므로
    전체 시간 복잡도 ⇒ 0(n)입니다. 여기서 n은 배열 arr의 길이입니다.

결론
filter()를 이용한 이 코드는 배열의 크기 n에 비례하여 동작하므로
👉 시간 복잡도 ⇒ 0(n)
*/
