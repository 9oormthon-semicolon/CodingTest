function solution(n, num, ppl, seq) {
    let numStr = '', curNum = 0; // 정답, 말해야 하는 숫자들의 순서, 현재 숫자

    while (numStr.length < num * ppl) { // 튜브가 미리 계산해야 할 숫자의 개수 (최대: 튜브가 말할 숫자의 개수 * 참가 인원)
        numStr += curNum.toString(n).toUpperCase(); // n진수 변환 후 알파벳은 대문자로
        curNum++;
    }
    // 숫자를 1씩 증가시키며 n진법 변환 후 문자열에 더합니다. 

    return Array.from({ length: num }, (_, idx) => numStr[idx * ppl + (seq - 1)]).join('');
    // 튜브가 말해야 하는 숫자들을 구합니다.
}

const n = 2, t = 4, m = 2, p = 1;
console.log(solution(n, t, m, p));

/*
시간복잡도는 튜브가 말해야 할 숫자의 개수 t와 게임 참가 인원 m에 의해서 결정됩니다.
O(t*m)번 반복되는 while 반복문 안에서,
toString 함수는 변환하려는 숫자의 크기에 따라 달라집니다.
변환하는 숫자의 최대 자리 수는 logn(t*m)입니다.
따라서 전체 시간복잡도는 O((n*m)logn(t*m))
*/