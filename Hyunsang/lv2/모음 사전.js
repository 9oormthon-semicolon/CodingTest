function solution(word) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    const multipliers = [781, 156, 31, 6, 1]; // 각 위치의 가중치 미리 계산
    let answer = 0;

    // 각 문자에 대해 순서를 계산
    for (let i = 0; i < word.length; i++) {
        const char = word[i];
        const index = vowels.indexOf(char); // 문자의 위치를 찾음
        answer += index * multipliers[i] + 1; // 가중치를 곱하고 1을 더해 순서를 계산
    }

    return answer;
}

// 시간복잡도 O(1)