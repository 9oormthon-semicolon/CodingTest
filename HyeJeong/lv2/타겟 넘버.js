function solution(numbers, target) {
    let answer = 0;
    
    function dfs(index, sum) {
        if (index === numbers.length) {
            if (sum === target) {
                answer++;
            }
            return;
        }
        
        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);
    }
    
    dfs(0, 0);
    return answer;
}

/*
answer 변수는 타겟 넘버를 만드는 방법의 수를 저장
dfs 함수는 재귀적으로 모든 가능한 조합을 탐색하고 index는 현재 처리 중인 숫자의 인덱스, sum은 현재까지의 합계
기저 조건: index가 numbers 배열의 길이와 같아지면, 모든 숫자를 처리한 것, 이때 sum이 target과 같으면 answer를 증가시킴
재귀 호출: 현재 숫자를 더하는 경우 / 현재 숫자를 빼는 경우
초기 호출은 dfs(0, 0)로 시작, 최종적으로 answer를 반환

시간복잡도 - O(2^n)
n은 numbers 배열의 길이 
각 숫자에 대해 더하거나 빼는 두가지 선택이 있기 때문
*/
