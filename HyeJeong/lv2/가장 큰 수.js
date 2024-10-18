function solution(numbers) {
    let stringNumbers = numbers.map(num => num.toString());

    function compareNumbers(a, b) {
        let order1 = a + b;
        let order2 = b + a;
        return order2 - order1;
    }

    stringNumbers.sort(compareNumbers);

    let answer = stringNumbers.join('');
    
    return answer[0] === '0' ? '0' : answer;
}

/*
숫자를 문자열로 반환 numbers 배열의 각 숫자를 문자열로 변환
map 함수를 사용하여 새로운 배열 stringNumbers를 생성
정렬 함수 compareNumbers에서 두 문자열 a와 b를 비교하는 함수
a+b 와 b+a를 비교하요 어떤 순서가 더 큰수를 만드는지 결정, 반환값이 음수면 a가 앞으로 양수면 b가 앞으로 정렬
sort 메서드를 사용하여 stringNumbers 배열을 정렬, compareNumbers 함수를 기준으로 정렬이 이루어짐
join 메서드를 사용하여 정렬된 문자열 배열을 하나의 문자열로 연결
만약 결과 문자열의 첫 번째 문자가 '0'이라면 (모든 입력이 0인 경우), '0'을 반환, 그렇지 않으면 전체 answer 문자열을 반환

시간복잡도 - O(n log n)
*/
