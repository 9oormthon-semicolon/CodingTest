function solution(numbers) {
    let answer = numbers.map((number) => number.toString()).sort((a, b) => (b+a) - (a+b));
    console.log(answer);

    return answer[0] === "0" ? "0" : answer.join(''); // 0만 있는 경우는 맨 앞의 원소가 0이기 때문
}

const numbers = [6,10,2];
console.log(solution(numbers));

/*
숫자 배열을 모두 문자열로 바꿔줍니다 (문자열로 바꾸면 b+a와 a+b의 연산값이 달리 나옵니다.)
sort로 b+a와 a+b를 비교해 정렬합니다.
sort 함수를 사용하기 때문에 시간복잡도 O(nlogn)
*/
