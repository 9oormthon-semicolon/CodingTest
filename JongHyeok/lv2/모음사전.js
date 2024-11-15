function solution(word) {
    let count = 0, isFound = false;
    let vowels = ["A", "E", "I", "O", "U"];
  
    const dfs = (cur) => {
        // 길이가 5보다 크거나 찾았다면
        if (cur.length > 5 || isFound) return;
        // 목표 단어라면
        if (cur === word) {
            isFound = true;
            return;
        }
        count++;
        // 배열을 순회하며 각 모음을 문자열에 추가하여 dfs 재귀적으로 호출
        for (let i = 0; i < vowels.length; i++) {
            dfs(cur + vowels[i]);
        }
    };
  
    dfs("");
  
    return count;
}

const word = 'AAAAE';
console.log(solution(word));

/*
5개의 모음으로 최대 길이가 5인 단어로 만들기 때문에
시간 복잡도 O(5^5)
*/