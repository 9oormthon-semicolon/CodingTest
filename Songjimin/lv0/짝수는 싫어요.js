function solution(n) {
    let result = [];
    
    // 1부터 n까지 반복하면서 홀수만 배열에 추가
    for (let i = 1; i <= n; i++) {
        if (i % 2 !== 0) { //홀수인지 확인
            result.push(i);
        }
    }
    return result;
}

/*
  다른 사람의 문제 풀이
  function solution(n) {
    var answer = [];

    for (let i = 1; i<=n; i+=2) answer.push(i)

    return answer;
  } // i+=2를 이용해 if문을 굳이 쓸 필요 없게 됨👀✨
*/
