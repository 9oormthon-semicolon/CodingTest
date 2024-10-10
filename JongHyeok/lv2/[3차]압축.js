function solution(msg) {
    var answer = [];
    const alphabetMap = new Map(
        Array.from({ length: 26 }, (_, i) => [String.fromCharCode(65 + i), i + 1])
    );
    let w = '';
    let mapSize = alphabetMap.size + 1;
    for (let i = 0; i < msg.length; i++) {
        const c = msg[i];
        const wc = w + c;
        
        if (!alphabetMap.has(wc)) { // 합쳐진 문자들이 사전에 없을 경우
            answer.push(alphabetMap.get(w)); // 해당 문자 추가
            alphabetMap.set(wc, mapSize++); // 뒤의 문자와 합친 후 사전에 추가
            w = c; // 처리 중인 문자 갱신
        }
        else w = wc; // 있을 경우, 처리 중인 문자 합쳐진 글자로 갱신
    }
    if (w) answer.push(alphabetMap.get(w)); // 마지막 문자 처리 
    return answer;
}

const msg = "KAKAO";

console.log(solution(msg));

/*
msg에 대해 한번 순회하기 때문에 시간복잡도는 O(N)
*/