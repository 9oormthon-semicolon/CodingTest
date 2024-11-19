function solution(number, k) {
    let answer = []; // 스택
    for (let num of number) {
        // 스택 채우기
        if (answer.length === 0) {
            answer.push(num);
            continue;
        } // 현재 숫자가 맨 위 숫자보다 큰 경우
        if (k > 0) {
            while (answer[answer.length - 1] < num) {
                answer.pop(); // 제거
                k -= 1;
                if (answer.length === 0 || k <= 0) break; // 순회가 끝나면
            }
        }
        answer.push(num); // 해당 숫자 push
    }
    answer = k > 0 ? answer.slice(0, -k) : answer; // 남은 숫자 있으면 잘라냄
    return answer.join('');
}

const number = "1924", k = 2;
console.log(solution(number, k));

/*
number 배열을 순회하며 각 요소들을 채우고 제거하기 때문에
연산은 최대 2n번
시간복잡도는 O(N)
*/