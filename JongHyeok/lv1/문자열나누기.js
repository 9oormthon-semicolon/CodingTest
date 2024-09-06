function solution(s) {
    let answer = 0;
    let count = 0;
    let current;

    for (let char of s) {
        if (count === 0) {
            current = char;
            count = 1;
        } else if (char === current) { // 첫 문자와 같은 문자가 나오면
            count++;
        } else { // 첫 문자와 다른 문자가 나오면
            count--;
        }

        if (count === 0) { // 첫 문자 카운트와 첫 문자와 다른 문자의 카운트가 같으면
            answer++;
        }
    }

    return count > 0 ? answer + 1 : answer; // 문자열이 남아있는 경우
}

/*
첫 문자 x와 x가 아닌 문자의 수가 서로 같아지는 순간에만
분해한 문자열 를 추가합니다.
남은 문자가 있으면 최종 분해한 문자열의 수 + 1
입력 문자열 s를 1번 순회하기 때문에 시간복잡도 O(n)입니다.
*/