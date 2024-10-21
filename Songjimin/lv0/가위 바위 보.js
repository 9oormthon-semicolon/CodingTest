function solution(rsp) {
    let result = '';
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {
            result += '0';  // 가위 → 바위
        } else if (rsp[i] === '0') {
            result += '5';  // 바위 → 보
        } else if (rsp[i] === '5') {
            result += '2';  // 보 → 가위
        }
    }
    return result;
}

/*
  다른 사람의 문제풀이
  /*
 가위는 2 바위는 0 보는 5
*/
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}
*/
