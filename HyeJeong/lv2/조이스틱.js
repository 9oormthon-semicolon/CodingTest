function solution(name) {
    let answer = 0;
    let minMove = name.length - 1;
    
    for(let i = 0; i < name.length; i++) {
        answer += Math.min(name[i].charCodeAt() - 'A'.charCodeAt(), 'Z'.charCodeAt() - name[i].charCodeAt() + 1);

        let nextIndex = i + 1;
        while(nextIndex < name.length && name[nextIndex] === 'A') {
            nextIndex++;
        }
        
        minMove = Math.min(minMove, i * 2 + name.length - nextIndex, (name.length - nextIndex) * 2 + i);
    }
    
    return answer + minMove;
}

/*
상하 이동 계산으로 각 문자에 대해 'A'에서 해당 문자까지의 최소 이동 횟수를 계산
Math.min(name[i].charCodeAt() - 'A'.charCodeAt(), 'Z'.charCodeAt() - name[i].charCodeAt() + 1)를 사용하여 위로 이동하는 경우와 아래로 이동하는 경우 중 최소값을 선택
현재 위치에서 연속된 'A'의 끝을 찾고 세 가지 경우를 고려함
a. 정방향으로 쭉 이동하는 경우 (minMove = name.length - 1)
b. 현재 위치까지 왔다가 다시 돌아가는 경우 (i * 2 + name.length - nextIndex)
c. 뒤에서부터 역방향으로 이동한 후 다시 정방향으로 이동하는 경우 ((name.length - nextIndex) * 2 + i)
이 중 최소값을 minMove에 저장
상하 이동 횟수(answer)와 좌우 이동 횟수(minMove)를 합하여 반환

시간복잡도 - O(n) n은 name의 길이
*/
