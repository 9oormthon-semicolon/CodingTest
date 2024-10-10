function solution(msg) {
    const dictionary = {};
    const result = [];
    let nextIndex = 27;

    for (let i = 65; i <= 90; i++) {
        dictionary[String.fromCharCode(i)] = i - 64;
    }
    
    let w = '';
    for (let i = 0; i < msg.length; i++) {
        w += msg[i];
        if (!dictionary[w]) {
            result.push(dictionary[w.slice(0, -1)]);
            dictionary[w] = nextIndex++;
            w = msg[i];
        }
    }
    if (w) {
        result.push(dictionary[w]);
    }
    
    return result;
}

/*
A부터 Z까지의 알파벳을 사전에 추가(각 알파벳의 색인 번호는 1부터 26까지)
입력 문자열을 순회하면서 현재 문자를 w에 추가
w가 사전에 없으면 w에서 마지막 문자를 제외한 문자열의 색인 번호를 결과에 추가, w를 사전에 추가하고 새로운 색인 번호를 할당, w를 현재 문자로 초기화
반복이 끝난 후 남은 w의 색인 번호를 결과에 추가
(개인적으로 문제가 꽤 어려워서 시간이 오래 걸렸다)

시간복잡도 - O(n) n은 문자열의 길이
문자열 순회하는데 O(n)의 시간이 걸림
*/
