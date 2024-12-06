function solution(n) {
    let answer = '';
    const numArr = [4, 1, 2];

    while(n) {
        // 기존 문자열에 수 추가
        answer = numArr[n % 3] + answer;
        // 나머지가 0인 경우/ 0이 아닌 경우
        n = n % 3 === 0 ? n / 3 - 1 : Math.floor(n / 3);
    }
    return answer;
}

/*
시간복잡도 O(log₃N)
*/