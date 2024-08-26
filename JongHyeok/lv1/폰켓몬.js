function solution(nums) {
    var answer = [];
    var max = nums.length / 2;
        
    for(let i = 0; i < nums.length; i++) {
        if(answer.length < max) {
            if(!answer.includes(nums[i])) {
                answer.push(nums[i]);
            }
        } else if (answer.length === max) {
            break;
        }
    }
    return answer.length;    
}

const nums = [3,1,2,3];
console.log(solution(nums));

/* (nums 배열의 길이 / 2)만큼 포켓몬을 고를 수 있습니다.
최대한 많은 종류의 포켓몬을 골라야 합니다.
그러기 위해서는 배열을 순회하며 새로운 종류의 포켓몬이 있다면,
정답(내가 가진 포켓몬의 종류 수)에 추가합니다.
(단, 내가 가진 포켓몬의 종류 수를 초과한다면 더는 추가할 수 없습니다.)
시간복잡도: O(n)*/