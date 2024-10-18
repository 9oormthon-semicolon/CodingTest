function solution(numbers, target) {
    function dfs(idx, curSum) {
        if (idx === numbers.length) return curSum === target ? 1 : 0; // 경로가 끝날 때마다 합계가 타겟 넘버와 같으면
        // 각 경로에서 다음 숫자를 더하거나 뺍니다.
        const add = dfs(idx + 1, curSum + numbers[idx]); // 더하기
        const subtract = dfs(idx + 1, curSum - numbers[idx]); // 빼기
        
        return add + subtract; // 두 경우의 결과를 합산하여 반환
    }
    return dfs(0, 0);
}

const numbers = [1, 1, 1, 1, 1];
const target = 3;
console.log(solution(numbers, target));

/*
모든 경우의 수를 다 따져 봐야 하기에 DFS BFS 모두 사용할 수 있습니다.
DFS와 BFS를 둘 다 사용할 수 있는 상황엔 시간복잡도가 비슷하게 나오기 때문에,
공간복잡도에서 비교적 유리한 DFS로 풀어보았습니다.
*/