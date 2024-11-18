function solution(n, k) {
    const answer = []; //결과를 저장할 배열
    const people = Array.from({length: n}, (_, i) => i + 1); //1부터 n까지의 숫자를 담은 배열
    let factorial = people.reduce((acc, cur) => acc * cur, 1); //n!을 계산
    k--;  // 0-based index로 변환

    while (answer.length < n) {
        factorial = factorial / people.length;
        const index = Math.floor(k / factorial);
        answer.push(people[index]);
        people.splice(index, 1);
        k = k % factorial;
    }

    return answer;
}

/*
factorial을 남은 사람 수로 나눔
index를 계산하여 현재 자리에 올 사람을 결정
선택된 사람을 answer에 추가하고 people에서 제거
k를 갱신
모든 자리가 채워질 때까지 반복

시간 복잡도 - O(n)
n명의 사람에 대해 각각 한 번씩 처리하기 때문
*/
