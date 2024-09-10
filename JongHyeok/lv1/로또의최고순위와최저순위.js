// function solution(lottos, win_nums) {
//     const rank = [6, 6, 5, 4, 3, 2, 1];
  
//     let lowest = lottos.filter((v) => win_nums.includes(v)).length;
//     let unknown = lottos.filter((v) => v === 0).length;
  
//     const highest = lowest + unknown;
  
//     return [rank[highest], rank[lowest]];
// }

// const lottos = [44, 1, 0, 0, 31, 25];
// const win_nums = [31, 10, 45, 1, 6, 19];

// console.log(solution(lottos, win_nums));

function solution(lottos, win_nums) {
    const rank = [6, 6, 5, 4, 3, 2, 1];
    
    const winNumSet = new Set(win_nums);
    let lowest = lottos.filter((v) => winNumSet.has(v)).length;

    let unknown = lottos.filter((v) => v === 0).length;

    const highest = lowest + unknown;

    return [rank[highest], rank[lowest]];
};

/*
6개 맞힘 > 1등
5개 맞힘 > 2등
...
0개 맞힘 > 7등 (7등은 그 외로 6등과 같음)

맞힌 숫자의 개수가 최저 순위를 결정
맞힌 숫자 + 맞힐 가능성 있는 숫자(0)의 개수이 최고 순위를 결정

filter 함수를 썼기 때문에 시간복잡도 O(n^2)

---
Set으로 변환 (O(n))후, has (O(1)) 쓰는 게 유리
시간 복잡도 O(n)
*/