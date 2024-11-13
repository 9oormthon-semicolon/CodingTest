function solution(n, left, right) {
    let answer = [];
    for (let i = left; i <= right; i++) {
        let quotient = Math.floor(i / n), remainder = i % n; // 몫, 나머지
        // 나머지가 크면 자리 바꿈
        if (quotient < remainder) [quotient, remainder] = [remainder, quotient];
        // 행렬 중 더 큰 인덱스에 1을 더한 것이 해당 위치 값
        answer.push(quotient + 1); 
    }
    return answer;
}

const n = 3, left = 2, right = 5;
console.log(solution(n, left, right));

/*
반복문이 left - right + 1번 반복하기 때문에
시간복잡도 O(left-right+1)
*/