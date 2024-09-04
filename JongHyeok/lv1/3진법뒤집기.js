function solution(n) {
    return parseInt([...n.toString(3)].reverse().join("").toString(3), 3);
}

/*
[...n.toString()] // n를 문자열로 바꾸고 배열화
toString의 인자로 숫자 n이 들어가면 n진법으로 배열화, 시간복잡도 O(n)
reverse 배열을 뒤집는 함수로, 시간복잡도 O(n)
join 배열의 요소를 합치는 함수, 시간복잡도 O(n)
parseInt([...n.toString(3)], 3)  3진법 숫자를 10진법 숫자로 변환, 시간복잡도 O(1)
메서드 체이닝으로 전체 시간복잡도 O(n)
*/