function solution(nums) {
    const max = nums.length / 2;
    const arr = [...new Set(nums)];
    return arr.length > max ? max : arr.length
}

const nums = [3,1,2,3];
console.log(solution(nums));

/* (nums 배열의 길이 / 2)만큼 포켓몬을 고를 수 있습니다.
최대한 많은 종류의 포켓몬을 골라야 합니다.
set로 중복 포켓몬 없앱니다. > 포켓몬의 종류만 남습니다.
전체 포켓몬의 종류와 고를 수 있는 포켓몬의 종류 둘 중 작은 수가 정답입니다.
배열 > Set의 시간복잡도: O(n)*/

/*문제 카테고리가 해시이기 떄문에 답을 바꿨습니다...
  전에 쓴 답은 시간 복잡도도 O(n^2)였습니다...*/